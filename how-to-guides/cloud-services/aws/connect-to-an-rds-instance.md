# Connect to an RDS Instance

1. Follow the [Connecting to AWS](../../existing-network/connecting-to-aws.md) guide.
2. Make sure that your RDS database is **on the same VPC** as your EC2 "relay".
3. Verify that the VPC security group of your RDS instance allows inbound connections from your DevBox IPs (`dz net status` to find it out).

