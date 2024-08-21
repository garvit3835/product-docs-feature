# Azure Table Storage

Connecting to an Azure Table Storage from your DevBox.

## Architecture Diagram

![Azure Table Storage Architecture](../../../.gitbook/assets/azure-table-architecture.png)

Here, you will connect to a Table Storage from your DevBox. This would be done by setting up a bastion host that advertises the private routes to your DevZero network so that you can access the private service through network tunneling. You must also set up a DNS Private Resolver to access the Table Storage's Private Endpoint from your DevBox.

## Prerequisites

1. Before you begin, follow the [Connecting to Azure](../../existing-network/connecting-to-azure.md) guide to set up the Bastion Host to access your private Azure services.
2. Following the above criteria, follow the [Setting up DNS Private Resolver](./setting-up-dns-private-resolver.md) guide to access the DNS Private Zones.
3. After successfully setting up the DNS Private Resolver, follow the [Configuring Storage Account](./configuring-storage-account.md) guide to access the storage account endpoint.

## Existing Azure Table Storage

To connect to a Storage Account, ensure it is within the same **Resource Group** containing the Bastion Host.

### Step 1: Accessing the Table Storage

Now follow the below steps to access the Table Storage on your DevBox:

1. Go to DevBox and install the Azure CLI tool using the following command:

{% code lineNumbers="false" %}
```bash
sudo curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash
```
{% endcode %}

2. Login into your Azure account using the `login` command:

{% code lineNumbers="false" %}
```bash
az login
```
{% endcode %}

3. After you have completed your authentication, go to **Home > Storage Accounts** and select your storage account.
4. Then go to the **Security + Networking > Access Keys** section and note down either of the two access keys presented to you.
5. After you have acquired the access key, you may use the following command to Check existence and List the available tables:

{% tabs %}
{% tab title="Exists" %}

To check the **Existence** of the table, use the following command:

{% code %}
```bash
az storage table exists \
    --account-name <storage-account> \
    --account-key <access-key> \
    --name <table-name>
```
{% endcode %}

![Azure Table Storage Exists](../../../.gitbook/assets/azure-table-exists.png)

{% endtab %}

{% tab title="List" %}

To **List** all the available tables, use the following command:

{% code %}
```bash
az storage table list \
    --account-name <storage-account> \
    --account-key <access-key> 
```
{% endcode %}

![Azure Table Storage List](../../../.gitbook/assets/azure-table-list.png)

{% endtab %}
{% endtabs %}

## New Table Storage

If you need to make a new Table Storage and access it through DevBox, then follow the below steps:

### Step 1: Creating a Table Storage

Firstly, you must follow the [Configuring Storage Account](./connecting-to-storage-account.md) guide to create and configure a new storage account. After the setup, you must also set up the DNS Private Resolver by following the [Setting up DNS Private Resolver](./setting-up-dns-private-resolver.md) guide.

After the above mentioned steps are completed, you may go ahead and create a container for Blob Storage by following these steps:

1. Go to **Home > Storage Accounts** and click on your storage account.
2. Go to the **Data Storage** tab and click on **Tables**.
3. Create a new Table by entering the table name and clicking on **Create**.
4. After creating the table, go to the **Security + Networking > Access Keys** section and note down either access key.

### Step 2: Accessing the Table Storage

After creating the table, you must install and authenticate your Azure CLI to easily access Blob Storage. To do so, you may follow the below steps:

1. Go to DevBox and install the Azure CLI tool using the following command:

{% code lineNumbers="false" %}
```bash
sudo curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash
```
{% endcode %}

2. Login into your Azure account using the `login` command:

{% code lineNumbers="false" %}
```bash
az login
```
{% endcode %}

3. You may use the following command to Check existence and List the available tables:

{% tabs %}
{% tab title="Exists" %}

To check the **Existence** of the table, use the following command:

{% code %}
```bash
az storage table exists \
    --account-name <storage-account> \
    --account-key <access-key> \
    --name <table-name>
```
{% endcode %}

![Azure Table Storage Exists](../../../.gitbook/assets/azure-table-exists.png)

{% endtab %}

{% tab title="List" %}

To **List** all the available tables, use the following command:

{% code %}
```bash
az storage table list \
    --account-name <storage-account> \
    --account-key <access-key> 
```
{% endcode %}

![Azure Table Storage List](../../../.gitbook/assets/azure-table-list.png)

{% endtab %}
{% endtabs %}
