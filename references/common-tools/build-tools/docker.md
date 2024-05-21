# Docker and Docker Compose

{% code overflow="wrap" lineNumbers="true" %}
```yaml
dev:
  commands:
    - command: sudo apt-get update && sudo apt-get upgrade -y && sudo apt-get install -y unzip tar curl
      name: install_base_packages
    
    - command: |-
        sudo apt-get update
        sudo apt-get install -y apt-transport-https ca-certificates curl software-properties-common
        curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
        sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
        sudo apt-get update
        sudo apt-get install -y docker-ce docker-ce-cli containerd.io
      name: buildtime_install_cmd_for_Docker

    # These steps are run using a systemctl unit at startup
    - command: |-
        sudo groupadd docker || true
        sudo usermod -aG docker $USER
        newgrp docker # if you can't access docker, try rebooting the workspace once: `sudo reboot`
        sudo chown "$USER":"$USER" "$HOME"/.docker -R
        sudo chmod g+rwx "$HOME/.docker" -R
        sudo systemctl start docker
        sudo systemctl enable docker.service
        sudo systemctl enable containerd.service
      name: run_at_startup_docker
```
{% endcode %}
