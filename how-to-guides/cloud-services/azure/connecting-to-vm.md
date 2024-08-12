# Azure Virtual Machine

Connecting to Private Virtual Machine running in the private subnet of Azure VNET from your DevBox.

## Architecture Diagram

![Azure VM Architecture](../../../.gitbook/assets/azure-vm-architecture.png)

Here you will connecting to a private virtual machine instance from your DevZero's DevBox. This would be done by setting up a bastion host which would advertise the private routes to your DevZero network so that you can access the private service through a network tunneling.

## Prerequisites

Before we begin, you'll follow [Connecting to Azure](../../existing-network/connecting-to-azure.md) guide to setup the Bastion Host to access your private azure services.

## Existing Azure Virtual Machine

To connect to an existing Virtual Machine running in the private subnet make sure that it is within the same **Resource Group** and **VNET** that contains the Bastion Host. 

If the above criteria is followed then simply login into your DevBox and SSH into the private VM by following these steps:

1. Go to **DevBox**.
3. Copy the private SSH key within the `.ssh` directory.
4. Connect to virtual machine:

{% code lineNumbers="false" %}
```
ssh -i "path/to/private/key" username@instance-private-ip
```
{% endcode %}

![Azure VM Access](../../../.gitbook/assets/azure-vm-access.png)

## New Azure Virtual Machine

If you need to make a new virtual machine running in private subnet and access it through DevZero's network then follow the below steps:

### Step 1: Creating a Virtual Machine

1. Go to **Home > Virtual Machines > Create a virtual machine**.
2. In the **Basics** section, choose the same resource group which you chose for your VNET.
3. Then input your VM name, region and choose your desired image.

*you can view the available images [here](https://azuremarketplace.microsoft.com/en-us/marketplace/apps?filters=virtual-machine-images)*.

4. Enter your desired username and select the *allow selected ports* for the **Public inbound ports** option.
5. Go to the **Networking** section and enter your Virtual Network (VNET). Remember to choose **None** in public IP option as we need to make the instance private.
6. Select the **Basic** option for **NIC network security group**, it would create a security group for you which allows port access for SSH.
7. Click on **Review + Create** and click on **Create** to create virutal machine.
8. Download the SSH private key when prompted, this will help you SSH into the Bastion Host later on.

### Step 2: Accessing virtual machine from DevBox

1. Go to the **DevBox** and make a copy of the key pair.
2. Connect to the Virtual Machine using ssh and the new key pair:

{% code lineNumbers="false" %}
```
ssh -i "path/to/private/key" username@instance-ip
```
{% endcode %}

![Azure VM Access](../../../.gitbook/assets/azure-vm-access.png)
