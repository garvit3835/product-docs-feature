---
description: Learn how to connect to Azure resources privately from a DevBox.
title: Connecting to Azure
---

# Connecting to Azure

In this guide you will know how to setup a Bastion Host on Azure Infrastructure. This Bastion Host will allow you to connect to Private Azure services and use them directly from your DevBox.

If you're more of a visual learner, check out the [video tutorial](#video-walkthrough)!

## Step 1: Create a VNET

In this step, you will be creating a VNET. This will house all of your resources together including the bastion host.

1. Go to **Home > Virtual Networks > Create Virtual Network**.
2. Under the **Basics** section, enter the **Resource group** name.

*you can select an existing Resource Group or create a new Resource Group by clicking on create new.*

3. Enter the Virtual Network name and the desired region of deployment.
4. After setting up the **Basics**, navigate to the **IP Addresses** Section and create a **Public subnet** by entering the subnet name and Starting address of the subnet.

5. To make a private subnet in Azure, you just need to check the **Enable private subnet (no default outbound access)** checkbox under the **Private Subnet** section while creating the subnet.

6. After everything is setup, you can navigate to the **Review + Create** section and click on **Create**.

## Step 2: Create a Bastion Host

Now you need to create and setup a Virtual Machine which you would be using as the **Bastion Host**.

1. Go to **Home > Virtual Machines > Create a virtual machine**.
2. In the **Basics** section, choose the same resource group which you chose for your VNET.
3. Then input your VM name, region and image.

*you can view the available VM images [here](https://azuremarketplace.microsoft.com/en-us/marketplace/apps?filters=virtual-machine-images)*.

4. Enter your desired username and select the *allow selected ports* for the **Public inbound ports** option.
5. Go to the **Networking** section and enter your Virtual Network (VNET). Remember to choose the public IP option as you need to configure this virutal machine to access private azure services.
6. Select the **Basic** option for **NIC network security group**, it would create a security group for you which allows port access for SSH.
7. Click on **Review + Create** and click on **Create**.
8. Download the SSH private key when prompted, this will help you SSH into the Bastion Host later on.

## Step 3: Connect to DevZero Network

Now you just need to install DevZero CLI and enable IP forwarding to access the private resources.

1. SSH into your Bastion Host and install the DevZero CLI:

```
curl -fsSL https://get.devzero.io | sh
```

2. Log into your account by executing:

```
sudo dz auth login && sudo dz net connect
```

3. Enable IP forwarding to access resources on private subnets:

```
echo 'net.ipv4.ip_forward = 1' | sudo tee -a /etc/sysctl.conf
echo 'net.ipv6.conf.all.forwarding = 1' | sudo tee -a /etc/sysctl.conf
sudo sysctl -p /etc/sysctl.conf
```

4. Now you need to advertise your VNET route to connect to DevZero network:

```
sudo dz net connect --ssh --advertise-routes=<VNET-cidr>
```

9. Verify that the machine is connected to your DevZero network:

```
dz net status
```

You should see the Azure machine hostname.

10. You should now be able to ping or ssh private Azure resources from your DevBox:

```
ping <ip_address>
```

## Video Walkthrough

{% embed url="https://devzero.b-cdn.net/how%20to%20guide%20AWS%20VPC.mp4" %}
