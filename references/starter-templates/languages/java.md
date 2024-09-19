---
title: Java
---
# Java

{% code lineNumbers="true" %}
```yaml
version: "3"
build:
  steps:
    - type: apt-get
      packages: ["curl"]
    - type: command
      command: |
        curl -s "https://get.sdkman.io" | bash
        . "$HOME/.sdkman/bin/sdkman-init.sh"
        sdk install java
```
{% endcode %}
