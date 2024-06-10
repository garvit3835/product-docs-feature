# Nix

{% code overflow="wrap" lineNumbers="true" %}
```yaml
dev:
  commands:
    - command: sudo apt-get update && sudo apt-get upgrade -y && sudo apt-get install -y curl
      name: install_base_packages
    
    - command: |-
        curl -L https://nixos.org/nix/install | sh
        . ~/.nix-profile/etc/profile.d/nix.sh
      name: buildtime_install_cmd_for_Nix
```
{% endcode %}
