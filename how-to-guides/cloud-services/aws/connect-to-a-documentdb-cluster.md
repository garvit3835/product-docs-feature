# DocumentDB

Connecting to DocumentDB running in the private subnet of AWS VPC from your DevBox.

## Architecture Diagram:

![image](../../../.gitbook/assets/documentdb-architecture.png)

## Existing Database

### Step 1: Accessing DocumentDB from a DevBox

1. Follow the [Connecting to AWS](../../existing-network/connecting-to-aws.md) guide.
2. Go to **Amazon DocumentDB > Clusters > Your Cluster**.
3. Select **Connectivity & Security**. You will see the commands and DocumentDB hostname for accessing it.

![image](../../../.gitbook/assets/documentDB-connectivity-and-security.png)

4. In your **DevBox**, import the MongoDB public GPG key:

{% code overflow="wrap" lineNumbers="true" %}
```bash
curl -fsSL https://www.mongodb.org/static/pgp/server-7.0.asc | \
   sudo gpg -o /usr/share/keyrings/mongodb-server-7.0.gpg \
   --dearmor
```
{% endcode %}

5. Add MongoDB package repository source:

{% code overflow="wrap" lineNumbers="true" %}
```bash
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list
```
{% endcode %}

6. Reload local package database:

{% code overflow="wrap" lineNumbers="true" %}
```bash
sudo apt-get update
```
{% endcode %}

7. Install MongoDB:

{% code overflow="wrap" lineNumbers="true" %}
```bash
sudo apt-get install -y mongodb-org
```
{% endcode %}

8. Download the certificate:

{% code overflow="wrap" lineNumbers="true" %}
```bash
wget https://truststore.pki.rds.amazonaws.com/global/global-bundle.pem
```
{% endcode %}

9. Connect to the database:

{% code overflow="wrap" lineNumbers="true" %}
```bash
mongosh --tls --host <your-cluster-endpoint>:27017 --tlsCAFile /path/to/global-bundle.pem --username <your-username> --password <your-password>
```
{% endcode %}

where the cluster endpoint will be available in **Connectivity & Security** section.

![image](../../../.gitbook/assets/documentdb-access.png)

## New Database

### Step 1: Creating a DocumentDB Instance

1. Follow the [Connecting to AWS](../../existing-network/connecting-to-aws.md) guide.
2. Go to **Amazon DocumentDB > Create Cluster**.
3. Select **Instance Based Cluster**.
4. In the **Configuration** section choose **Instance Class**, number of instances for your cluster.
5. Set **Username and Password**.
6. Turn on **Show advanced settings**.
7. In the **Network settings** , choose the VPC where your bastion host is running, subnet group and assign a security group which has inbound access to only VPC.
8. Click **Create cluster**.

![image](../../../.gitbook/assets/documentdb-cluster.png)

### Step 2: Accessing DocumentDB from a DevBox

1. In your **DevBox**, import the MongoDB public GPG key:

{% code overflow="wrap" lineNumbers="true" %}
```bash
curl -fsSL https://www.mongodb.org/static/pgp/server-7.0.asc | \
   sudo gpg -o /usr/share/keyrings/mongodb-server-7.0.gpg \
   --dearmor
```
{% endcode %}

2. Add MongoDB package repository source:

{% code overflow="wrap" lineNumbers="true" %}
```bash
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list
```
{% endcode %}

3. Reload local package database:

{% code overflow="wrap" lineNumbers="true" %}
```bash
sudo apt-get update
```
{% endcode %}

4. Install MongoDB:

{% code overflow="wrap" lineNumbers="true" %}
```bash
sudo apt-get install -y mongodb-org
```
{% endcode %}

5. Download the certificate:

{% code overflow="wrap" lineNumbers="true" %}
```bash
wget https://truststore.pki.rds.amazonaws.com/global/global-bundle.pem
```
{% endcode %}

6. Connect to the database:

{% code overflow="wrap" lineNumbers="true" %}
```bash
mongosh --tls --host <your-cluster-endpoint>:27017 --tlsCAFile /path/to/global-bundle.pem --username <your-username> --password <your-password>
```
{% endcode %}

where the cluster endpoint will be available in **Connectivity & Security** section.

![image](../../../.gitbook/assets/documentdb-access.png)
