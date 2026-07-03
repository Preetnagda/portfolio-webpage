# Preet Nagda - Terminal Portfolio

A terminal-flavoured one-page portfolio built with React, TypeScript and Vite. Sticky `./section` nav, `❯ command` section headers, git-log-style experience timeline, One Dark palette.

## Getting started

```bash
npm install
npm run dev      # start dev server
npm run build    # type-check + production build (dist/)
npm run preview  # serve the production build locally
```

## Profile config folder

All profile-related data lives in [`config/`](config/) in the codebase — currently `profile.json`, with images to follow. `config/sample.profile.json` is a placeholder template documenting the schema: copy it over `profile.json` and fill in your own details to reuse this site. `profile.json` is imported statically (type-checked against `src/types/profile.ts` at build time). Other assets placed in `config/` (e.g. images) are referenced via `configUrl('images/…')` from `src/lib/config.ts`; the Vite plugin in `vite.config.ts` serves the folder at `/config` in dev and copies it into `dist/config` on build.

## Structure

```
config/profile.json         # all portfolio content (identity, skills, projects, …)
src/types/profile.ts        # TypeScript types for the config schema
src/components/SiteNav.tsx  # sticky navigation with scroll-spy highlighting
src/components/sections/    # hero, about, skills, projects, experience, contact
src/components/Footer.tsx   # ❯ exit 0
infra/                      # Terraform: private S3 bucket + CloudFront (OAC)
scripts/deploy.sh           # build, sync to S3 with cache headers, invalidate
```

## Deployment (AWS S3 + CloudFront)

One-time setup — creates a private S3 bucket fronted by CloudFront with Origin Access Control:

```bash
cd infra
cp terraform.tfvars.example terraform.tfvars   # fill in bucket name, domains, cert ARN
terraform init
terraform apply
```

Then every deploy is:

```bash
npm run deploy
```

which builds, syncs `dist/` to the bucket (hashed assets cached immutably, `config/` for an hour, `index.html` never), invalidates `index.html` on CloudFront, and prints the site URL.

Custom domain: request an ACM certificate **in us-east-1** covering your domains, set `aliases`, `acm_certificate_arn` and (if the zone is in Route 53) `hosted_zone_name` in `terraform.tfvars`, and re-apply — A/AAAA alias records are created automatically.

Deploy-specific values live in `terraform.tfvars`, which is gitignored along with the Terraform state (`infra/*.tfstate`) since deploys run from this machine only.
