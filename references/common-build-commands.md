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
</details>

<details>
<summary>Helm</summary>
</details>

<details>
<summary>Java</summary>
</details>

<details>
<summary>JavaScript (incl. Yarn, NVM)</summary>
```yaml
dev:
  commands:
    - command: sudo apt-get update && sudo apt-get upgrade -y && sudo apt-get install -y unzip tar curl
      name: install_base_packages

    - command: |-
        # increasing the number of file watchers for react applications
        echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
      directory: .
      name: increase_file_watchers

    - command: |-
        curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
        export NVM_DIR=$HOME/.nvm && [ -s $NVM_DIR/nvm.sh ] && \. $NVM_DIR/nvm.sh
        nvm install 21.0.0
        echo '. $HOME/.nvm/nvm.sh' >> $HOME/.bashrc
        echo '. $HOME/.nvm/nvm.sh' >> $HOME/.zshrc
        npm install --global yarn
      directory: . # `.` is relative to `codeCloneRoot`, which defaults to /home/devzero if not specified
      name: buildtime_install_cmd_for_JavaScript
```
</details>

<details>
<summary>Kubectl</summary>
</details>

<details>
<summary>Nix</summary>
</details>

<details>
<summary>PHP</summary>
</details>

<details>
<summary>Postgres</summary>
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
      directory: .
      name: buildtime_install_for_postgres
    
    # These steps are run using a systemctl unit at startup
    - command: |-
        sudo systemctl start postgresql.service
        echo 'postgres     ALL=NOPASSWD: ALL' | sudo tee /etc/sudoers.d/100-postgres
        sudo -u postgres bash -c "psql -c \"CREATE USER pguser WITH PASSWORD 'test1234';\""
        sudo -u postgres createdb testdb -O pguser
      name: run_at_startup_for_postgres
```
</details>

<details>
<summary>Python</summary>
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
</details>

<details>
<summary>Ruby</summary>
</details>

<details>
<summary>Rust</summary>
</details>

<details>
<summary>Terraform</summary>
</details>
