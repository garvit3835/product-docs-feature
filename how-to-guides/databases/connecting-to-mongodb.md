# MongoDB Atlas

Comprehensive guide for connecting to a MongoDB Cluster from your DevBox.

## Architecture Diagram

![MongoDB Cluster Architecture](../../.gitbook/assets/mongodb-architecture.png)

Here, you will connect to a MongoDB Cluster from your DevBox. This would be done by setting up the cluster in your Atlas dashboard through one of 3 available cloud providers (AWS, Azure, or GCP) and accessing it through `mongosh` shell tool.

## Prerequisites

Before you begin, you should create your account with [MongoDB](https://account.mongodb.com/account/login).

## Existing MongoDB Cluster

{% tabs %}
{% tab title="Dedicated or Serverless" %}

### Step 1: Configuring MongoDB Atlas

To connect to a database cluster, you have to create a private endpoint with one of the 3 available cloud provider supported by MongoDB (AWS, GCP, Azure).

To check and configure the same, follow the below steps:

1. Go to **[MongoDB Atlas](https://cloud.mongodb.com/v2)**.
2. Go to **Security > Network Access** and open the **Private Endpoint** tab.
3. Click on **Add Private Endpoint** and choose your cloud provider. For this tutorial we will be going with Azure.

*You must provide the billing information in the Edit Payment Method form if you don't have payment method already configured for your organization.*

4. Click on **Next** and the choose the region where you want to deploy your endpoint.
5. Enter your **Resource Group Name**, **Virtual Network Name**, **Subnet Name** and the name you want to give to your endpoint.
6. Copy the PrivateLink Endpoint Command and paste it in your Azure CLI. Remember that you can't copy the command until Atlas finishes creating VNet resources in the background.

![MongoDB AZ CLI](../../.gitbook/assets/mongodb-endpoint-command.png)

7. After creating the private endpoint, copy the **Private Endpoint Resource ID** and **Private Endpoint IP Address** and paste it in **MongoDB Private Endpoint** Dialog box.
8. CLick on **Create** and your private endpoint will be created.

![MongoDB endpoint list](../../.gitbook/assets/mongodb-endpoint-list.png)

### Step 2: Installing dependencies in DevBox

To connect with the cluster we need to install the `mongosh` shell tool.

Follow the below steps to do so:

1. Install `gnupg` and `curl` if they are not already:

{% code %}
```bash
sudo apt-get install gnupg curl
```
{% endcode %}

2. Get the **MongoDB public GPG key**:

{% code %}
```bash
curl -fsSL https://www.mongodb.org/static/pgp/server-7.0.asc | \
   sudo gpg -o /usr/share/keyrings/mongodb-server-7.0.gpg \
   --dearmor
```
{% endcode %}

3. Create a list file for MongoDB:

{% code %}
```bash
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list
sudo apt-get update
```
{% endcode %}

4. Install the MongoDB Package:

{% code %}
```bash
sudo apt-get install -y mongodb-org
```
{% endcode %}

5. Start the MongoDB Daemon (`mongod`):

{% code %}
```bash
sudo systemctl start mongod
sudo systemctl enable mongod
sudo systemctl status mongod
```
{% endcode %}

6. verify if `mongosh` is installed or not:

{% code %}
```bash
mongosh
```
{% endcode %}

### Step 3: Connecting with the Cluster

To connect to the MongoDB cluster, follow the below steps:

1. Go to **[MongoDB Atlas](https://cloud.mongodb.com/v2)**.
2. Go to **Database > Clusters** and select the cluster you wanna connect to.
3. Click on **Connect** and choose the private endpoint option.
4. Then Click on **Shell** and copy the connection string and paste it in your DevBox CLI:

{% code %}
```bash
mongosh "mongodb+srv://<cluster-name>.<cluster-id>.mongodb.net/" --apiVersion 1 --username <db_username>
```
{% endcode %}

5. Enter the password when prompted and you will see the mongosh shell if the connection is authenticated.

![MongoDB Shell Access](../../.gitbook/assets/mongodb-access.png)

{% endtab %}

{% tab title="Shared" %}

### Step 1: Configuring MongoDB Atlas

To connect to a database cluster, ensure it is allowed inbound access from anywhere.

To check and configure the same, follow the below steps:

1. Go to **[MongoDB Atlas](https://cloud.mongodb.com/v2)**.
2. Go to **Security > Network Access** and click on **Add IP Address**.
3. In the **Access List Entry**, enter `0.0.0.0/0` to allow inbound access from anywhere.

![MongoDB Network access](../../.gitbook/assets/mongodb-network.png)

### Step 2: Installing dependencies in DevBox

To connect with the cluster we need to install the `mongosh` shell tool.

Follow the below steps to do so:

1. Install `gnupg` and `curl` if they are not already:

{% code %}
```bash
sudo apt-get install gnupg curl
```
{% endcode %}

2. Get the **MongoDB public GPG key**:

{% code %}
```bash
curl -fsSL https://www.mongodb.org/static/pgp/server-7.0.asc | \
   sudo gpg -o /usr/share/keyrings/mongodb-server-7.0.gpg \
   --dearmor
```
{% endcode %}

3. Create a list file for MongoDB:

{% code %}
```bash
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list
```
{% endcode %}

4. Install the MongoDB Package:

{% code %}
```bash
sudo apt-get install -y mongodb-org
```
{% endcode %}

5. Start the MongoDB Daemon (`mongod`):

{% code %}
```bash
sudo systemctl start mongod
sudo systemctl enable mongod
sudo systemctl status mongod
```
{% endcode %}

6. verify if `mongosh` is installed or not:

{% code %}
```bash
mongosh
```
{% endcode %}

### Step 3: Connecting with the Cluster

To connect to the MongoDB cluster, follow the below steps:

1. Go to **[MongoDB Atlas](https://cloud.mongodb.com/v2)**.
2. Go to **Database > Clusters** and select the cluster you wanna connect to.
3. Click on **Connect** and then click on **Shell**.
4. Copy the connection string and paste it in your DevBox CLI:

{% code %}
```bash
mongosh "mongodb+srv://<cluster-name>.<cluster-id>.mongodb.net/" --apiVersion 1 --username <user-name>
```
{% endcode %}

5. Enter the password when prompted and you will see the mongosh shell if the connection is authenticated.

![MongoDB Shell Access](../../.gitbook/assets/mongodb-access.png)

{% endtab %}
{% endtabs %}

## New MongoDB Cluster

If you need to make a new database cluster and access it through DevBox, then follow the below steps:

### Step 1: Creating a Cluster

1. Go to **[MongoDB Atlas](https://cloud.mongodb.com/v2)**.
2. Go to **Database > Clusters** and click on **Create**.
3. Choose the type of database cluster you want to deploy.
4. Enter the **Instance name**, **Provider**, and **Region**.
5. Click on **Create Deployment** and give it some time to deploy the infrastructure.
6. Go to **Security > Network Access** and open the **Private Endpoint** tab.
7. Click on **Add Private Endpoint** and choose your cloud provider. For this tutorial we will be going with Azure.

*You must provide the billing information in the Edit Payment Method form if you don't have payment method already configured for your organization.*

8. Click on **Next** and the choose the region where you want to deploy your endpoint.
9. Enter your **Resource Group Name**, **Virtual Network Name**, **Subnet Name** and the name you want to give to your endpoint.
10. Copy the PrivateLink Endpoint Command and paste it in your Azure CLI. Remember that you can't copy the command until Atlas finishes creating VNet resources in the background.

![MongoDB AZ CLI](../../.gitbook/assets/mongodb-endpoint-command.png)

11. After creating the private endpoint, copy the **Private Endpoint Resource ID** and **Private Endpoint IP Address** and paste it in **MongoDB Private Endpoint** Dialog box.
12. CLick on **Create** and your private endpoint will be created.

![MongoDB endpoint list](../../.gitbook/assets/mongodb-endpoint-list.png)

### Step 2: Installing dependencies in DevBox

To connect with the cluster we need to install the `mongosh` shell tool.

Follow the below steps to do so:

1. Install `gnupg` and `curl` if they are not already:

{% code %}
```bash
sudo apt-get install gnupg curl
```
{% endcode %}

2. Get the **MongoDB public GPG key**:

{% code %}
```bash
curl -fsSL https://www.mongodb.org/static/pgp/server-7.0.asc | \
   sudo gpg -o /usr/share/keyrings/mongodb-server-7.0.gpg \
   --dearmor
```
{% endcode %}

3. Create a list file for MongoDB:

{% code %}
```bash
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list
```
{% endcode %}

4. Install the MongoDB Package:

{% code %}
```bash
sudo apt-get install -y mongodb-org
```
{% endcode %}

5. Start the MongoDB Daemon (`mongod`):

{% code %}
```bash
sudo systemctl start mongod
sudo systemctl enable mongod
sudo systemctl status mongod
```
{% endcode %}

6. verify if `mongosh` is installed or not:

{% code %}
```bash
mongosh
```
{% endcode %}

### Step 3: Connecting with the Cluster

To connect to the MongoDB cluster, follow the below steps:

1. Go to **[MongoDB Atlas](https://cloud.mongodb.com/v2)**.
2. Go to **Database > Clusters** and select the cluster you wanna connect to.
3. Click on **Connect** and choose the private endpoint option.
4. Then Click on **Shell** and copy the connection string and paste it in your DevBox CLI:

{% code %}
```bash
mongosh "mongodb+srv://<cluster-name>.<cluster-id>.mongodb.net/" --apiVersion 1 --username <db_username>
```
{% endcode %}

5. Enter the password when prompted and you will see the mongosh shell if the connection is authenticated.

![MongoDB Shell Access](../../.gitbook/assets/mongodb-access.png)