# Table of contents

## ℹ️ Getting Started

* [Welcome to DevZero](README.md)
* [Platform Overview](getting-started/readme-1.md)
* [Quickstart](getting-started/quickstart.md)

## 📜 Recipes

* [Overview](recipes/overview.md)
* [Creating a Recipe](recipes/create-recipe.md)
* [Cloning Source Code](recipes/cloning-source-code.md)
* [Execution Stages](recipes/exec-stages.md)
* [Recipe Base Images](recipes/custom-base.md)
* [Sharing Recipes](recipes/saving-recipes.md)
* [Recipe Syntax](recipes/syntax.md)

## 🖥️ Workspaces

* [Overview](workspaces/overview.md)
* [Accessing the DevBox](workspaces/access.md)
* [Regions](workspaces/regions/README.md)
  * [Supported Regions](workspaces/regions/supported-regions.md)
* [Workspace Lifecycle](workspaces/stop-pause-resume.md)
* [Workspace Cluster](workspaces/kubernetes-cluster.md)

## 🔩 Environment Variables

* [Overview](environment-variables/env-vars.md)
* [User-scoped](environment-variables/personal.md)
* [Team-scoped](environment-variables/team.md)
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

* [Cloud Services](how-to-guides/cloud-services/README.md)
  * [AWS](how-to-guides/cloud-services/aws/README.md)
    * [DocumentDB](how-to-guides/cloud-services/aws/connect-to-a-documentdb-cluster.md)
    * [EKS](how-to-guides/cloud-services/aws/connect-to-an-eks-cluster.md)
    * [EC2](how-to-guides/cloud-services/aws/connect-to-an-ec2-instance.md)
    * [ECS](how-to-guides/cloud-services/aws/ecs.md)
    * [ECS (local)](how-to-guides/cloud-services/aws/ecs-local.md)
    * [RDS](how-to-guides/cloud-services/aws/connect-to-an-rds-instance.md)
    * [SQS](how-to-guides/cloud-services/aws/connect-to-sqs.md)
    * [S3](how-to-guides/cloud-services/aws/connect-to-an-s3-bucket.md)
    * [ElastiCache](how-to-guides/cloud-services/aws/connect-to-elasticache.md)
    * [OpenSearch](how-to-guides/cloud-services/aws/connect-to-opensearch.md)
  * [GCP](how-to-guides/cloud-services/gcp/README.md)
    * [Compute Instance](how-to-guides/cloud-services/gcp/connecting-to-compute-instance.md)
    * [BigQuery](how-to-guides/cloud-services/gcp/connecting-to-bigquery.md)
    * [GKE](how-to-guides/cloud-services/gcp/connecting-to-kubernetes-cluster.md)
    * [Cloud Storage](how-to-guides/cloud-services/gcp/connecting-to-cloud-storage.md)
    * [Cloud SQL](how-to-guides/cloud-services/gcp/connecting-to-cloud-sql.md)
* [Existing Network](how-to-guides/existing-network/README.md)
  * [AWS VPC](how-to-guides/existing-network/connecting-to-aws.md)
  * [GCP VPC](how-to-guides/existing-network/connecting-to-gcp.md)
* [Build Cache + Remote Execution](how-to-guides/build-cache/README.md)
  * [Bazel](how-to-guides/build-cache/bazel-remote-execution-cache.md)
  * [Docker](how-to-guides/build-cache/docker-remote-build-cache.md)
* [CI](how-to-guides/ci/README.md)
  * [GitHub Actions](how-to-guides/ci/run-github-actions-in-a-devbox.md)
* [Remote Desktop](how-to-guides/remote-desktop.md)
* [Third Party](how-to-guides/third-party/README.md)
  * [Neon DB](how-to-guides/third-party/neon-db.md)

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
* [Recipe Syntax](recipes/syntax.md)
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
    * [MongoDB](references/starter-templates/databases/mongodb.md)
    * [Postgres](references/starter-templates/databases/postgres.md)
  * [Infra Templates](references/starter-templates/infra/README.md)
    * [Helm](references/starter-templates/infra/helm.md)
    * [Kubectl](references/starter-templates/infra/kubectl.md)
    * [Kubectx / Kubens](references/starter-templates/infra/kubectx-kubens.md)
    * [K9s](references/starter-templates/infra/k9s.md)
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
