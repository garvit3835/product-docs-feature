# Azure Database

You are connecting to a Azure database instance running in the private subnet of Azure VNET from your DevBox.

## Architecture Diagram

![Azure database Architecture](../../../.gitbook/assets/azure-db-architecture.png)

Here, you will connect to a private Azuer database instance from your DevZero's DevBox. This would be done by setting up a bastion host that advertises the private routes to your DevZero network so that you can access the private service through network tunneling.

## Prerequisites

Before you begin, follow the [Connecting to Azure](../../existing-network/connecting-to-azure.md) guide to set up the Bastion Host to access your private Azure services.

## Existing Database

To connect to a database running in the private subnet, ensure it is within the same **Resource Group** and **VNET** containing the Bastion Host.

If the above criteria is followed then simply login into your DevBox and download the required package by following these steps:

1. Go to **DevBox**.
3. Copy the private SSH key within the `.ssh` directory.
4. Connect to virtual machine:

{% code lineNumbers="false" %}
```
ssh -i "path/to/private/key" username@instance-private-ip
```
{% endcode %}

## New Azure Database

If you need to make a new database running in a private subnet and access it through DevZero's network, then follow the below steps:

1. Go to the **DevBox**.
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
mysql -h <Endpoint> -u <Username> --database <Database Name> -p
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
psql -h <Endpoint> --username <Username> -d <Database Name> --password
```
{% endcode %}
{% endtab %}
{% endtabs %}

### Step 1: Creating a Database

{% tabs %}
{% tab title="MySQL" %}

1. Go to **Home > Azure Database for MySQL servers** and click on **Create**.
2. In the **Basics** section, select the **Resource group** you previously selected for your **VNET**.
3. Then input your database **Server name**, **Region** and the desired **PostgresSQL version**.

*Remember to select the region which your VNET covers, otherwise you won't be able to access the subnets later on.*

4. Under the **Authentication** section, Enter your **Admin Username** and **password**.
5. Go to the **Networking** page and under **Network connectivity** choose **Private access (VNet Integration)** option as we need to make the instance private.
6. In the **Virtual Network** section, select the **VNET** and **Private Subnet** we made earlier.
7. Click on Review + Create and click on Create to create database.

{% endtab %}

{% tab title="PostgreSQL" %}

1. Go to **Home > Azure Database for PostgresSQL servers** and click on **Create**.
2. In the **Basics** section, select the **Resource group** you previously selected for your **VNET**.
3. Then input your database **Server name**, **Region** and the desired **MySQL version**.

*Remember to select the region which your VNET covers, otherwise you won't be able to access the subnets later on.*

4. Under the **Authentication** section, Enter your **Admin Username** and **password**.
5. Go to the **Networking** page and under **Network connectivity** choose **Private access (VNet Integration)** option as we need to make the instance private.
6. In the **Virtual Network** section, select the **VNET** and **Private Subnet** we made earlier.
7. Click on Review + Create and click on Create to create database.

{% endtab %}
{% endtabs %}

### Step 2: Connecting to the database from DevBox

1. Go to the **DevBox**.
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
mysql -h <Endpoint> -u <Username> --database <Database Name> -p
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
psql -h <Endpoint> --username <Username> -d <Database Name> --password
```
{% endcode %}
{% endtab %}
{% endtabs %}
