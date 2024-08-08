# Connect to S3

## Using the AWS CLI

1. Install the [AWS CLI](../../../references/starter-templates/third-party/aws.md) into your DevBox.
2. Go to **AWS Console > IAM > Users >  Create user**.
3. Add the following permissions to the user: **AmazonS3FullAccess**.
4. After you obtained the credentials, log into the AWS CLI by running:

```
aws configure
```

5. Update your S3 access policy to allow access to the new user.
6. Verify you can query the S3 bucket:

```
aws s3 ls <your-bucket-name>
```

## VPC-only access policy

### Configure the Endpoint

1. Follow the [Connecting to AWS](../../existing-network/connecting-to-aws.md) guide.
2. Go to **VPC > Endpoints > Create Endpoint.**
3. Enter a name then select "AWS Services" as your Service category.
4. In the "Services" search bar type "S3" and select the suggested service (Interface).
5. Under VPC, select your EC2 "relay" VPC.
6. Select the desired subnets.
7. Select the desired security groups. Make sure that you allow inbound/outbound access to/from your EC2 instance.
8. Specify custom VPC endpoint policies, if required.
9. Click on "Create endpoint" to proceed.

### Apply the policy

Set your S3 Bucket policy as follows:

```json
{
  "Version": "2012-10-17",
  "Id": "S3BucketPolicyVPCAccessOnly",
  "Statement": [
    {
      "Sid": "VPC-Only",
      "Effect": "Deny",
      "Principal": {
        "AWS": "<your-aws-user>"
      },
      "Action": [
        "s3:GetObject",
        "s3:ListBucket",
        "s3:PutObject"
      ],
      "Resource": [
        "arn:aws:s3:::<your-s3-bucket>",
        "arn:aws:s3:::<your-s3-bucket>/*"
      ],
      "Condition": {
        "StringNotEquals": {
          "aws:SourceVpce": "<your-vpce-id>"
        }
      }
    }
  ]
}
```

### Test the policy

Running the following in your DevBox terminal:

```
aws s3 ls <your-s3-bucket>
```

Will result in:

```
An error occurred (AccessDenied) when calling the ListObjectsV2 operation: Access Denied
```

Running the same command with a custom endpoint should result in no errors however:

```
aws s3 ls <your-s3-bucket> --endpoint-url <your-endpoint-url>
```

```
2024-06-26 10:41:48    4775417 meme.jpg
```
