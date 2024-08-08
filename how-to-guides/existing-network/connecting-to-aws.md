---
description: Learn how to connect to AWS resources privately from a DevBox.

---

# Connecting to AWS

## Step 1: Create a VPC

1. Go to **VPC > Your VPCs > Create VPC.**
2. Select **VPC and more.**
3. Enter a tag name to auto-generate VPC and Subnet Names. Customize the IPv4 CIDR block if needed.
4. Select "**In 1 AZ"** in the **NAT Gateways** section.

## Step 2: Create an EC2 "relay" router

1. Use one of the [supported linux distros](https://aws.amazon.com/mp/linux/).
2. In the **Network Settings,** edit the VPC to assign the one you created above.
3. Assign the instance to a public subnet of the VPC, and assign it a public IP address.
4. In the security groups configuration, edit the Security Group to allow inbound ssh (Port range = **22**, Source = **0.0.0.0/0**). We’ll need this during initial setup but can close the firewall later.‍
5. SSH into the machine and Install the DevZero CLI from the script:

```
curl -fsSL https://get.devzero.io | sh
```

6. Log into your account by executing:

```
dz auth login
```

7. Enable IP forwarding to access resources on private subnets:

```
echo 'net.ipv4.ip_forward = 1' | sudo tee -a /etc/sysctl.conf
echo 'net.ipv6.conf.all.forwarding = 1' | sudo tee -a /etc/sysctl.conf
sudo sysctl -p /etc/sysctl.conf
```

8. Connect to DevZero network:

```
sudo dz net connect --ssh --advertise-routes=<VPC_CIDR>
```

9. Verify that the machine was connected to your DevZero network:\

```
dz net status
```

   You should see the EC2 machine hostname.

10. You should now be able to ping or ssh private AWS resources from your DevBox:

```
ping <ip_address>
```
