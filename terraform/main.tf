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

resource "aws_s3_bucket" "resume_site_bucket" {
  bucket = var.bucket_name
}

resource "aws_s3_bucket_ownership_controls" "resume_site" {
  bucket = aws_s3_bucket.resume_site_bucket.id
  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}

resource "aws_s3_bucket_public_access_block" "resume_site" {
  bucket = aws_s3_bucket.resume_site_bucket.id

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

  bucket = aws_s3_bucket.resume_site_bucket.id
  acl    = "public-read"
}

resource "aws_s3_bucket_policy" "resume-site" {
  bucket = aws_s3_bucket.resume_site_bucket.id

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

  base_dir = "${path.module}/web/out/"
}

resource "aws_s3_bucket_website_configuration" "web-config" {
  bucket = aws_s3_bucket.resume_site_bucket.id

  index_document {
    suffix = "index.html"
  }
}

# resource "aws_s3_object" "static_files" {
#   for_each = module.template_files.files

#   bucket       = aws_s3_bucket.resume_site_bucket.id
#   key          = each.key
#   content_type = each.value.content_type

#   # The template_files module guarantees that only one of these two attributes
#   # will be set for each file, depending on whether it is an in-memory template
#   # rendering result or a static file on disk.
#   source  = each.value.source_path
#   content = each.value.content

#   # Unless the bucket has encryption enabled, the ETag of each object is an
#   # MD5 hash of that object.
#   etag = each.value.digests.md5
# }

# resource "aws_s3_object" "dist" {
#   for_each = fileset("../web/out/", "*")

#   bucket = aws_s3_bucket.resume_site_bucket.id
#   key    = each.value
#   source = "../web/out/${each.value}"
#   # etag makes the file update when it changes; see https://stackoverflow.com/questions/56107258/terraform-upload-file-to-s3-on-every-apply
#   etag   = filemd5("../web/out/${each.value}")
# }