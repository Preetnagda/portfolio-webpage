variable "aws_region" {
  description = "Region for the S3 bucket (CloudFront itself is global)"
  type        = string
  default     = "ap-southeast-2"
}

variable "bucket_name" {
  description = "Globally unique name for the site bucket"
  type        = string
}

variable "aliases" {
  description = "Optional custom domain names for the distribution (requires acm_certificate_arn)"
  type        = list(string)
  default     = []
}

variable "acm_certificate_arn" {
  description = "Optional ACM certificate ARN for the custom domains — the certificate must live in us-east-1"
  type        = string
  default     = null
}

variable "hosted_zone_name" {
  description = "Route 53 public hosted zone for the domains in aliases; set to null to manage DNS outside Terraform"
  type        = string
  default     = null
}
