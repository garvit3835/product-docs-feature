# Recipe Execution Stages

Recipes have 2 execution stages:
1. Build-time: when recipe is getting saved, after validation.
2. Startup-time: when a workspace is being launched from a recipe.

Irrespective of the stage, command blocks will be executed in the order in which they are specified in the recipe.

<figure><img src="../.gitbook/assets/exec-stages.png" alt=""><figcaption><p>Execution stages (difference between built- and startup-time)</p></figcaption></figure>


<details>
<summary>What won't work</summary>
Anything that requires user-input to proceed. Build- and startup-time steps are executed by processes in a completely headless mode. As such, if your setup command requires user-input or needs to be attached to a TTY, it will unfortunately not work. You will see it get stuck in the logs, and the best you will be able to do is cancel that build.

Common cases where this is true:
- Adding `-y` for apt-get operations: `sudo apt-get install -y curl`
- Prepending apt-get operations with `DEBIAN_FRONTEND=noninteractive`: `DEBIAN_FRONTEND=noninteractive sudo apt-get install tzdata`
</details>

## Build-time

This stage should be used to benefit from caching, i.e., pre-builds. The [YAML specification](../references/recipe-syntax.md) is used by our builder to create container images that are then run as workspaces. 

Each command block can be thought of as a layer in a Docker image. They are wrapped in a script and executed within a bash context. 
In case `directory` is specified:
- if absolute, it will be used
- if relative, it will be relative to `/home/devzero`
- if unspecified, it will default to `/home/devzero`

`name` is used to help reference and understand what is being achieved in a command block.

{% hint style="warning" %}
**Note** When invoking binaries, its always best-practice to reference them by their absolute paths. For example, `/usr/local/go/bin/go` instead of `go`. This related to the previous `warning` block.
{% endhint %}

{% hint style="danger" %}
**Warning** Environment variable set by calling `export` are not going to be available in subsequent command blocks. To use them in subsequent blocks, either write to some file, or to `/etc/environment`.
{% endhint %}

Here's an example of some build-time steps:

{% code overflow="wrap" lineNumbers="true" %}
```yaml
dev:
  commands:
    - command: sudo apt-get update && sudo apt-get upgrade -y && sudo apt-get install -y unzip tar curl gnupg software-properties-common zip
      name: install_base_packages
    - command: |-
        curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
        export NVM_DIR=$HOME/.nvm && [ -s $NVM_DIR/nvm.sh ] && \. $NVM_DIR/nvm.sh
        nvm install 20
        echo '. $HOME/.nvm/nvm.sh' >> $HOME/.bashrc
        echo '. $HOME/.nvm/nvm.sh' >> $HOME/.zshrc
        npm install
      directory: supabase # `supabase` is relative to `codeCloneRoot`, which defaults to /home/devzero if not specified
      name: buildtime_install_cmd_for_JavaScript
    - command: |-
        sudo apt-get update
        sudo apt-get install -y apt-transport-https ca-certificates curl software-properties-common
        curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
        sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
        sudo apt-get update
        sudo apt-get install -y docker-ce docker-ce-cli containerd.io
        sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
        sudo chmod +x /usr/local/bin/docker-compose
      directory: supabase # `supabase` is relative to `codeCloneRoot`, which defaults to /home/devzero if not specified
      name: buildtime_install_cmd_for_Docker
```
{% endcode %}

For more examples, see [Common Build Commands](../references/common-build-commands.md).

Use-cases:
- Users in your team don't need to wait for workspaces to build.
- Users in your team want to start with workspaces that are already configured with golden paths.

<figure><img src="../.gitbook/assets/buildtime-in-recipe.png" alt=""><figcaption><p>Code block in a recipe</p></figcaption></figure>

<details>
<summary>What to not put here</summary>
- Starting any sort of daemonized process (eg: `sudo systemctl start ...`)
    - docker daemon
    - mysqld, postgres, etc
- While calling operations to kick-off indexing in IDEs is technically feasible in the build-time stage, it's best left to the startup-time stage.
</details>

## Startup-time

These steps are run using a systemctl unit at startup time. Command blocks will be executed in the order in which they are specified in the recipe.


{% hint style="warning" %}
**run_at_startup_** needs to be prepended to the command name in order for it to get executed as a startup-time step.
{% endhint %}

Other than that, the same rules from the [Build-time](#build-time) stage apply.

Here's an example of some startup-time steps:

{% code overflow="wrap" lineNumbers="true" %}
```yaml
dev:
  commands:
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
    - command: |-
        sudo systemctl start postgresql.service
        echo 'postgres     ALL=NOPASSWD: ALL' | sudo tee /etc/sudoers.d/100-postgres
        sudo -u postgres bash -c "psql -c \"CREATE USER pguser WITH PASSWORD 'test1234';\""
        sudo -u postgres createdb testdb -O pguser
      name: run_at_startup_for_postgres
```
{% endcode %}

<figure><img src="../.gitbook/assets/runtime-in-recipe.png" alt=""><figcaption><p>Code block in a recipe</p></figcaption></figure>

<details>
<summary>It is advisable to not put these here</summary>
- Cacheable steps that make filesystems updates are better placed in the build-time stage
- Binaries, files, interfaces that you expect the user to access as soon as they get into their workspace.
</details>
