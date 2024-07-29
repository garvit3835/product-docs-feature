# OpenSearch

Connecting to OpenSearch running in the private subnet of AWS VPC from your DevBox.

## Architecture Diagram:

![image](../../../.gitbook/assets/opensearch-arch.png)

## Prerequisites:

- Follow [Connecting to AWS](../../existing-network/connecting-to-aws.md) guide.

## Existing OpenSearch Service

### Step 1: Accessing OpenSearch from a DevBox

1. Go to **Amazon OpenSearch Service > Domains**.
2. Select your domain and copy your **Domain Endpoint**.

![image](../../../.gitbook/assets/opensearch-endpoints.png)

3. Go to your **DevBox** and connect to Service:

```sh
curl -X GET "<opensearch-endpoint>"
```

![image](../../../.gitbook/assets/opensearch-access.png)


## New OpenSearch Service

### Step 1: Creating an OpenSearch Service

1. Follow the [Connecting to AWS](../../existing-network/connecting-to-aws.md) guide.
2. Go to **Amazon OpenSearch Service > Create domain.**
3. Give a unique **Domain name.**
4. Select **Standard create** in the **Creation method.**
5. Refer to [OpenSearch Documentation](https://docs.aws.amazon.com/opensearch-service/) for the Configuration.
6. Keep the **Data nodes** according to your requirements.
7. Go to **Network** section and choose your **VPC** and **Subnets.**
8. In the next section, choose the **Security Group.** Make sure the specified **Security Group** allows inbound connection from the VPC and click on **Create.**

### Step 2: Accessing OpenSearch from DevBox
1. Go to your OpenSearch and copy **Domain endpoint.**

![image](../../../.gitbook/assets/opensearch-endpoints.png)

2. Go to your **DevBox** and connect to Service:

```sh
curl -X GET "<opensearch-endpoint>"
```

![image](../../../.gitbook/assets/opensearch-access.png)

