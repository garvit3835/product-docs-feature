# Azure Virtual Machine

Connecting to Private Virtual Machine running in the private subnet of Azure VPC from your DevBox.

## Architecture Diagram

![Azure VM Architecture](../../../.gitbook/assets/azure-vm-architecture.png)

Here we will connecting to a private virtual machine instance from our DevZero's DevBox. This would be done by setting up a bastion host which would forward the Internal IP Address to our DevZero network so that we can access the private service through a network tunneling.

## Prerequisites

Before we begin, you'll follow [Connecting to GCP](../../existing-network/connecting-to-gcp.md) guide to setup the DevZero network and have it configured with atleast one one existing device.

## Existing VM

To connect to an existing Private Virtual Machine instance make sure that it is within the same **Resource Group** and **VPC** that contains the Bastion Host. 

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

If you need to make a new private virtual machine and access it through DevZero's network then follow the below steps:

### Step 1: Creating an Virtual Machine

1. Go to **Home > Virtual Machines > Create a virtual machine**.
2. In the **Basics** section, choose the same resource group which you chose for your VPC.
3. Then input your VM name, region and image.

*you can view the available images [here](https://azuremarketplace.microsoft.com/en-us/marketplace/apps?filters=virtual-machine-images)*.

4. Enter your desired username and select the *allow selected ports* for the **Public inbound ports** option.
5. Go to the **Networking** section and enter your Virtual Network (VPC). Remember to choose **None** in public IP option as we need to make the instance private.
6. Select the **Basic** option for **NIC network security group**, it would create a security group for you which allows port access for SSH.
7. Click on **Review + Create** and check if all your configurations are correct or not. If satisfied, click on **Create** and your VPC will be created.
8. Download the SSH private key when prompted, this will help us SSH into the Bastion Host later on.

### Step 2: Accessing private virtual machine from DevBox

1. Go to the **DevBox** and make a copy of the key pair.
2. Connect to the VM using ssh and the new key pair:

{% code lineNumbers="false" %}
```
ssh -i "path/to/private/key" username@instance-ip
```
{% endcode %}

![Azure VM Access](../../../.gitbook/assets/azure-vm-access.png)
