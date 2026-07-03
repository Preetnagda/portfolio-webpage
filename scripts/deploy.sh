#!/usr/bin/env bash
# Build the site and deploy it to the S3 + CloudFront stack defined in ./infra.
# Requires: terraform apply already run in infra/, AWS CLI credentials configured.
set -euo pipefail

cd "$(dirname "$0")/.."

BUCKET=$(terraform -chdir=infra output -raw bucket_name)
DISTRIBUTION_ID=$(terraform -chdir=infra output -raw distribution_id)

npm run build

# Hashed assets never change content under the same name: cache forever.
# config/ assets keep their names when content changes: cache for an hour.
# index.html references new asset hashes every build: always revalidate.
aws s3 sync dist/ "s3://$BUCKET" --delete \
  --cache-control "public,max-age=31536000,immutable" \
  --exclude "index.html" --exclude "config/*"
aws s3 sync dist/config/ "s3://$BUCKET/config/" \
  --cache-control "public,max-age=3600"
aws s3 cp dist/index.html "s3://$BUCKET/index.html" \
  --cache-control "no-cache"

aws cloudfront create-invalidation \
  --distribution-id "$DISTRIBUTION_ID" \
  --paths "/index.html" >/dev/null

echo "Deployed: $(terraform -chdir=infra output -raw site_url)"
