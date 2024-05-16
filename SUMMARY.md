# Table of contents

* [👋 Welcome to DevZero](README.md)

## ℹ️ Getting Started

* [Quickstart](getting-started/quickstart.md)
* [Terminology](getting-started/terminology.md)
* [Install the CLI](getting-started/install-devzero/README.md)
  * [Download dz](getting-started/install-devzero/download.md)
  * [Update dz](getting-started/install-devzero/update.md)
  * [Uninstall dz](getting-started/install-devzero/uninstall.md)

## Use-cases

* [Standardized Dev Environment](use-cases/standardized-dev-env.md)
* [Cloud Development Environment (CDE)](use-cases/cde.md)
* [Testing Environment](use-cases/testing-env.md)
* [Preview Environments](use-cases/preview-env.md)
* [Internal Developer Platform](use-cases/idp.md)
* [Faster Onboarding](use-cases/faster-onboarding.md)
* [Ephemeral Kubernetes Cluster](use-cases/ephemeral-kubernetes-cluster.md)
* [Namespaced Cloud Services](use-cases/namespaced-cloud-services.md)
* [Connecting to on-prem/cloud resources](use-cases/connectivity.md)
* [Sharing build caches](use-cases/sharing-build-caches.md)
* [Developer Experience Infrastructure](use-cases/use-cases.md)

## Recipes

* [Building new recipes](recipes/)
* [Recipe types](recipes/)
   * [Team](recipes/)
* [Source code](recipes/)
* [Environment variables](recipes/)
  * [User](recipes/)
  * [Team](recipes/)
* [Secrets](recipes/)
  * [User](recipes/)
  * [Team](recipes/)
* [Execution stages (build vs launch vs runtime)](recipes/)
* [Custom base images](recipes/)
* [Where to save recipe specs?](recipes/)

## Workspaces (CPU, GPU)

* [Regions](workspaces/regions.md)
* [Stop/Pause/Resume](workspaces/hibernation.md)

## Builds

* [Environment variables](builds/..)
  * Users
  * Team
* [Secrets](builds/..)
  * User
  * Team
* [Automatic updates (GitOps)](builds/..)
* [Executing builds from CI](builds/..)
* [Where to store images? (Private registry)](builds/..)

## Network

* [Status](network/status.md)
* [Connecting resources to your network](network/connecting.md)
* [Access running apps in your workspace](network/access-own-workspace.md)
* [Access apps in teammate's workspace](network/access-teammate-workspace.md)

## Volumes

* [Regions](volumes/regions.md)
* [Sharing volumes acreoss workspaces](volumes/sharing.md)
* [Persistent volumes](volumes/persistent.md)

## Admin

* User Management
* ACLs
* Hosting
* Permissions
  * Connecting GitHub Account 
  * Connecting GitHub Org

## [[MOVE CONTENTS TO OTHER SECTIONS]] 🚀 Product Guides

* [Getting Started](product-guides/getting-started/README.md)
  * [Create Your First Recipe](product-guides/getting-started/create-your-first-recipe.md)
  * [Launch and Connect to Your First Workspace](product-guides/getting-started/launch-your-first-workspace.md)
  * [Inviting Users & Managing Permissions](product-guides/getting-started/inviting-teammates.md)
* [Writing Recipes](product-guides/writing-recipes.md)
* [Managing Recipes](product-guides/managing-recipes.md)
* [Launch & Connect to a Workspace](product-guides/launch-and-connect-to-a-workspace.md)
* [Using a Workspace](product-guides/using-a-workspace.md)
* [Managing Your Workspaces](product-guides/managing-your-workspaces.md)
* [How To's](product-guides/how-tos/README.md) [[ move out]]
  * [Connect to an RDS Instance](product-guides/how-tos/connect-to-an-rds-instance.md)
* [Settings](product-guides/settings/README.md)
  * [User Settings](product-guides/settings/user-settings.md)
  * [Team Settings](product-guides/settings/team-settings.md)

## 📚 How-to Guides

* [Connect to an RDS Instance](product-guides/how-tos/connect-to-an-rds-instance.md) # rename
* [Connect to an S3 Bucket](how-to/connect-to-an-s3-bucket.md) 

## 🆘 FAQ + Troubleshooting

* [Web Console](troubleshooting/web-console.md)
* [Command Line](troubleshooting/command-line.md)
* [Recipes](troubleshooting/recipes.md)
* [Workspaces](troubleshooting/workspaces.md)
* [Visual Studio Code](troubleshooting/vs-code.md)

## 🔎 References

* [CLI Installation](references/cli-installation.md)
* [Recipe Syntax](references/recipe-syntax.md)
* [Leaving DevZero](references/leaving-devzero.md)
