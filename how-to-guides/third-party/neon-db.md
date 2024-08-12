---
description: >-
  Using a NeonDB database branch from a DevZero workspace.
---

# Neon DB

## Architecture Diagram

<figure><img src="../../.gitbook/assets/neondb.drawio.png" alt=""><figcaption></figcaption></figure>

## Prerequisites

Basic knowledge of [Neon DB](https://neon.tech/docs) and [Neon DB branching](https://neon.tech/docs/introduction/branching)

### Creating a Branch

1. Go to **Your Project > Project Dashboard.**
2. Click on **Branch** , create a new branch.
3. Give it a name and select Current point to time to create the branch off the current state of your main database.

<figure><img src="../../.gitbook/assets/Screenshot 2024-08-06 at 14.03.47.png" alt=""><figcaption></figcaption></figure>

Once the branch is created, please copy the connection string and add it to your [user environment secrets](../../environment-variables/personal.md#saving-an-user-scoped-environment-variable). In this guide, it is saved as `DATABASE_URL`.

### Building a Todo App

For the purpose of this guide, we will be using a [todo app](https://github.com/myestery/todo-app) built with nextjs that requires an environment variable called `DATABASE_URL` . We will be creating a recipe for this application and we will launch a workspace based on it.

#### Build Steps

- install linux helper packages
- clone repo
- install nodejs
- run `npm install`
- run `npm run build`: in this step, we need the database URL to be present so we can run some [prisma](https://www.prisma.io/) commands that are required for manipulating the database

#### Launch Steps

- npm start: to start the application

### Creating a Recipe for our ToDo App

When asked for repository, feel free to use [https://github.com/myestery/todo-app](https://github.com/myestery/todo-app) or create a fork of it if you want to follow this guide.

We will be implementing the above steps using the recipe file below

```yaml
version: "3"

# Build-time steps are cached as container images and then layered to create a workspace.
build:
  steps:
    # This step adds basic packages you're likely to need in every workspace, we recommend leaving it in most recipes
    - type: apt-get
      packages:
        [
          "build-essential",
          "curl",
          "git",
          "nano",
          "software-properties-common",
          "ssh",
          "sudo",
          "tar",
          "unzip",
          "vim",
          "wget",
          "zip",
        ]
    - type: command
      command: "echo 'Hello, Build step!'"
    #
    ## Here is where you can add code repositories to be cloned into your workspace. Import multiple repositories by adding additional git-clone steps
    - type: git-clone
      url: https://github.com/Myestery/todo-app
    - type: command
      name: |
        Download and install NVM; then install node.js 21
      command: |
        curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
        echo 'export NVM_DIR=$HOME/.nvm' | sudo tee -a /etc/profile.d/nvm-installation.sh
        echo '[ -s $NVM_DIR/nvm.sh ] && \. $NVM_DIR/nvm.sh' | sudo tee -a /etc/profile.d/nvm-installation.sh
        . /etc/profile.d/nvm-installation.sh
        nvm install 21.0.0
      directory: /home/devzero
      user: devzero
    - type: command
      name: |
        Install dependencies
      command: |
        . /etc/profile.d/nvm-installation.sh
        npm install
        npm run build
      directory: todo-app
      user: devzero

# Launch-time steps are run as part of a workspace launch stage
launch:
  steps:
    - type: command
      name: Start Application
      command: echo Ready
      directory: todo-app
```

The Recipe page has some helper snippet to guide you ingenerating such files

### Creating a workspace

Now that we have a working recipe, we can create a workspace off it from the [recipes page](https://www.devzero.io/dashboard/recipes/recipe-library) by clicking launch.

### Video Walkthrough

{% embed url="https://vimeo.com/995427315/a450ca646a?share=copy" %}
