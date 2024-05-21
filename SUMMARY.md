# Table of contents

* [👋 Welcome to DevZero](README.md)

## ℹ️ Getting Started

* [Quickstart](getting-started/quickstart.md)
* [Terminology](getting-started/terminology.md)
* [Install the CLI](getting-started/install-the-cli/README.md)
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
* [Developer Experience Infrastructure](use-cases/dxi.md)

## Recipes

* [Building new recipes](recipes/new-recipe.md)
* [Recipe types](recipes/types.md)
* [Source code](recipes/code.md)
* [Environment variables](recipes/env-vars/README.md)
  * [Personal](recipes/env-vars/personal.md)
  * [Team](recipes/env-vars/team.md)
* [Secrets](recipes/secrets/README.md)
  * [Personal](recipes/secrets/personal.md)
  * [Team](recipes/secrets/team.md)
* [Execution stages (build- vs launch-time)](recipes/exec-stages.md)
* [Custom base images](recipes/custom-base.md)
* [Where to save recipe specs?](recipes/saving-recipes.md)

## Workspaces (CPU, GPU)

* [Regions](workspaces/regions.md)
* [Stop/Pause/Resume](workspaces-cpu-gpu/stop-pause-resume.md)
* [Kubernetes cluster](workspaces-cpu-gpu/kubernetes-cluster.md)

## Builds

* [Environment variables](builds/README.md)
  * [User](builds/env-vars/user.md)
  * [Team](builds/builds/team.md)
* [Secrets](builds/README.md)
* [Automatic updates (GitOps)](builds/gitops.md)
* [Executing builds from CI](builds/ci.md)
* [Where to store images? (Private registry)](builds/storing-builds.md)

## Network

* [Status](network/status.md)
* [Connecting resources to your network](network/connecting.md)
* [Access running apps in your workspace](network/access-own-workspace.md)
* [Access apps in teammate's workspace](network/access-teammate-workspace.md)

## Volumes

* [Regions](volumes/regions.md)
* [Sharing volumes across workspaces](volumes/sharing.md)
* [Persistent volumes](volumes/persistent.md)

## Admin

* [User Management](admin/user-management.md)
* [ACLs](admin/acls.md)
* [Hosting](admin/hosting.md)
* [Permissions](admin/permissions/README.md)
  * [Connecting GitHub Account](admin/permissions/connecting-github-account.md)
  * [Connecting GitHub Org](admin/permissions/connecting-github-org.md)

## \[\[MOVE CONTENTS TO OTHER SECTIONS]] 🚀 Product Guides

* [Getting Started](product-guides/getting-started/README.md)
  * [Create Your First Recipe](product-guides/getting-started/create-your-first-recipe.md)
  * [Launch and Connect to Your First Workspace](product-guides/getting-started/launch-your-first-workspace.md)
  * [Inviting Users & Managing Permissions](product-guides/getting-started/inviting-teammates.md)
* [Writing Recipes](product-guides/writing-recipes.md)
* [Managing Recipes](product-guides/managing-recipes.md)
* [Launch & Connect to a Workspace](product-guides/launch-and-connect-to-a-workspace.md)
* [Using a Workspace](product-guides/using-a-workspace.md)
* [Managing Your Workspaces](product-guides/managing-your-workspaces.md)
* [How To's](product-guides/how-tos/README.md)
  * [Connect to an RDS Instance](product-guides/how-tos/connect-to-an-rds-instance.md)
* [Settings](product-guides/settings/README.md)
  * [User Settings](product-guides/settings/user-settings.md)
  * [Team Settings](product-guides/settings/team-settings.md)

## 📚 How-to Guides

* [Connect to an RDS Instance](product-guides/how-tos/connect-to-an-rds-instance.md)
* [Connect to an S3 Bucket](product-guides/how-tos/connect-to-an-s3-bucket.md)

## 🆘 FAQ + Troubleshooting

* [Web Console](troubleshooting/web-console.md)
* [Command Line](troubleshooting/command-line.md)
* [Recipes](troubleshooting/recipes.md)
* [Workspaces](troubleshooting/workspaces.md)
* [Visual Studio Code](troubleshooting/vs-code.md)
* [JetBrains](troubleshooting/jetbrains.md)

## 🔎 References

* [CLI Man Page](references/cli-man-page.md)
* [Recipe Syntax](references/recipe-syntax.md)
* [Common tools](references/common-tools/README.md)
* [Leaving DevZero](references/leaving-devzero.md)
