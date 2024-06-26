# Connect to S3

### Using the AWS CLI

1. Install the [AWS CLI](../../references/starter-templates/third-party/aws.md) into your DevBox.
2. Go to **AWS Console > IAM > Users >  Create user**.
3. Add the following permissions to the user: **AmazonS3FullAccess**.
4. After you obtained the credentials, log into the AWS CLI by running:\
   `aws configure`
5. Update your S3 access policy to allow access to the new user.
6. Verify you can query the S3 bucket:\
   `aws s3 ls <your-bucket-name>`

### VPC-only access  policy
