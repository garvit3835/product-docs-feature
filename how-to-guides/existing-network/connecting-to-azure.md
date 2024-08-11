---
description: Learn how to connect to Azure resources privately from a DevBox.

---

# Connecting to Azure

In this guide you will know how to setup a Bastion Host on Azure Infrastructure. This Bastion Host will allow us to connect to Private Azure services and use them directly from our DevZero DevBox.

## Step 1: Create a VPC

Firstly we would have to create VPC for our network. This will house all of our resources together including the bastion host.

1. Go to **Home > Virtual Networks > Create Virtual Network**.
2. Under the **Basics** section, enter the **Resource group** name.

*you can select an existing Resource Group or creating a new one Resource Group by clicking on create new.*

3. Enter the Virtual Netwkork name and the desired region of deployment.
4. After setting up the **Basics**, navigate to the **IP Addresses** Section and create a **Public subnet** as well as a **Private subnet** by entering the subnet name and Starting address of the subnet.

*to make a subnet's access private in Azure, you just need to check the **Enable private subnet (no default outbound access)** checkbox under the **Private Subnet** section while creating the subnet*

5. After everything is setup, you can navigate to the **Review + Create** section and check if all your configurations are correct or not. If satisfied, click on **Create** and your VPC will be created.


## Step 2: Create a Bastion Host

Now we need to create and setup a Virtual Machine which we would be using as the **Bastion Host**.

1. Go to **Home > Virtual Machines > Create a virtual machine**.
2. In the **Basics** section, choose the same resource group which you chose for your VPC.
3. Then input your VM name, region and image.

*you can view the available images [here](https://azuremarketplace.microsoft.com/en-us/marketplace/apps?filters=virtual-machine-images)*.

4. Enter your desired username and select the *allow selected ports* for the **Public inbound ports** option.
5. Go to the **Networking** section and enter your Virtual Network (VPC). Remember to choose the public IP option as we need to SSH into the machine.
6. Select the **Basic** option for **NIC network security group**, it would create a security group for you which allows port access for SSH.
7. Click on **Review + Create** and check if all your configurations are correct or not. If satisfied, click on **Create** and your VPC will be created.
8. Download the SSH private key when prompted, this will help us SSH into the Bastion Host later on.

## Step 3: Connecting to Private Resources

Now we just need to install DevZero CLI and enable IP forwarding to access the private resources.

1. SSH into your Bastion Host and install the DevZero CLI:
```
curl -fsSL https://get.devzero.io | sh
```

2. Log into your account by executing:

```
dz auth login
```

3. Enable IP forwarding to access resources on private subnets:

```
echo 'net.ipv4.ip_forward = 1' | sudo tee -a /etc/sysctl.conf
echo 'net.ipv6.conf.all.forwarding = 1' | sudo tee -a /etc/sysctl.conf
sudo sysctl -p /etc/sysctl.conf
```

4. Now we need to connect our resouces to the DevZero Network, for this we would need to advertise our subnet routes to through the DevZero Network:

```
sudo dz net connect --ssh --advertise-routes=<public-subnet>,<private-subnet>
```

9. Verify that the machine was connected to your DevZero network:

```
dz net status
```

You should see the Azure machine hostname.

10. You should now be able to ping or ssh private Azure resources from your DevBox:

```
ping <ip_address>
```