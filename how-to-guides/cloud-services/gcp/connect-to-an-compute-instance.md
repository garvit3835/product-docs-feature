# GCP Compute Instance
Connecting to Compute Instance running in the private subnet of GCP VPC from your DevBox.

## Architecture Diagram:

![image](../../../.gitbook/assets/gcp-compute-instance-architecture.png)

## Existing Compute Instance

### Step 1: Accessing Compute Instance from a DevBox

1. Follow the [Connecting to GCP](../../existing-network/connecting-to-gcp.md) guide.
2. Go to **Compute Engine > VM Instances**.
3. Click on **SSH**. You will see the commands for accessing it.
4. Go to **DevBox** and make a copy of the key pair.
5. Connect to Compute Instance:

```bash
ssh -i "path/to/private/key" username@instance-ip
```

![image](../../../.gitbook/assets/compute-instance-access.png)


## New Compute Instance Virtual Machine

### Step 1: Creating an Compute Instance

1. Follow the [Connecting to GCP](../../existing-network/connecting-to-gcp.md) guide.
2. Go to **Compute Engine > Create Instance**.
3. Enter the name of the instance along with region and machine type.
4. Use one of the [supported linux distros](https://console.cloud.google.com/compute/images).
5. Choose the **Instance type**.
6. Go to **Advanced Options > Networking > Network Tags** and enter the firewall tags.
7. Go to **Advanced Options > Networking > Network Interfaces**, click on **Network** and choose the VPC where your bastion host is running, then click on **Subnetwork** and choose the private subnet.
8. Copy in the newly created SSH key pair when the machine is created.

### Step 2: Accessing Compute Instance from a DevBox
1. Go to the **DevBox** and make a copy of the key pair.
2. Connect to the desired Compute instance using ssh and the new key pair:

```bash
ssh -i "path/to/private/key" username@instance-ip
```

![image](../../../.gitbook/assets/compute-instance-access.png)
