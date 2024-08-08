# Connect to SQS

## Using the AWS CLI

1. Install the [AWS CLI](../../../references/starter-templates/third-party/aws.md) into your DevBox.
2. Go to **AWS Console > IAM > Users >  Create user**.
3. Add the following permissions to the user: **AmazonSQSFullAccess**.
4. After you obtained the credentials, log into the AWS CLI by running:

```
aws configure
```

5. Update your SQS access policy to allow access to the new user.
6. Send a test message to the queue:

```
aws sqs send-message --queue-url <your-queue-url> --message-body "Hello from your DevBox!"
```

7. Verify you can recieve the messages:

```
aws sqs receive-message --queue-url <your-queue-url>
```

## VPC-only access policy

### Configure the Endpoint

1. Follow the [Connecting to AWS](../../existing-network/connecting-to-aws.md) guide.
2. Go to **VPC > Endpoints > Create Endpoint.**
3. Enter a name then select "AWS Services" as your Service category.
4. In the "Services" search bar type "SQS" and select the suggested service.
5. Under VPC, select your EC2 "relay" VPC.
6. Select the desired subnets.
7. Select the desired security groups. Make sure that you allow inbound/outbound access to/from your EC2 instance.
8. Specify custom VPC endpoint policies, if required.
9. Click on "Create endpoint" to proceed.

### Apply the policy

Set your SQS-queue policy as follows:

```json
{
  "Sid": "VPC-only",
  "Effect": "Deny",
  "Principal": {
    "AWS": "<your-aws-user>"
  },
  "Action": "SQS:*",
  "Resource": "<your-sqs-queue>",
  "Condition": {
    "StringNotEquals": {
      "aws:SourceVpce": "<your-vpce-id>"
    }
  }
}
```

### Test the policy

Running the following in your DevBox terminal:

```
aws sqs receive-message --queue-url <your-queue-url>
```

Will result in:

```
An error occurred (AccessDenied) when calling the ReceiveMessage operation: User: <your-aws-user> is not authorized to perform: sqs:receivemessage on resource: <your-sqs-queue> with an explicit deny in a resource-based policy
```

Running the same command with a custom endpoint should result in no errors however:

```
aws sqs receive-message --queue-url <your-queue-url> --endpoint-url <your-endpoint-url>
```
