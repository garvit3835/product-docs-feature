# Rust

{% code overflow="wrap" lineNumbers="true" %}
```yaml
dev:
  commands:
    - command: |-
        sudo apt-get update && sudo apt-get upgrade -y && sudo apt-get install -y curl
        curl -sSf https://sh.rustup.rs | sh -s -- -y
        \. $HOME/.cargo/env
        rustup install 1.63.0
        rustup default 1.63.0
      name: buildtime_install_cmd_for_Rust
```
{% endcode %}
