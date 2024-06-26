# Connect to SQS

### Globally using the AWS CLI

1. Install the [AWS CLI](../references/starter-templates/third-party/aws.md).
2. Go to **AWS Console > IAM > Users >  Create user**.
3. Add the following permissions to the user: **AmazonSQSFullAccess**.
4. If required, add the new user to your SQS access policy.
5. After you obtained the credentials, log into the AWS CLI by running:\
   `aws configure`
6.  Send a test message to the queue:

    <pre class="language-bash"><code class="lang-bash"><strong>aws sqs send-message --queue-url &#x3C;your-queue-url> --message-body "Hello from your DevBox!"
    </strong></code></pre>
7.  Verify you can recieve the messages:

    <pre class="language-bash"><code class="lang-bash"><strong>aws sqs receive-message --queue-url &#x3C;your-queue-url>
    </strong></code></pre>

### VPC-only access
