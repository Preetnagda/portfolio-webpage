locals {
  manage_dns = var.hosted_zone_name != null && length(var.aliases) > 0

  # One A and one AAAA alias record per domain (AAAA because the
  # distribution has IPv6 enabled).
  dns_records = local.manage_dns ? {
    for pair in setproduct(var.aliases, ["A", "AAAA"]) :
    "${pair[0]}-${pair[1]}" => { name = pair[0], type = pair[1] }
  } : {}
}

data "aws_route53_zone" "site" {
  count        = local.manage_dns ? 1 : 0
  name         = var.hosted_zone_name
  private_zone = false
}

resource "aws_route53_record" "site" {
  for_each = local.dns_records

  zone_id = data.aws_route53_zone.site[0].zone_id
  name    = each.value.name
  type    = each.value.type

  # The apex records were created by hand before Terraform managed DNS;
  # allow_overwrite lets the first apply adopt them instead of failing.
  allow_overwrite = true

  alias {
    name                   = aws_cloudfront_distribution.site.domain_name
    zone_id                = aws_cloudfront_distribution.site.hosted_zone_id
    evaluate_target_health = false
  }
}
