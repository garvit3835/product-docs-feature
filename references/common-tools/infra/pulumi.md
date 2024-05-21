# Pulumi

{% code overflow="wrap" lineNumbers="true" %}
```yaml
dev:
  commands:
    - command: |-
        curl -fsSL https://get.pulumi.com | sh
        echo 'export PATH=$PATH:/home/devzero/.pulumi/bin' | sudo tee /etc/profile.d/151-pulumi-installation.sh
      name: buildtime_install_cmd_for_Pulumi
```
{% endcode %}
