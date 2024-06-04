# Java

{% code overflow="wrap" lineNumbers="true" %}
```yaml
dev:
  commands:
    - command: |-
        curl -s "https://get.sdkman.io" | bash
        source "$HOME/.sdkman/bin/sdkman-init.sh"
        sdk install java
      name: buildtime_install_cmd_for_Java
```
{% endcode %}
