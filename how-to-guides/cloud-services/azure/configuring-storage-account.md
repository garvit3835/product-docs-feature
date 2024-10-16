---
title: Azure Storage Account
---
# Azure Storage Account

Configuring the Azure Storage Account to access its endpoint from DevBox.

## Architecture Diagram

![Azure Storage Account Architecture](../../../.gitbook/assets/azure-storage-account-architecture.png)

Here, you will configure a Storage Account to access it from your DevBox. This would be done by setting up a bastion host that advertises the private routes to your DevZero network so that you can access the private service through network tunneling. You would also need to set up a DNS Private Resolver to access the Storage Account's Private Endpoint from your DevBox.

## Prerequisites

Before you begin, follow the [Connecting to Azure](../../existing-network/connecting-to-azure.md) guide to set up the Bastion Host to access your private Azure services.

## Existing Azure Storage Account

To configure a Storage Account, ensure it is within the same **Resource Group** containing the Bastion Host.

Following the above criteria, follow the [Setting up DNS Private Resolver](./setting-up-dns-private-resolver.md) guide to access the DNS Private Zones.

### Step 1: Configuring a Private Endpoint

Now follow the below steps to configure the Storage Account:

1. Go to **Home > Storage Accounts** and click on the Storage Account you want to access through the private endpoint.
2. Go to **Networking > Firewalls and virtual networks** tab in the **Security + Networking** section and under `Public network access` choose the `Disabled` option. Click on **Save**. This will make your storage account completely private.

![Azure Storage Account access](../../../.gitbook/assets/azure-storage-account-networking.png)

3. After that, go to **Networking > Private endpoint connections** and click on **Private endpoint**.
4. Choose your **Resource group** and enter the instance name.
5. Click **Resource** and select your desired `Target sub-resource` for your private endpoint. Remember that if you have more than one sub-resource type, you need to create a separate endpoint for each one.
6. Click on **Virtual Network** and select your Virtual Network (VNET), which houses the bastion host and DNS Private Resolver.
7. Select a compatible subnet, then click on **Next**, and leave the rest of the settings as default.
8. Click on **Create**, and your Private Endpoint will be created.

![Azure Storage Account Endpoint](../../../.gitbook/assets/azure-storage-account-endpoint.png)

### Step 2: Accessing the Storage Account

To verify if you can access the storage account endpoint from your DevBox, just use the following command in your DevBox:

{% code lineNumbers="false" %}
```
nslookup <storage-account-name>.<sub-resource>.core.windows.net
```
{% endcode %}

![Azure Storage Account access](../../../.gitbook/assets/azure-storage-account-access.png)

## New Storage Account

If you need to make a new Storage Account and access it through DevBox, then follow the below steps:

### Step 1: Creating a Storage Account

1. Go to **Home > Storage Accounts** and click on **Create**.
2. In the **Basics** section, select the resource group you previously selected for your VNET.
3. Then, input your account name, region, and desired performance type.
4. Go to the **Networking** section and choose `Disable public access and use private access` option in **Network access**.
5. Click on **Add private endpoint** and enter the **Name**, ****Storage sub-resource** type.
6. In the **Networking** section, select the VNET which houses the bastion host.
7. Select a compatible subnet and then choose your private DNS zone.
8. Click on **OK** and then click on **Review + Create**. Finally, click on **Create**.

### Step 2: Accessing the new Storage Account

If the above steps are completed, you must follow the [Setting up DNS Private Resolver](./setting-up-dns-private-resolver.md) guide to access the DNS Private Zones.

To verify if you can access the Storage Account, follow the below steps:

1. Go to the **DevBox**.
2. Use the following command to see if the private endpoint is accessible to you:

{% code lineNumbers="false" %}
```
nslookup <storage-account-name>.<sub-resource>.core.windows.net
```
{% endcode %}

![Azure Storage Account access](../../../.gitbook/assets/azure-storage-account-access.png)
