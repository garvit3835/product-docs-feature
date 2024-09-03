# Azure Container Instance

You are connecting to a Container Instance running in the private subnet of Azure Virtual Network (VNET) from your DevBox.

## Architecture Diagram

![Azure Container Instance Architecture](../../../.gitbook/assets/azure-container-architecture.png)

[Azure Container Instances (ACI)](https://azure.microsoft.com/en-us/products/container-instances) is a serverless container service that allows you to run isolated containers in Azure without managing underlying infrastructure or orchestrating container deployments. This would take place by setting up a bastion host that advertises the VNET CIDR to your DevZero network so that you can access the private service through the network tunneling.

## Prerequisites

Before you begin, follow the [Connecting to Azure](../../existing-network/connecting-to-azure.md) guide to set up the Bastion Host to access your private Azure services.

## Existing Azure Container Instance

{% hint="info" %}
Ensure your container has a **Private IP Address** and check if the container is housed in the same **Virtual Network** as the **Bastion Host**.
{% endhint %}

### Accessing container from DevBox

Follow the Below steps to access your container application from your DevBox :

1. Go to **DevBox**.
2. You can access the application running in the container using the `curl` command:

{% code lineNumbers="false" %}
```
curl -X GET <private-ip>
```
{% endcode %}

![Azure Container Access](../../../.gitbook/assets/azure-container-access.png)

## New Azure Container Instance

If you need to make a new container running in a private subnet and access it through DevZero's network, then follow the below steps:

### Step 1: Creating a Container Instance

1. Go to **Home > Container Instances** and click on **Create**.
2. In the **Basics** section, select the **Resource group** you previously selected for your VNET.
3. Then input your **Container name** and **Region** and choose your desired **SKU**.
4. Choose your desired **Image source** between `Quickstart images`, `Azure Container Registry`, and `Other registry`.
5. For this guide, we will work with `Quickstart images`.
6. Select or input the **Image** and choose the desired size configuration for your container.
7. On the networking page, choose the **Private** option and select your VNET and desired subnet.
7. Click on **Review + Create** and click on **Create** to create container.

### Step 2: Accessing container from DevBox

1. Go to **DevBox**.
2. You can access the application running in the container using the `curl` command:

{% code lineNumbers="false" %}
```
curl -X GET <private-ip>
```
{% endcode %}

![Azure Container Access](../../../.gitbook/assets/azure-container-access.png)
