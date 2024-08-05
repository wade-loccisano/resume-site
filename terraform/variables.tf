variable "region" {
  type        = string
  default     = "us-east-1"
  description = "My default aws region"
}

variable "tf_state_bucket_name" {
  type        = string
  default     = "app-resume-site-terraform-state"
  description = "tf state stored under bucket name /state"
}

variable "public_key" {

}

variable "private_key" {

}

variable "key_name" {

}
