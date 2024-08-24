# Azure Key Vault

You are connecting to an Azure Key Vault from your DevBox.

## Architecture Diagram

![Azure Key Vault Architecture](../../../.gitbook/assets/azure-key-vault-architecture.png)

Here, you will connect to a Key Vault from your DevBox. This would be done by setting up a bastion host that advertises the private routes to your DevZero network so that you can access the private service through network tunneling.

## Prerequisites

1. Before you begin, follow the [Connecting to Azure](../../existing-network/connecting-to-azure.md) guide to set up the Bastion Host to access your private Azure services.
2. Following the above criteria, follow the [Setting up DNS Private Resolver](./setting-up-dns-private-resolver.md) guide to access the DNS Private Zones.

## Existing Key Vault

To connect to an existing Key Vault, ensure it is within the same **Resource Group** that houses the Bastion Host.

### Step 1: Configuring IAM Role and Secrets in Key Vault

To make the connection, you need to set up the IAM role and install dependencies in your DevBox.

1. Go to **Home > Key Vaults** and click on the key vault you want to access.
2. Then go to **Access Control (IAM)** and click on **Add role assignment**.
3. Click on the **Key Vault Reader** role and click on next.
4. Click on **Select Members** and select the users you want to give access to the Key Vault. Click on **Select**.
5. Then click on **Next** and then click on **Review + Assign** to assign the role.
6. Now, you can read the **Secrets** in the key vault without error.
7. We are assuming the **Key Vault** is private, and in this case, you will not be able to see the value of the secret. For some reason, if you want to see the value of the secrets, then turn the access to **Public** in the **Settings > Networking** section. After viewing the value of the secret, **Disable** the **Public Access** again.

### Step 2: Setting up Service Principals

Now, to retrieve the value from the secrets using the API, you need to set **Service Principals** on the Azure Portal using the below steps:

1. Go to **Microsoft Entra ID** and click on **App registrations**.
2. Click on **New registration**, enter the app name as you like, and click on **Register**.
3. Go to **All applications** and click on the app you just created.
4. Copy the **Client ID** and **Tenant ID** and add it to the DevBox environmental variables.

{%code%}
```bash
export AZURE_CLIENT_ID=<client-id>
export AZURE_TENANT_ID=<tenant-id>
```
{%endcode%}

5. Click on **Client credentials** and click on **New client secret**.
6. Enter the description if you want to, and click on **Add**.
7. Copy the **Value** of the client secret you just created and add it to the environmental variables of your DevBox by using the following command.

{%code%}
```bash
export AZURE_CLIENT_SECRET=<client-secret>
```
{%endcode%}

8. Now, go to **Home > Key Vaults** and click on the key vault you want to access.
9. Then go to **Access Control (IAM)** and click on **Add role assignment**.
10. Click on the **Key Vault Reader** role and click on next.
11. Click on **Select Members** and select the **App Name** you just registered in **Microsoft Entra ID**. Click on **Select**.
12. Then click on **Next** and then click on **Review + Assign** to assign the role.

### Step 3: Setting up dependencies in DevBox

Here we are using Python to show the key vault usage, you can choose other programming stack as well. Now, you need to install the necessary packages in Python to write the script by following the below steps:

1. Install the required packages using the following command:

{%code%}
```bash
pip install azure-identity
pip install azure-keyvault-secrets
```
{%endcode%}

2. Write the following Python script to retrieve the secret:

{%code%}
```python
from azure.identity import ClientSecretCredential
from azure.keyvault.secrets import SecretClient
import os

client_id = os.environ['CLIENT_ID']
tenant_id = os.environ['TENANT_ID']
client_secret = os.environ['CLIENT_SECRET']
vault_url = f"https://test-vault-devzero.vault.azure.net/"


secret_name = "Devzero-key"

credentials = ClientSecretCredential(
    client_id = client_id,
    client_secret= client_secret,
    tenant_id= tenant_id
)

secret_client = SecretClient(vault_url= vault_url, credential= credentials)

secret = secret_client.get_secret(secret_name)

print("The secret value is :" + secret.value)
```
{%endcode%}

![Azure Key Vault access](../../../.gitbook/assets/azure-key-vault-access.png)


## New Azure Key Vault

If you need to make a new Key Vault and access it through DevBox, then follow the below steps:

### Step 1: Creating a new Key Vault

1. Go to **Home > Key vaults** and click on **Create**.
2. In the **Basics** section, select the **Resource group** which houses your Bastion Host.
3. Then input your **Key Vault name**, **Region** and the desired **Pricing Tier**.
4. You can set the **Days to retain deleted vaults** duration as you like.
5. Go to the **Networking** page and disable the **Enable public access** and enable the **Private Endpoint section**.
6. Click on **Create a private endpoint** and enter the **Resource group**, **Location**, **Name**, and **Target sub-resource** type of the endpoint.
7. In the **Networking** section, select the virtual network (VNET) you used to set up the DNS resolver and Bastion Host.
8. Choose a compatible subnet or create a new one, and a new private DNS zone will be created for you.
9. Click on **Ok**, then click on **Review + Create**.
10. Click on **Create** to initialize the deployment for the key vault.

![Azure Key Vault creation](../../../.gitbook/assets/azure-key-vault-creation.png)


### Step 2: Configuring IAM Role and Secrets in Key Vault

To make the connection, you need to set up the IAM Role and install dependencies in your DevBox.

1. Go to **Home > Key Vaults** and click on the key vault you just created.
2. Then go to **Access Control (IAM)** and click on **Add role assignment**.
3. Click on the **Key Vault Reader** role and click on next.
4. Click on **Select Members** and select the users you want to give access to the Key Vault. Click on **Select**.
5. Then click on **Next** and then click on **Review + Assign** to assign the role.
6. Now go to **Obejcts > Secrets** and click on **Generate/Import**.
7. Enter the **Name** and **Secret Value** and click on **Create**.
8. In this case, the Key Vault is private, and you will not be able to see the value of the secret. For some reason, if you want to see the value of the secrets, then turn the access to **Public** in the **Settings > Networking** section. After viewing the value of the secret, **Disable** the **Public Access** again.

### Step 3: Setting up Service Principals

Now, to retrieve the value from the secrets using the API, you need to set **Service Principals** on the Azure Portal using the below steps:

1. Go to **Microsoft Entra ID** and click on **App registrations**.
2. Click on **New registration**, enter the app name as you like, and click on **Register**.
3. Go to **All applications** and click on the app you just created.
4. Copy the **Client ID** and **Tenant ID** and add it to the DevBox environmental variables.

{%code%}
```bash
export AZURE_CLIENT_ID=<client-id>
export AZURE_TENANT_ID=<tenant-id>
```
{%endcode%}

5. Click on **Client credentials** and click on **New client secret**.
6. Enter the description if you want to, and click on **Add**.
7. Copy the **Value** of the client secret you just created and add it to the environmental variables of your DevBox by using the following command.

{%code%}
```bash
export AZURE_CLIENT_SECRET=<client-secret>
```
{%endcode%}

![Azure Key Vault service principals](../../../.gitbook/assets/azure-key-vault-principal.png)

8. Now, go to **Home > Key Vaults** and click on the key vault you want to access.
9. Then go to **Access Control (IAM)** and click on **Add role assignment**.
10. Click on the **Key Vault Reader** role and click on next.
11. Click on **Select Members** and select the **App Name** you just registered in **Microsoft Entra ID**. Click on **Select**.
12. Then click on **Next** and then click on **Review + Assign** to assign the role.

### Step 4: Setting up dependencies in DevBox

Here we are using Python to show the key vault usage, you can choose other programming stack as well. Now, you need to install the necessary packages in Python to write the script by following the below steps:

1. Install the required packages using the following command:

{%code%}
```bash
pip install azure-identity
pip install azure-key vault-secrets
```
{%endcode%}

2. Write the following Python script to retrieve the secret:

{%code%}
```python
from azure.identity import ClientSecretCredential
from azure.keyvault.secrets import SecretClient
import os

client_id = os.environ['CLIENT_ID']
tenant_id = os.environ['TENANT_ID']
client_secret = os.environ['CLIENT_SECRET']
vault_url = f"https://test-vault-devzero.vault.azure.net/"


secret_name = "devzero-key"

credentials = ClientSecretCredential(
    client_id = client_id,
    client_secret= client_secret,
    tenant_id= tenant_id
)

secret_client = SecretClient(vault_url= vault_url, credential= credentials)

secret = secret_client.get_secret(secret_name)

print("The secret value is :" + secret.value)
```
{%endcode%}

![Azure Key Vault access](../../../.gitbook/assets/azure-key-vault-access.png)
