---
description: >-
  The following guide outlines how to use DevBox as a runtime for GitHub
  actions.
---

# Run GitHub Actions in a DevBox

### Using a self-hosted runner

1. Visit your **GitHub** repository/org settings page.
2. Go to **Actions > Runners**.
3. Click on "New runner" and select "New self-hosted runner".
4. Select "Linux" and set "x64" as architecture.
5. Create a new recipe from the instructions provided on the page (should look like the following):

```yaml
version: "3"
build:
  steps:
    - type: apt-get
      packages: ["build-essential", "curl", "git", "nano", "software-properties-common", "ssh", "sudo", "tar", "unzip", "vim", "wget", "zip"]
    - type: command
      command: |
        mkdir actions-runner && cd actions-runner
        curl -o actions-runner-linux-x64-2.317.0.tar.gz -L https://github.com/actions/runner/releases/download/v2.317.0/actions-runner-linux-x64-2.317.0.tar.gz
        tar xzf ./actions-runner-linux-x64-2.317.0.tar.gz
        ./config.sh --unattended --url https://github.com/OWNER/REPO --token <token> --labels devzero

# We have to specify a "launch" command that installs a systemd service
# and starts it in the background after the workspace has been created
launch:
  steps:
    - type: command
      command: |
        cd actions-runner
        ./svc.sh install && ./svc.sh start
      directory: /home/devzero needed?
      user: root
```

{% hint style="info" %}
Tip: Make sure to pass the `--unattended` flag to `config.sh` script.
{% endhint %}

You can also get the registration token non-interactively by sending a http request using curl:

```sh
curl \
    -X POST \
    -H "Accept: application/vnd.github+json" \
    -H "Authorization: Bearer "${{ GH_PAT }}"" \
    https://api.github.com/repos/OWNER/REPO/actions/runners/registration-token
```

6. Verify that your runner was added to your repo/org and is either in "Idle" or "Online" state.

{% hint style="info" %}
Tip: The runner name should be the same as the DevBox hostname.
{% endhint %}

7. Run a GitHub Action on the self-hosted runner to verify that it passes successfully:

```yaml
name: Actions Demo
on: push
jobs:
  Explore-GitHub-Actions:
    runs-on: self-hosted
    steps:
    - run: echo "🎉 This job uses self-hosted runners!"
```

### Using Actions Runner Controller

You will need a Personal Access Token (PAT).

To create one:

1. Visit **Profile > Developer Settings > Personal access tokens > Tokens (classic)**.
2. Click on "Generate new token", select "Generate new token (classic)".
3. In the "scopes" section, select `repo` and optionally `admin:org` for organization runners.
4. Copy your new Personal Access Token.

Create a new recipe that resembles the following:

{% hint style="info" %}
Make sure to adjust the `INSTALLATION_NAME`, `NAMESPACE`, `GITHUB_CONFIG_URL`, and `GITHUB_PAT` variables as needed.
{% endhint %}

```yaml
version: "3"
build:
  steps:
    - type: apt-get
      packages: ["build-essential", "curl", "git", "nano", "software-properties-common", "ssh", "sudo", "tar", "unzip", "vim", "wget", "zip"]
    - type: command
      command: |
        curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
        sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl && rm kubectl
      directory: /home/devzero
      user: devzero
    - type: command
      command: |
        curl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3
        chmod 700 get_helm.sh
        ./get_helm.sh

launch:
  steps:
    - type: command
      command: |
        NAMESPACE=dz-arc-systems
        helm install arc \
            --namespace "${NAMESPACE}" \
            --create-namespace \
            oci://ghcr.io/actions/actions-runner-controller-charts/gha-runner-scale-set-controller
    - type: command
      command: |
        INSTALLATION_NAME="dz-runner-set"
        NAMESPACE="dz-arc-runners"
        GITHUB_CONFIG_URL=https://github.com/OWNER/REPO
        GITHUB_PAT=ghp_token
        helm install "${INSTALLATION_NAME}" \
            --namespace "${NAMESPACE}" \
            --create-namespace \
            --set githubConfigUrl="${GITHUB_CONFIG_URL}" \
            --set githubConfigSecret.github_token="${GITHUB_PAT}" \
            oci://ghcr.io/actions/actions-runner-controller-charts/gha-runner-scale-set
```

After creating the workspace, visit your repository/org settings, select **Actions > Runners**. Your new runner-set should be listed under "Runner scale sets" with the status being "Online".

To verify the installation, run a sample action:

```yaml
name: Actions Runner Controller Demo
on: push
jobs:
  Explore-GitHub-Actions-Arc:
    runs-on: devzero-arc-runner
    steps:
    - run: echo "🎉 This job uses runner scale set runners!"
```
