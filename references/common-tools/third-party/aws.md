# AWS CLI

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
        rm awscliv2.zip
        rm -rf aws/
      user: devzero
```
{% endcode %}
