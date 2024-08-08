
# ElastiCache

Connecting to ElastiCache running in the private subnet of AWS VPC from your DevBox.

## Architecture Diagram

![AWS ElastiCache Architecture](../../../.gitbook/assets/elasticache-arch.png)

## Prerequisites

- Follow [Connecting to AWS](../../existing-network/connecting-to-aws.md) guide.

## Existing ElastiCache Cluster

### Step 1: Accessing ElastiCache from a DevBox

1. Go to **Amazon ElastiCache > Redis OSS Cache > Your Cluster**.
2. Select **Configuration & Security**.
3. Copy **Primary endpoint**.

![AWS ElastiCache Endpoints](../../../.gitbook/assets/elasticache-endpoints.png)

4. Go to your **DevBox** and install the Redis CLI:

{% code lineNumbers="false" %}
```
sudo apt install redis-tools
```
{% endcode %}

5. Access the cluster using the CLI:

{% code lineNumbers="false" %}
```
redis-cli -h <redis-endpoint> -p <port>
```
{% endcode %}

![AWS ElastiCache Access](../../../.gitbook/assets/elasticache-access.png)

## New ElastiCache Cluster

### Step 1: Creating an ElastiCache Cluster

1. Go to **Amazon ElastiCache > Create.**
2. Select **Design your own cache.**
3. Select **Cluster cache** in the **Creation method.**
4. Use the default configurations for creating the cluster.
5. Scroll Down to the **Cluster info** and specify your **Cluster Name.**
6. Choose the **Engine Version** and **Node Type** in the **Cluster settings.**
7. Go to **Connectivity** section and choose your **VPC** and **Subnet group.**
8. In the next section, choose the **Security Group.** Make sure the specified **Security Group** allows inbound connection from the VPC.
9. Click on **Create.**

### Step 2: Accessing Elasticache from DevBox

1. Go to your ElastiCache and copy **Primary endpoint.**

![AWS ElastiCache Endpoints](../../../.gitbook/assets/elasticache-endpoints.png)

2. Go to your **DevBox** and install the Redis CLI:

{% code lineNumbers="false" %}
```
sudo apt install redis-tools
```
{% endcode %}

3. Access the cluster using the CLI:

{% code lineNumbers="false" %}
```
redis-cli -h <redis-endpoint> -p <port>
```
{% endcode %}

![AWS ElastiCache Access](../../../.gitbook/assets/elasticache-access.png)
