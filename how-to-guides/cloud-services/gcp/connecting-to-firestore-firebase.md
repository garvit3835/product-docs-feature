# GCP Firestore
Connecting to an Firestore instance running in the private subnet of GCP VPC to your DevBox.

## Architecture Diagram:

![image](../../../.gitbook/assets/gcp-firestore-firebase-architecture.png)

## Prerequisites:

- Follow the [Connecting to GCP](../../existing-network/connecting-to-GCP.md) guide.

## Existing Database

### Step 1: Accessing GCP Firestore Instance from a DevBox

1. Connect to your Devzero workspace.
2. Store the **Google Authentication Credentials** on the workspace.
3. Install **Python** and **PIP**:

{% code lineNumbers="false" %}
```
sudo apt update
sudo apt install python3 python3-dev python3-venv
sudo apt-get install wget
wget https://bootstrap.pypa.io/get-pip.py
```
{% endcode %}

4. Install **Firestore Admin API**:

{% code lineNumbers="false" %}
```
pip install --upgrade firebase-admin
```
{% endcode %}

5. Set the **GOOGLE_APPLICATION_CREDENTIALS** environment variable.

{% code lineNumbers="false" %}
```
export GOOGLE_APPLICATION_CREDENTIALS=/path/to/the/key.json
```
{% endcode %}

6. Write a Python scipt to test the Firestore Admin API Connection:

{% code lineNumbers="false" %}
```python
import firebase_admin
from firebase_admin import credentials, firestore

db = firestore.Client(project='content-gen-418510', database='devzero-test')

if db:
    print('connected')
else:
    pass
```
{% endcode %}

7. Run the Python Script:

{% code lineNumbers="false" %}
```
python3 <file-name>.py
```
{% endcode %}

If the connection is successful, you should see **"Connected"** printed in the terminal output.

![](../../../.gitbook/assets/gcp-firestore-firebase-access.png)


## New Database

### Step 1: Creating an Firestore Instance

1. Go to **Firestore > Databases** and click on **Create database**.
2. Choose the **Native Mode** and click on **Continue**.
3. Enter your **Database ID**  and select the between **Region** and **Multi-region** mode.
4. Choose your desired region and click on **Create Database**.

![image](../../../.gitbook/assets/gcp-firestore-creation.png)

### Step 2: Accessing Firestore Database from DevBox

1. Connect to your Devzero workspace.
2. Store the **Google Authentication Credentials** on the workspace.
3. Install **Python** and **PIP**:

{% code lineNumbers="false" %}
```
sudo apt update
sudo apt install python3 python3-dev python3-venv
sudo apt-get install wget
wget https://bootstrap.pypa.io/get-pip.py
```
{% endcode %}

4. Install **Firestore Admin API**:

{% code lineNumbers="false" %}
```
pip install --upgrade firebase-admin
```
{% endcode %}

5. Set the **GOOGLE_APPLICATION_CREDENTIALS** environment variable.

{% code lineNumbers="false" %}
```
export GOOGLE_APPLICATION_CREDENTIALS=/path/to/the/key.json
```
{% endcode %}

6. Write a Python scipt to test the Firestore Admin API Connection:

{% code lineNumbers="false" %}
```python
import firebase_admin
from firebase_admin import credentials, firestore

db = firestore.Client(project='content-gen-418510', database='devzero-test')

if db:
    print('connected')
else:
    pass
```
{% endcode %}

7. Run the Python Script:

{% code lineNumbers="false" %}
```
python3 <file-name>.py
```
{% endcode %}

If the connection is successful, you should see **"Connected"** printed in the terminal output.

![](../../../.gitbook/assets/gcp-firestore-access.png)