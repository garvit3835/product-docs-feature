# Argo CLI

{% code overflow="wrap" lineNumbers="true" %}
```yaml
dev:
  commands:
    - command: |-
        curl -sLO https://github.com/argoproj/argo-workflows/releases/download/v3.4.17/argo-linux-amd64.gz
        gunzip argo-linux-amd64.gz
        chmod +x argo-linux-amd64
        mv ./argo-linux-amd64 /usr/local/bin/argo
      name: buildtime_install_cmd_for_Argo
```
{% endcode %}