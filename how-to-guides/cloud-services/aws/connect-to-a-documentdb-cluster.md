# DocumentDB
Connecting to DocumentDB running in the private subnet of AWS VPC from DevBox.

## Architecture Diagram:

![image](../../../.gitbook/assets/documentdb-architecture.png)

## Existing Database

### Step 1: Accessing DocumentDB from a DevBox

1. Follow the [Connecting to AWS](../../existing-network/connecting-to-aws.md) guide.
2. Go to **Amazon DocumentDB > Clusters > your cluster.**
3. Select **Connectivity and Security.**

![image](../../../.gitbook/assets/documentDB-connectivity-and-security.png)

4. Go to **DevBox**.
5. Setting up mongo repository:
```
echo -e "[mongodb-org-4.0] \nname=MongoDB Repository\nbaseurl=https://repo.mongodb.org/yum/amazon/2013.03/mongodb-org/4.0/x86_64/\ngpgcheck=1 \nenabled=1 \ngpgkey=https://www.mongodb.org/static/pgp/server-4.0.asc" | sudo tee /etc/yum.repos.d/mongodb-org-4.0.repo
```
6. Install mongo shell:
```
sudo apt install -y mongodb-org-shell
```
7. Download certificate:
```
wget https://truststore.pki.rds.amazonaws.com/global/global-bundle.pem
```
8. Connect to mongo:
```
mongo --tls --host <your-cluster-endpoint>:27017 --tlsCAFile /path/to/global-bundle.pem --username <your-username> --password <your-password>
```
where the cluster endpoint will be available in **Connectivity & Security** section.

![image](../../../.gitbook/assets/documentdb-access.png)


## New Database

### Step 1: Creating an DocumentDB Instance

1. Follow the [Connecting to AWS](../../existing-network/connecting-to-aws.md) guide.
2. Go to **Amazon DocumentDB > Create a DocumentDB cluster.**
3. Select **Instance Based Cluster.**
4. Set **Username and Password**
5. Turn on **Show advanced settings**.
6. In the **Network settings** , choose the VPC where your bastion host is running, subnet group and assign a security group which has inbound access to only VPC.
7. Click **Create cluster**.

![image](../../../.gitbook/assets/documentdb-cluster.png)

### Step 2: Accessing DocumentDB from DevBox

1. Go to **DevBox**.
2. Setting up mongo repository:
```
echo -e "[mongodb-org-4.0] \nname=MongoDB Repository\nbaseurl=https://repo.mongodb.org/yum/amazon/2013.03/mongodb-org/4.0/x86_64/\ngpgcheck=1 \nenabled=1 \ngpgkey=https://www.mongodb.org/static/pgp/server-4.0.asc" | sudo tee /etc/yum.repos.d/mongodb-org-4.0.repo
```
3. Install the mongo shell:
```
sudo apt install -y mongodb-org-shell
```
4. Download certificate:
```
wget https://truststore.pki.rds.amazonaws.com/global/global-bundle.pem
```
5. Connect to mongo:
```
mongo --tls --host <your-cluster-endpoint>:27017 --tlsCAFile /path/to/global-bundle.pem --username <your-username> --password <your-password>
```
where the cluster endpoint will be available in **Configuration** section.

![image](../../../.gitbook/assets/documentdb-access.png)
