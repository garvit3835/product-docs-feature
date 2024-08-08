# Cloud SQL

Connecting to an Cloud SQL running in the private subnet of GCP VPC to your DevBox.

## Architecture Diagram

![GCP Cloud SQL Architecture](../../../.gitbook/assets/gcp-cloudsql-architecture.png)

## Prerequisites

- Follow the [Connecting to GCP](../../existing-network/connecting-to-gcp.md) guide.

## Existing Database

### Step 1: Accessing Cloud SQL Instance from a DevBox

1. Go to **Cloud SQL > Instances** and copy the Internal IP Address of the instance.

![GCP Cloud SQL Creation](../../../.gitbook/assets/gcp-cloudsql-creation.png)

2. Go to **VPC network > Routes** and select the region where you have deployed the instance.
3. Copy the **Destination IP Range** of the **Peering Subnet** route which contains the IP address of the Cloud SQL Instance.

![GCP Cloud SQL Network Peer](../../../.gitbook/assets/gcp-cloudsql-network-peer.png)

4. SSH into your **Bastion Host** and enter the following command:

{% code overflow="wrap" lineNumbers="false" %}
```
sudo dz net connect --ssh --advertise-routes=<Destionation-IP-Range>
```
{% endcode %}

5. Go to **DevBox**.
6. Connecting to the Database.

Run the following commands:

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

![GCP Cloud SQL Access](../../../.gitbook/assets/gcp-cloudsql-access.png)

## New Database

### Step 1: Creating an Cloud SQL Instance

1. Go to **Cloud SQL > Create an instance**.
2. Use one of the [database Engine](https://cloud.google.com/products/databases?hl=en) in the Configuration.
3. Choose the **Available Versions** of the **Database.**
4. Enter your **Instance ID**  and **Password**.
5. Go to **Choose region and zonal availability** and select the zone where you have provisioned your **Private Subnet**.
6. Scroll down to **Customize your instance > Connections** and choose **Private IP** only.
7. Enter your **VPC** when prompted.
8. Click on create a **private service access connection** and select **Use automatically assigned IP range** while choosing **Allocated IP range**.
9. Click on **Create Instance**.

![GCP Cloud SQL Creation](../../../.gitbook/assets/gcp-cloudsql-creation.png)

### Step 2: Accessing Cloud SQL from DevBox

1. Go to **Cloud SQL > Instances** and copy the Internal IP Address of the instance.
2. Go to **VPC network > Routes** and select the region where you have deployed the instance.
3. Copy the **Destination IP Range** of the **Peering Subnet** route which contains the IP address of the Cloud SQL Instance.

![GCP Cloud SQL Network Peer](../../../.gitbook/assets/gcp-cloudsql-network-peer.png)

4. SSH into your **Bastion Host** and enter the following command:

{% code overflow="wrap" lineNumbers="false" %}
```
sudo dz net connect --ssh --advertise-routes=<Destionation-IP-Range>
```
{% endcode %}

5. Go to **DevBox**.
6. Connecting to the Database.

Run the following commands:

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

![GCP Cloud SQL Access](../../../.gitbook/assets/gcp-cloudsql-access.png)
