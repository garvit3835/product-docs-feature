# Common Build Commands

<details>
<summary>Bazel</summary>
</details>

<details>
<summary>C</summary>
</details>

<details>
<summary>C++</summary>
</details>

<details>
<summary>C#</summary>
</details>

<details>
<summary>Dart</summary>
</details>

<details>
<summary>Docker and Docker Compose</summary>
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
</details>

<details>
<summary>Helm</summary>
{% code overflow="wrap" lineNumbers="true" %}
```yaml
dev:
  commands:
    - command: |-
        curl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3
        chmod 700 get_helm.sh && ./get_helm.sh && rm get_helm.sh
      name: buildtime_install_cmd_for_Helm
```
{% endcode %}
</details>

<details>
<summary>Java</summary>
</details>

<details>
<summary>JavaScript (incl. Yarn, NVM)</summary>
{% code overflow="wrap" lineNumbers="true" %}
```yaml
dev:
  commands:
    - command: sudo apt-get update && sudo apt-get upgrade -y && sudo apt-get install -y unzip tar curl
      name: install_base_packages

    - command: |-
        # increasing the number of file watchers for react applications
        echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
      name: increase_file_watchers

    - command: |-
        curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
        export NVM_DIR=$HOME/.nvm && [ -s $NVM_DIR/nvm.sh ] && \. $NVM_DIR/nvm.sh
        nvm install 21.0.0
        echo '. $HOME/.nvm/nvm.sh' >> $HOME/.bashrc
        echo '. $HOME/.nvm/nvm.sh' >> $HOME/.zshrc
        npm install --global yarn
      name: buildtime_install_cmd_for_JavaScript
```
{% endcode %}
</details>

<details>
<summary>Kubectl</summary>
{% code overflow="wrap" lineNumbers="true" %}
```yaml
dev:
  commands:
    - command: |-
        curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
        sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl && rm kubectl
      name: buildtime_install_cmd_for_Helm
```
{% endcode %}
</details>

<details>
<summary>Nix</summary>
</details>

<details>
<summary>PHP</summary>
</details>

<details>
<summary>Postgres</summary>
{% code overflow="wrap" lineNumbers="true" %}
```yaml
dev:
  commands:
    - command: sudo apt-get update && sudo apt-get upgrade -y && sudo apt-get install -y unzip tar curl
      name: install_base_packages
    
    - command: |-
        curl https://www.postgresql.org/media/keys/ACCC4CF8.asc | gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/apt.postgresql.org.gpg >/dev/null
        sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'
        sudo apt update
        sudo DEBIAN_FRONTEND=noninteractive apt install -y postgresql-14
      name: buildtime_install_for_postgres
    
    # These steps are run using a systemctl unit at startup
    - command: |-
        sudo systemctl start postgresql.service
        echo 'postgres     ALL=NOPASSWD: ALL' | sudo tee /etc/sudoers.d/100-postgres
        sudo -u postgres bash -c "psql -c \"CREATE USER pguser WITH PASSWORD 'test1234';\""
        sudo -u postgres createdb testdb -O pguser
      name: run_at_startup_for_postgres
```
{% endcode %}
</details>

<details>
<summary>Python</summary>
{% code overflow="wrap" lineNumbers="true" %}
```yaml
dev:
  commands:
    - command: sudo apt-get update && sudo apt-get upgrade -y && sudo apt-get install -y unzip tar curl
      name: install_base_packages
    
    - command: |-
        sudo apt-get update
        sudo apt-get install -y software-properties-common
        sudo apt-add-repository --yes --update ppa:deadsnakes/ppa
        sudo apt-get update
        sudo DEBIAN_FRONTEND=noninteractive apt-get install -y python3.8 python3.8-venv libpython3.8-dev libpq-dev
      name: buildtime_install_cmd_for_python
    - command: |-
        python3.8 -m venv venv
        source venv/bin/activate
        curl https://bootstrap.pypa.io/get-pip.py --output get-pip.py
        python get-pip.py
        rm get-pip.py
      name: buildtime_venv_setup_cmd_for_python
```
{% endcode %}
</details>

<details>
<summary>Ruby</summary>
dev:
  commands:
    - command: |-
        sudo apt-get update && sudo apt-get upgrade -y && sudo apt-get install -y tar curl git zlib1g-dev libdb-dev patch libssl-dev libyaml-dev libreadline6-dev libncurses5-dev libgdbm-dev unzip procps autoconf build-essential libffi-dev
        curl -fsSL https://github.com/rbenv/rbenv-installer/raw/HEAD/bin/rbenv-installer | bash
        eval "$(~/.rbenv/bin/rbenv init - bash)" && export PATH="$HOME/.rbenv/bin:$PATH"
        rbenv install 3.3.1
        rbenv global 3.3.1
        sudo apt-get update && sudo apt-get install -y libxml2-dev libxslt1-dev libsqlite3-dev libpq-dev libmysqlclient-dev
        echo 'eval "$(~/.rbenv/bin/rbenv init - bash)"' | sudo tee /etc/profile.d/103-ruby-installation.sh # Encountered multiple *.rb files (eg: railties/lib/rails/commands/help/help_command.rb)
        echo 'export PATH="$HOME/.rbenv/bin:$PATH"' | sudo tee -a /etc/profile.d/103-ruby-installation.sh # Encountered multiple *.rb files (eg: railties/lib/rails/commands/help/help_command.rb)
        sudo chmod +x /etc/profile.d/103-ruby-installation.sh
      directory: rails # `rails` is relative to `codeCloneRoot`, which defaults to /home/devzero if not specified
      name: buildtime_install_cmd_for_Ruby
</details>

<details>
<summary>Rust</summary>
</details>

<details>
<summary>Terraform</summary>
{% code overflow="wrap" lineNumbers="true" %}
```yaml
dev:
  commands:
    - command: |-
        sudo apt-get update && sudo apt-get install -y gnupg software-properties-common curl
        curl -fsSL https://apt.releases.hashicorp.com/gpg | sudo apt-key add -
        sudo apt-add-repository "deb [arch=amd64] https://apt.releases.hashicorp.com $(lsb_release -cs) main"
        sudo apt-get update && sudo apt-get install terraform
      name: buildtime_install_cmd_for_Terraform
```
{% endcode %}
</details>
