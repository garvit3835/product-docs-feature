# ECS (local)

## Installation guide

Schedule ECS tasks locally using ecs-cli

1. Create a new workspace with Docker installed ([How-to](../../../references/starter-templates/build-tools/docker.md)).
2. Go to **AWS Console > IAM > Users > Create user**.
3. Add the following permissions to the user: **AmazonECS\_FullAccess**.
4. Obtain the credentials under **Users > id > Security credentials > Access keys > Create access key.**
5. Install the ECS CLI:

```
curl -o "ecs-cli" "https://amazon-ecs-cli.s3.amazonaws.com/ecs-cli-linux-amd64-latest"
```

6. Set the correct permissions:

```
chmod +x ./ecs-cli
```

7. Configure the default profile:

```
./ecs-cli configure profile --profile-name default --secret-key="<secret key>" --access-key="<access key>"
```

8. Configure the default cluster:

```
./ecs-cli configure --cluster=<your ecs cluster> --region <your aws region> --config-name default
```

9. Download a task definition:

```
./ecs-cli local create --task-def-remote Hello-World:2
```

10. Bring up the containers:

```
./ecs-cli local up
```

## Recipe

```yaml
version: "3"
build:
  steps:
    - type: apt-get
      packages: ["curl", "apt-transport-https", "ca-certificates"]
    - type: apt-get
      packages: ["docker-ce", "docker-ce-cli", "containerd.io"]
      extra_repositories:
      - key_url: https://download.docker.com/linux/ubuntu/gpg
        repository: https://download.docker.com/linux/ubuntu
    - type: command
      command: |
        curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
        chmod +x /usr/local/bin/docker-compose

        usermod -aG docker devzero
        systemctl enable docker.service
        systemctl enable containerd.service
      directory: /home/devzero
      user: root
    - type: command
      command: |
        curl -o "ecs-cli" "https://amazon-ecs-cli.s3.amazonaws.com/ecs-cli-linux-amd64-latest"
        chmod +x ./ecs-cli
    - type: command
      command: |
        ./ecs-cli configure profile --profile-name default --secret-key="<secret key>" --access-key="<access key>"
        ./ecs-cli configure --cluster=<your ecs cluster> --region <your aws region> --config-name default
```
