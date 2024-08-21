# MongoDB Atlas

Comprehensive guide for connecting to a MongoDB Cluster from your DevBox.

## Architecture Diagram

![MongoDB Cluster Architecture](../../.gitbook/assets/mongodb-architecture.png)

Here, you will connect to a MongoDB Cluster from your DevBox. This would be done by setting up the cluster in your Atlas dashboard through one of 3 available cloud providers (AWS, Azure, or GCP) and accessing it through `mongosh` shell tool.

## Prerequisites

Before you begin, you should create your account with [MongoDB](https://account.mongodb.com/account/login).

## Existing MongoDB Cluster

### Step 1: Configuring MongoDB Atlas

To connect to a database cluster, ensure it is allowed inbound access from anywhere.

To check and configure the same, follow the below steps:

1. Go to **[MongoDB Atlas](https://cloud.mongodb.com/v2)**.
2. Go to **Security > Network Access** and click on **Add IP Address**.
3. In the **Access List Entry**, enter `0.0.0.0/0`.

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

## New MongoDB Cluster

If you need to make a new database running in a private subnet and access it through DevZero's network, then follow the below steps:

### Step 1: Creating a Database

{% tabs %}
{% tab title="MySQL" %}

1. Go to **Home > Azure Database for MySQL servers** and click on **Create**.
2. In the **Basics** section, select the **Resource group** you previously selected for your **VNET**.
3. Then input your database **Server name**, **Region** and the desired **MySQL version**.

*Remember to select the region where your VNET resides.*

4. Under the **Authentication** section, Enter your **Admin Username** and **password**.
5. Go to the **Networking** page and under **Network connectivity** choose **Private access (VNet Integration)** option as we need to make the instance private.
6. In the **Virtual Network** section, select the **VNET** and **Private Subnet**.
7. Click on Review + Create and click on Create to create the database.

{% endtab %}

{% tab title="PostgreSQL" %}

1. Go to **Home > Azure Database for PostgresSQL servers** and click on **Create**.
2. In the **Basics** section, select the **Resource group** you previously selected for your **VNET**.
3. Then input your database **Server name**, **Region** and the desired **PostgresSQL version**.

*Remember to select the region where your VNET resides.*

4. Under the **Authentication** section, Enter your **Admin Username** and **password**.
5. Go to the **Networking** page and under **Network connectivity** choose **Private access (VNet Integration)** option as we need to make the instance private.
6. In the **Virtual Network** section, select the **VNET** and **Private Subnet**.
7. Click on **Review + Create** and click on **Create** to create the database.

{% endtab %}
{% endtabs %}

![Azure database creation](../../../.gitbook/assets/azure-db-creation.png)

After creating the database, you need to follow the [Setting up DNS Private Resolver](./setting-up-dns-private-resolver.md) guide to access the DNS Private Zones which houses your database's private domain endpoint for easy access.

### Step 2: Connecting to the database from DevBox

Now you just need to follow the below steps to install the database clients and connect to DevBox:

1. Go to **DevBox**.
2. To Setup Database client and connect to the instance, follow the steps:

{% tabs %}
{% tab title="MySQL" %}

To install the mysql client cli:

```
sudo apt install mysql-client
```

To access the database:

{% code %}
```
mysql -h <Endpoint> -u <Username> --database <Database-Name> -p
```
{% endcode %}
{% endtab %}

{% tab title="PostgreSQL" %}
To install the psql client cli:

```
sudo apt install postgresql-client
```

To access the database:

{% code %}
```
psql -h <Endpoint> --username <Username> -d <Database-Name> --password
```
{% endcode %}
{% endtab %}
{% endtabs %}

![Azure database access](../../../.gitbook/assets/azure-db-access.png)