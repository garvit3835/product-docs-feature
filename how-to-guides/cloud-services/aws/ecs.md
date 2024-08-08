# ECS

## Installation guide

You can run services and tasks managed by AWS ECS inside of DevBoxes using [AWS ECS Anywhere](https://aws.amazon.com/ecs/anywhere).

1. Create a new cluster or start with an existing one.\
   **Note**: you can only register external nodes after the cluster has been created.
2. Visit **Your Cluster > Infrastructure > Container Instances.**
3. Click on "Register external instances".
4. In the popup, confirm the settings and click on "Generate registration command".
5. Copy the command for Linux. **You will need it later.**
6. In your DevZero box, download the installation script for ECS Anywhere:

```
curl --proto "https" -o "./ecs-anywhere-install.sh" "https://amazon-ecs-agent.s3.amazonaws.com/ecs-anywhere-install-latest.sh"
```

7. Make sure the the downloaded script has the correct permissions:

```
chmod 700 ./ecs-anywhere-install.sh
```

8. Run the installation script with the parameters from the command in step #5:

```
sudo ./ecs-anywhere-install.sh --region "<region>" --cluster "<ECS cluster>" --activation-id "<id>" --activation-code "<code>"
```

{% hint style="info" %}
Note: the installation script will also install Docker.
{% endhint %}

The new instance should now be visible in the ECS console under **Your Cluster > Infrastructure > Container instances** as "External" instance type.

## Mounting volumes

If you want to add volumes to your services/tasks:

1. Go to your Task definition.
2. Scroll down to the "Storage" section.
3. Click on the "Add volume" button.
4. Enter the volume name.
5. In "Configuration type", select "Configure at task definition creation".
6. Choose "Docker volume" in the "Volume type" section.
7. Under "Driver" enter "local" and select "Task" as Scope.
8. Create a new container mount point:\
   Select the container in question, the source volume and enter a mount path.

<figure><img src="../../../.gitbook/assets/Screenshot 2024-07-31 at 14.53.21.png" alt=""><figcaption></figcaption></figure>

The new volume should now be available after your task has been created:

```
docker volumes ls
```

<figure><img src="../../../.gitbook/assets/Screenshot 2024-07-31 at 14.54.42.png" alt=""><figcaption></figcaption></figure>

{% hint style="warning" %}
If you select "Configure at deployment" in your task definition, you might not be able to deploy it to the external instance type, because this configuration only supports Amazon EBS, which is not available with external instances.
{% endhint %}

## Recipe example

<pre class="language-yaml"><code class="lang-yaml">version: "3"
build:
  steps:
    - type: apt-get
      packages: ["build-essential", "curl", "git", "nano", "software-properties-common", "ssh", "sudo", "tar", "unzip", "vim", "wget", "zip"]
    - type: command
      command: |
        curl --proto "https" -o "./ecs-anywhere-install.sh" "https://amazon-ecs-agent.s3.amazonaws.com/ecs-anywhere-install-latest.sh"
    - type: command
      command: |
        chmod 700 ./ecs-anywhere-install.sh

launch:
  steps:
    - type: command
      command: |
<strong>        ./ecs-anywhere-install.sh --region "&#x3C;region>" --cluster "&#x3C;ECS cluster>" --activation-id "&#x3C;id>" --activation-code "&#x3C;code>"
</strong><strong>      directory: /home/devzero
</strong><strong>      user: root
</strong></code></pre>

When running tasks/services you should now be able to select "External" launch type in order to run them on your DevBoxes.
