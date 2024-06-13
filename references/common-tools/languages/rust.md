# Rust

{% code overflow="wrap" lineNumbers="true" %}
```yaml
version: "3"
build:
  steps:
    - type: apt-get
      packages: ["curl"]
    - type: command
      command: |
        curl -sSf https://sh.rustup.rs | sh -s -- -y
        . $HOME/.cargo/env
        rustup install 1.63.0
        rustup default 1.63.0
```
{% endcode %}
