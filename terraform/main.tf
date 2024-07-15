terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

# Configure the AWS Provider
provider "aws" {
  region = var.region
}

resource "aws_s3_bucket" "resume_site" {
  bucket = var.bucket_name
}

resource "aws_s3_bucket_ownership_controls" "resume_site" {
  bucket = aws_s3_bucket.resume_site.id
  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}

resource "aws_s3_bucket_public_access_block" "resume_site" {
  bucket = aws_s3_bucket.resume_site.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_acl" "resume_site" {
  depends_on = [
    aws_s3_bucket_ownership_controls.resume_site,
    aws_s3_bucket_public_access_block.resume_site,
  ]

  bucket = aws_s3_bucket.resume_site.id
  acl    = "public-read"
}

resource "aws_s3_bucket_policy" "resume-site" {
  bucket = aws_s3_bucket.resume_site.id

  # Policy JSON for allowing public access
  policy = jsonencode({
    "Version" : "2012-10-17",
    "Statement" : [
      {
        "Effect" : "Allow",
        "Principal" : "*",
        "Action" : [
          "s3:GetObject",
        ],
        "Resource" : [
          "arn:aws:s3:::${var.bucket_name}/*"
        ],
      }
    ]
  })
}

module "template_files" {
  source = "hashicorp/dir/template"

  base_dir = "${path.module}/web/out"
}

resource "aws_s3_bucket_website_configuration" "web-config" {
  bucket = aws_s3_bucket.resume_site.id

  index_document {
    suffix = "index.html"
  }
}

resource "aws_s3_object" "source" {
  bucket = aws_s3_bucket.resume_site.id

  for_each     = module.template_files.files
  key          = each.key
  content_type = each.value.content_type

  source  = each.value.source_path
  content = each.value.content

  etag = each.value.digests.md5
}