# Table of contents

## ℹ️ Getting Started

* [Welcome to DevZero](README.md)
* [Platform Overview](<README (1).md>)
* [Quickstart](getting-started/quickstart.md)

## 📜 Recipes

* [Overview](recipes/types.md)
* [Creating a Recipe](recipes/new-recipe.md)
* [Cloning Source Code](recipes/code.md)
* [Execution Stages](recipes/exec-stages.md)
* [Recipe Base Images](recipes/custom-base.md)
* [Sharing Recipes](recipes/saving-recipes.md)

## 🖥️ Workspaces

* [Overview](workspaces/overview.md)
* [Accessing the DevBox](workspaces/access.md)
* [Regions](workspaces/regions/README.md)
  * [Supported Regions](workspaces/regions/supported-regions.md)
* [Workspace Lifecycle](workspaces/stop-pause-resume.md)
* [Workspace Cluster](workspaces/kubernetes-cluster.md)

## 🔩 Environment Variables

* [Overview](environment-variables/env-vars.md)
* [Personal](environment-variables/personal.md)
* [Team](environment-variables/team.md)
* [Secrets](environment-variables/secrets.md)

## 🌐 DevZero Network

* [Overview](devzero-network/overview.md)
* [Network Status](devzero-network/status.md)
* [Adding Resources to your Network](devzero-network/connecting.md)
* [Access Running Applications](devzero-network/access-own-workspace.md)

## 🔑 Admin

* [User Management](admin/user-management.md)
* [ACLs](admin/acls.md)
* [Hosting](admin/hosting.md)
* [Single-Sign On (SSO)](admin/sso.md)

## 📚 How-to Guides

* [Connecting to AWS](how-to-guides/connecting-to-aws.md)
* [Connect to an RDS Instance](product-guides/how-tos/connect-to-an-rds-instance.md)
* [Connect to SQS](how-to-guides/connect-to-sqs.md)
* [Connect to an S3 Bucket](product-guides/how-tos/connect-to-an-s3-bucket.md)
* [Run GitHub Actions in a DevBox](how-to-guides/run-github-actions-in-a-devbox.md)
* [Docker Remote Build & Cache](how-to-guides/docker-remote-build-cache.md)
* [Bazel remote execution/cache](how-to-guides/bazel-remote-execution-cache.md)

## 🛠️ Troubleshooting

* [Web Console](troubleshooting/web-console.md)
* [Command Line](troubleshooting/command-line.md)
* [Recipes](troubleshooting/recipes.md)
* [Workspaces](troubleshooting/workspaces.md)
* [Visual Studio Code](troubleshooting/vs-code.md)
* [JetBrains](troubleshooting/jetbrains.md)

## 🔎 References

* [Terminology](references/terminology.md)
* [CLI Reference](references/cli-man-page/README.md)
  * [Install the CLI](references/cli-man-page/install-the-cli.md)
  * [Updating the CLI](references/cli-man-page/update.md)
  * [Uninstall the CLI](references/cli-man-page/uninstall.md)
  * [Supported OSs](references/cli-man-page/supported-os.md)
  * [Help Commands](references/cli-man-page/help-commands.md)
* [Recipe Syntax](references/recipe-syntax.md)
* [Starter Templates](references/starter-templates/README.md)
  * [Language Templates](references/starter-templates/languages/README.md)
    * [C#](references/starter-templates/languages/c-sharp.md)
    * [C](references/starter-templates/languages/c.md)
    * [C++](references/starter-templates/languages/cpp.md)
    * [Dart](references/starter-templates/languages/dart.md)
    * [Go](references/starter-templates/languages/go.md)
    * [Java](references/starter-templates/languages/java.md)
    * [JavaScript](references/starter-templates/languages/javascript.md)
    * [PHP](references/starter-templates/languages/php.md)
    * [Python](references/starter-templates/languages/python.md)
    * [Ruby](references/starter-templates/languages/ruby.md)
    * [Rust](references/starter-templates/languages/rust.md)
  * [Build Tool Templates](references/starter-templates/build-tools/README.md)
    * [Bazel](references/starter-templates/build-tools/bazel.md)
    * [Docker](references/starter-templates/build-tools/docker.md)
    * [Nix](references/starter-templates/build-tools/nix.md)
  * [Database Templates](references/starter-templates/databases/README.md)
    * [Postgres](references/starter-templates/databases/postgres.md)
  * [Infra Templates](references/starter-templates/infra/README.md)
    * [Helm](references/starter-templates/infra/helm.md)
    * [Kubectl](references/starter-templates/infra/kubectl.md)
    * [Pulumi](references/starter-templates/infra/pulumi.md)
    * [Skaffold](references/starter-templates/infra/skaffold.md)
    * [Terraform](references/starter-templates/infra/terraform.md)
  * [Third-Party Templates](references/starter-templates/third-party/README.md)
    * [AWS](references/starter-templates/third-party/aws.md)
    * [Azure](references/starter-templates/third-party/azure.md)
    * [GCP](references/starter-templates/third-party/gcp.md)
    * [GitHub](references/starter-templates/third-party/github.md)
    * [GitLab](references/starter-templates/third-party/gitlab.md)
  * [CI/CD](references/starter-templates/ci-cd/README.md)
    * [Argo CD](references/starter-templates/ci-cd/argo.md)
    * [Bazel Buildfarm](references/starter-templates/ci-cd/bazel-buildfarm.md)
    * [GitHub Actions](references/starter-templates/ci-cd/github-actions.md)
* [IDE Setup](references/ide-setup/README.md)
  * [Cursor](references/ide-setup/cursor.md)
  * [JetBrains](references/ide-setup/jetbrains.md)
  * [SSH](references/ide-setup/ssh.md)
  * [Visual Studio Code](references/ide-setup/vscode.md)
