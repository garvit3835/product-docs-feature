# Go

{% code overflow="wrap" lineNumbers="true" %}
```yaml
dev:
  commands:
    - command: |-
        wget https://go.dev/dl/go1.22.2.linux-amd64.tar.gz
        sudo tar -C /usr/local -xzf go1.22.2.linux-amd64.tar.gz
        rm -rf go1.22.2.linux-amd64.tar.gz
      name: buildtime_install_cmd_for_Dart
```
{% endcode %}
