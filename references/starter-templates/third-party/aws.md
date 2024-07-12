# AWS

## AWS CLI

{% code overflow="wrap" lineNumbers="true" %}
```yaml
version: "3"
build:
  steps:
    - type: apt-get
      packages: ["curl"]
    - type: command
      command: |
        sudo apt-get update && sudo apt-get upgrade -y && sudo apt-get install -y curl unzip
        curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
        unzip awscliv2.zip
        sudo ./aws/install
        rm -rf aws awscliv2.zip
```
{% endcode %}

## Docker Credential ECR Login

{% code overflow="wrap" lineNumbers="true" %}
```yaml
version: "3"
build:
  steps:
    - type: apt-get
      packages: ["wget"]
    - type: command
      command: |
        VERSION=0.8.0
        wget https://amazon-ecr-credential-helper-releases.s3.us-east-2.amazonaws.com/$VERSION/linux-amd64/docker-credential-ecr-login
        chmod +x docker-credential-ecr-login
        sudo mv docker-credential-ecr-login /usr/local/bin
```
{% endcode %}