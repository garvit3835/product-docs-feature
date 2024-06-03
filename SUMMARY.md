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
* [Improving Build Times](use-cases/build-times.md)
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

* [Regions](workspaces/regions/README.md)
  * * [Supported Regions](workspaces/regions/supported-regions.md)
* [Stop/Pause/Resume](workspaces/stop-pause-resume.md)
* [Kubernetes cluster](workspaces/kubernetes-cluster.md)

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
* [Common Tools](references/common-tools/README.md)
  * [Programming Languages](references/common-tools/languages/README.md)
  * [Build Tools](references/common-tools/build-tools/README.md)
  * [Databases](references/common-tools/databases/README.md)
  * [Infra Tools](references/common-tools/infra/README.md)
    * [Argo CD](references/common-tools/infra/argo.md)
    * [Helm](references/common-tools/infra/helm.md)
    * [Kubectl](references/common-tools/infra/kubectl.md)
    * [Pulumi](references/common-tools/infra/pulumi.md)    
    * [Terraform](references/common-tools/infra/terraform.md)
  * [Third-Party](references/common-tools/third-party/README.md)
  * [IDEs](references/common-tools/ides/README.md)
* [Leaving DevZero](references/leaving-devzero.md)
