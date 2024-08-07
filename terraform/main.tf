terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
  # where our tf state file is stored
  backend "s3" {
    bucket = "app-resume-site-terraform-state"
    key    = "state/terraform.tfstate"
    region = "us-east-1"
  }
}

# Configure the AWS Provider
provider "aws" {
  region = var.region
}

resource "aws_instance" "app-instance" {
  ami                    = "ami-04a81a99f5ec58529"
  instance_type          = "t2.micro"
  key_name               = aws_key_pair.deployer.key_name
  vpc_security_group_ids = [aws_security_group.app-sg.id]
  iam_instance_profile   = aws_iam_instance_profile.app-ec2-iam-profile.name
  connection {
    type        = "ssh"
    host        = self.public_ip
    user        = "ubuntu"
    private_key = var.private_key
    timeout     = "45"
  }
  tags = {
    "name" = "resume-site"
  }
}

resource "aws_iam_instance_profile" "app-ec2-iam-profile" {
  name = "app-ec2-iam-profile"
  role = aws_iam_role.ec2-ecr-auth.name
}

resource "aws_iam_role" "ec2-ecr-auth" {
  name = "ec2-ecr-auth"

  # Terraform's "jsonencode" function converts a
  # Terraform expression result to valid JSON syntax.
  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Sid    = ""
        Principal = {
          Service = "ec2.amazonaws.com"
        }
      },
    ]
  })

  tags = {
    "name" = "resume-site"
  }
}

resource "aws_security_group" "app-sg" {
  egress = [
    {
      cidr_blocks      = ["0.0.0.0/0"]
      description      = ""
      from_port        = 0
      ipv6_cidr_blocks = []
      prefix_list_ids  = []
      protocol         = "-1"
      security_groups  = []
      self             = false
      to_port          = 0
    }
  ]
  ingress = [
    {
      cidr_blocks      = ["0.0.0.0/0", ]
      description      = ""
      from_port        = 22
      ipv6_cidr_blocks = []
      prefix_list_ids  = []
      protocol         = "tcp"
      security_groups  = []
      self             = false
      to_port          = 22
    },
    {
      cidr_blocks      = ["0.0.0.0/0", ]
      description      = ""
      from_port        = 80
      ipv6_cidr_blocks = []
      prefix_list_ids  = []
      protocol         = "tcp"
      security_groups  = []
      self             = false
      to_port          = 80
    },
  ]
}

resource "aws_key_pair" "deployer" {
  key_name   = var.key_name
  public_key = var.public_key
}

# resource "aws_s3_bucket" "resume_site_bucket" {
#   bucket = var.bucket_name
# }

# resource "aws_s3_bucket_ownership_controls" "resume_site" {
#   bucket = aws_s3_bucket.resume_site_bucket.id
#   rule {
#     object_ownership = "BucketOwnerPreferred"
#   }
# }

# resource "aws_s3_bucket_public_access_block" "resume_site" {
#   bucket = aws_s3_bucket.resume_site_bucket.id

#   block_public_acls       = false
#   block_public_policy     = false
#   ignore_public_acls      = false
#   restrict_public_buckets = false
# }

# resource "aws_s3_bucket_acl" "resume_site" {
#   depends_on = [
#     aws_s3_bucket_ownership_controls.resume_site,
#     aws_s3_bucket_public_access_block.resume_site,
#   ]

#   bucket = aws_s3_bucket.resume_site_bucket.id
#   acl    = "public-read"
# }

# resource "aws_s3_bucket_policy" "resume-site" {
#   bucket = aws_s3_bucket.resume_site_bucket.id

#   # Policy JSON for allowing public access
#   policy = jsonencode({
#     "Version" : "2012-10-17",
#     "Statement" : [
#       {
#         "Effect" : "Allow",
#         "Principal" : "*",
#         "Action" : [
#           "s3:GetObject",
#         ],
#         "Resource" : [
#           "arn:aws:s3:::${var.bucket_name}/*"
#         ],
#       }
#     ]
#   })
# }

# module "template_files" {
#   source = "hashicorp/dir/template"

#   base_dir = "${path.module}/web/out/"
# }

# resource "aws_s3_bucket_website_configuration" "web-config" {
#   bucket = aws_s3_bucket.resume_site_bucket.id

#   index_document {
#     suffix = "index.html"
#   }
# }

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