# PHP

{% code lineNumbers="true" %}
```yaml
version: "3"
build:
  steps:
    - type: apt-get
      packages: ["build-essential", "curl", "git", "nano", "software-properties-common", "ssh", "sudo", "tar", "unzip", "vim", "wget", "zip"]
    - type: command
      command: |
        sudo apt update
        sudo apt upgrade -y
        sudo apt install php -y
        sudo apt install php-mysql php-curl php-json php-cgi php-cli php-xml php-gd php-mbstring php-zip -y
        sudo apt install libapache2-mod-php -y
      directory: /home/devzero
      user: devzero
```
{% endcode %}
