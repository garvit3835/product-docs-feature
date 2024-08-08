---
description: >-
  For documentation on legacy recipe syntaxes (i.e. v1 and v2, please reach out
  to support@devzero.io)

---

# Recipe Syntax

A recipe is a definition of a workspace. It consists of a base workspace configuration, and a set of steps to be executed. Let's look at a simple recipe:

```yaml
version: "3" # Required so we would know how to interpret the recipe
build:
  steps:
    - type: command
      command: touch hello
```

## Steps

Steps while optional are the core tool that you will use to configure your workspace and prepare it for work. Steps can be executed either during [build time or launch time](../recipes/exec-stages.md). This is accomplished by placing the steps in the corresponding section:

```yaml
version: "3"

build:
  steps:
    - type: command
      command: touch hello

launch:
  steps:
    - type: command
      command: touch hello_launch

```

The file `hello_launch` will get created during your workspace startup, while the file `hello` will be created at build time.

You can most step you want between launch and build phases of the recipe. But keep in mind that doing more work during the launch of the container will make your workspace start slower.

At the moment we have following step types available:

### Command

The bread and butter step, pretty much everything you need can be accomplished using this step.

```yaml
    - type: command
      name: dump_env # Optional
      command: env > envdump
      directory: /home/devzero # Optional
      user: devzero # Optional
      shell: /bin/bash -l -o errexit -o nounset -o pipefail {} # Optional, can be any interpreter
```

You can have multiline commands, for example:

```yaml
    - type: command
      command: |
        echo "Hello"
        echo "World"
```

### File

Creates a file with some content.

{% hint style="info" %}
Paths are not using shell expansion, so you have to write out /home/devzero/projects rather than \~/projects
{% endhint %}

```yaml
    - type: file
      path: /etc/devzero/hello
      content: "hello" # Supports secret interpolation discussed further in the docs
      permissions: "0644" # Optional, can also be formated as "rw-r--r--", both formats are good
      user: devzero # Optional
      group: devzero # Optional, defaults to being the same as the user
```

### Directory

Creates a directory.

{% hint style="info" %}
Same as with files path is not expanded, so \~ and environment variables will not be replaced with corresponding values
{% endhint %}

```yaml
    - type: directory
      path: /home/devzero/src/
      permissions: "0755" # Optional, can also be formated as "rwxr-x---", both formats are good
      user: devzero # Optional
      group: devzero # Optional, defaults to being the same as the user
```

### Apt Get

Installs apt packages.

```yaml
    - type: apt-get
      packages: ["sudo", "tar", "wget"]
```

We also support an easy way to add extra repositories, for example:

```yaml
    - type: apt-get
      packages: ["docker-ce", "docker-ce-cli", "containerd.io"]
      extra_repositories:
      - key_url: https://download.docker.com/linux/ubuntu/gpg
        repository: https://download.docker.com/linux/ubuntu
```

Or:

```yaml
    - type: apt-get
      packages: ["python3.13", "python3.13-venv", "libpython3.13-dev"]
      extra_repositories:
        - repository: "ppa:deadsnakes/ppa"
```

You can also specify [components](https://wiki.debian.org/SourcesList):

```yaml
    - type: apt-get
      packages: ["terraform"]
      extra_repositories:
      - key_url: https://apt.releases.hashicorp.com/gpg
        repository: https://apt.releases.hashicorp.com
        components:
        - main
```

### Git Clone

Clones a git repository.

```yaml
    - type: git-clone
      url: https://github.com/Ignas/nukagit
      branch: main # default - not set
      directory: /home/devzero/projects/nukagit_clone # default - code clone root + name of the repository
```

Semantics for the directory are explained in [git documentation](https://git-scm.com/docs/git-clone#Documentation/git-clone.txt-emltdirectorygtem).

## Secrets and Environment variables

Commands often require either their environment to be set up correctly, or secrets to access private resources. Both of these can be managed on [a per team or a per user basis](../environment-variables/env-vars.md).

{% hint style="info" %}
System secrets are in the namespace `devzero` currently only one such secret exists `devzero.GITHUB_ACCESS_TOKEN` this token is populated using github account information for the user who is invoking the build
{% endhint %}

### Environment variables

If you want to set a particular environment variable to some value you have to do it for each phase separatly. Phases being `build`, `launch`and `runtime`.

#### Build time environment variables

```yaml
build:
  environment:
    - name: CXX
      value: ccache
    - name: NPM_KEY
      value: "{{var:team.NPM_KEY}}"
    - name: ADMIN_KEY
      value: "{{var:team.ADMIN_KEY}}"
```

Build time secrets can only come from team secrets or system (devzero) secrets. These environment variables will be available to any command executed within build phase, any values that make it into the final image will be part of it and will be available to anyone who launches the workspace.

#### Launch time environment variables

```yaml
launch:
  environment:
    - name: CXX
      value: ccache
    - name: NPM_KEY
      value: "{{var:team.NPM_KEY}}"
    - name: ADMIN_KEY
      value: "{{var:team.ADMIN_KEY}}"
```

Launch time secrets can be sourced from both team and user secrets.  These environment variables will be available to launch commands defined in the recipe. This does not include systemd units defined outside of the recipe (for example if you install docker or mysql, environment variables defined here will not be visible to startup scripts for these tools).

#### Runtime environment variables

```yaml
runtime:
  environment:
    - name: PATH
      value: "/opt/go/bin:$PATH"
```

Runtime environment variables will be present in any session (ssh, vscode, vscode terminal) started on the workspace.

Runtime environment variable customization is a bit special in that it supports Shell expansion (as opposed to build and launch environment variable settings). This is so you could configure development environment for your engineers more easily.

### Customizing individual commands

You can provide environment variables to a single command only. The syntax for the variable is the same as for global ones for example:

```yaml
    - type: command
      command: make
      directory: project
      environment:
        - name: CXX
          value: ccache
```

The variable can come from both - the recipe or secrets registry.

### Repository access

At the moment build time and launch time repository access can be controlled either automatically by using associated Github access credentials, or can be customized on a per step / per recipe basis. If you don't do any customization of the recipe, personal Github credentials for the user who triggered the build will be used during build time. But if the git-clone step is part of the recipe launch phase, we will use the credentials associated with the user who is starting the workspace.

Sometimes though it makes sense to use shared team secret as a way to control git access instead. You can do this by providing a `code_clone_credentials` section in the recipe configuration section:

```yaml
config:
  code_clone_credentials:
    type: ssh-private-key
    value: "{{var:team.GITHUB_ACCOUNT_KEY}}"
```

Currently we support two types of credentials: `ssh-private-key` and `github-token` . Credentials set in config will be used for all git operations during `build` and `launch` phases for all `git-clone` steps.

You are also able to provide git credentials to an individual git step as follows:

```yaml
    - type: git-clone
      url: https://github.com/Ignas/nukagit
      credentials:
        type: ssh-private-key
        value: "{{var:team.REPO_DEPLOY_KEY}}"
```

### Secrets as files

Sometimes a secret value (like an ssh key) is not very useful when it's stuck in an environment variable. To help you with this you can make sure the value is available as a file within a scope of a command, or as part of your workspace for example:

```yaml
    - type: command
      command: git clone https://github.com/devzero-inc/services
      directory: /home/devzero
      secret_mounts:
        - path: /etc/gitconfig
          value: "{{var:devzero.GITHUB_GIT_CONFIG}}"
```

Will ensure that while executing `git clone` command, the secret is available as `/etc/gitconfig`

Secrets mounted this way will only be available during the execution of the command, so they will not be part of the final workspace build. As opposed to files created using the `file` step.

You can populate any file from secrets by using the standard file step:

```yaml
    - type: file
      path: /home/devzero/.ssh/id_rsa
      content: "{{var:user.PRIVATE_SSH_KEY}}"
```

Be careful using this during build phase, as you might embed secrets into the build, which usualy is not what you want.

## Configuration

There are some more advanced configuration options for your workspace. These should be used with care, and most of the time you don't really need to change them.

### Git clone root

By default all the repositories are cloned in `/home/devzero` directory directly, but in some cases you might want your code to be cloned somewhere else like `/home/devzero/projects` for example. To achieve that just add a config section with `code_clone_root` set:

```yaml
config:
  code_clone_root: /home/devzero/projects
```

### Code clone credentials

We already discussed default code clone credentials in the [secrets section](syntax.md#repository-access).

### Volumes

Workspaces are based on docker containers, thus not everything is persisted across restarts. You can control which directories you want to persist by setting the volumes attribute in the config section:

```yaml
config:
    volumes:
    - path: /home/devzero
      sub_path: home
    - path: /var/lib/devzero
      sub_path: var-lib-devzero
    - path: /var/lib/docker
      sub_path: var-lib-docker
```

These are the default volumes that are being persisted. Make sure to include at least `/home/devzero` in the list when customizing it, otherwise your workspace might be completely ephemeral.

### Secret interpolation language

Environment values and file contents are special in that you can embed secret values into them. The syntax is quite simple:

```
Some text {{var:team.TEAM_SECRET}} more text {{var:user.USER_SECRET}}
```

As you can see - the structure of the expression consists of 3 parts - source (at the moment only `secret` is supported) namespace (`user`, `team` or `devzero`) matching user secret registry, team registry, or system secrets like `devzero.GITHUB_ACCESS_TOKEN` that comes from github account linked to your devzero account if present and secret name.

As we are using curly braces for variable interpolation, make sure you quote the strings properly:

```yaml
build:
  environment:
    - name: NAME
      value: {{var:team.TEAM_SECRET}} # invalid yaml
    - name: NAME
      value: "{{var:team.TEAM_SECRET}}" # valid syntax
    - name: NAME
      value: |
        {{var:team.TEAM_SECRET}} # also valid

```

We also support more complex expressions for example:

```
{{var:user.AWS_ACCESS_KEY || var:team.SHARED_AWS_ACCESS_KEY}}
```

This means - use user aws access key if it exists, and if not - use the team access key instead. This way some team members can use their own keys, while everyone else uses the shared key.
