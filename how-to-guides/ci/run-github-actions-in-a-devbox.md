---
description: >-
  The following guide outlines how to use DevBox as a runtime for GitHub
  actions.
title: GitHub Actions
---

# GitHub Actions

{% hint style="info" %}
Pre-built recipe templates are available [here](../../references/starter-templates/ci-cd/github-actions.md).
{% endhint %}

## Using a self-hosted runner

1. Launch a new workspace on DevZero
2. Visit your **GitHub** organization/repo settings page.
3. Go to **Actions > Runners**.
<!-- markdown-link-check-disable -->
* For organization-wide runners: https://github.com/organizations/ORGANIZATION/settings/actions/runners
* For repository-wide runners: https://github.com/ORGANIZATION/REPO/settings/actions/runners
<!-- markdown-link-check-enable-->
4. Click on "New runner" and select "New self-hosted runner".
5. Select "Linux" and set "x64" as architecture.
6. Follow the instructions from GitHub provided on the page, which are similar to:

### Download

```
# Create a folder
mkdir actions-runner && cd actions-runner# Download the latest runner package
# download the binary
curl -o actions-runner-linux-x64-2.319.0.tar.gz -L https://github.com/actions/runner/releases/download/v2.319.0/actions-runner-linux-x64-2.319.0.tar.gz
# Optional: Validate the hash
echo "52b8f9c5abb1a47cc506185a1a20ecea19daf0d94bbf4ddde7e617e7be109b14  actions-runner-linux-x64-2.319.0.tar.gz" | shasum -a 256 -c
# Extract the installer
tar xzf ./actions-runner-linux-x64-2.319.0.tar.gz
```

### Configure

The $TOKEN_FROM_GITHUB will be in the UI when you create the new runner.

You may use the default settings or customize values as you'd like when going through the prompts

```
# Create the runner and start the configuration experience
export TOKEN_FROM_GITHUB="" # insert token
# for organization wide runners
./config.sh --url https://github.com/ORGANIZATION --token $TOKEN_FROM_GITHUB
# for a specific repo
# ./config.sh --url https://github.com/ORGANIZATION/REPO --token $TOKEN_FROM_GITHUB
```
{% hint style="info" %}
The token from GitHub wll expire in about an hour and is unique for your instance.

You can also get the registration token non-interactively by sending a http request using curl:

```
curl \
    -X POST \
    -H "Accept: application/vnd.github+json" \
    -H "Authorization: Bearer "${{ GITHUB_PAT }}"" \
    https://api.github.com/repos/ORGANIZATION/REPO/actions/runners/registration-token
```

{% endhint %}

### Install and Start

```
# Installs the actions service to run in background using systemd and runs as root user
sudo ./svc.sh install root && sudo ./svc.sh start
```

7. Verify that the runner was added to your repo/org and is either in "Idle" or "Online" state.

{% hint style="info" %}
Tip: The runner name should be same as the DevBox hostname.
{% endhint %}

8. Run a GitHub Action on the self-hosted runner to verify that it passes successfully, set `runs-on: self-hosted`:

```diff
name: Actions Demo
on: push
jobs:
  Explore-GitHub-Actions:
-    runs-on: ubuntu-latest
+    runs-on: self-hosted
    steps:
    - run: echo "🎉 This job uses self-hosted runners!"
```

### Video Walkthrough

Here's a five minute video to see the process from end to end.

{% embed url="https://devzero.b-cdn.net/Setting%20up%20Self-Hosted%20GitHub%20Actions%20on%20DevZero%20%F0%9F%9B%A0%EF%B8%8F.mp4" %}

## Using Actions Runner Controller

{% hint style="warning" %}
The Actions Runner Controller setup is still in beta and some actions, like running Docker in tests, aren't yet supported.
{% endhint %}

You will need a Personal Access Token (PAT).

To create one:

1. Visit **Profile > Developer Settings > Personal access tokens > Tokens (classic)**.
2. Click on "Generate new token", select "Generate new token (classic)".
3. In the "scopes" section, select `repo` and optionally `admin:org` for organization runners.
4. Copy your new Personal Access Token.

After you obtained the PAT:

1. Create a new workspace with [kubectl](../../references/starter-templates/infra/kubectl.md) and [helm](../../references/starter-templates/infra/helm.md) installed.
2. Install GitHub Actions Runner Controller using helm.

### Scale-set controller

{% hint style="info" %}
Adjust the `NAMESPACE`variable as needed.
{% endhint %}

<pre><code>NAMESPACE=dz-arc-systems
helm install arc \
<strong>  --namespace "${NAMESPACE}" \
</strong>  --create-namespace \
  oci://ghcr.io/actions/actions-runner-controller-charts/gha-runner-scale-set-controllerRunner scale-set
</code></pre>

### Runner scale-set

{% hint style="info" %}
Adjust the `INSTALLATION_NAME`, `NAMESPACE`, `GITHUB_CONFIG_URL`, and `GITHUB_PAT` variables as needed.
{% endhint %}

```
helm install "${INSTALLATION_NAME}" \
  --namespace "${NAMESPACE}" \
  --create-namespace \
  --set githubConfigUrl="${GITHUB_CONFIG_URL}" \
  --set githubConfigSecret.github_token="${GITHUB_PAT}" \
  --set containerMode.type="kubernetes" \
  --set containerMode.kubernetesModeWorkVolumeClaim.accessModes={"ReadWriteOnce"} \
  --set containerMode.kubernetesModeWorkVolumeClaim.storageClassName=gp2 \
  --set containerMode.kubernetesModeWorkVolumeClaim.resources.requests.storage=1Gi \
  --set template.spec.securityContext.fsGroup=1001 \
  oci://ghcr.io/actions/actions-runner-controller-charts/gha-runner-scale-set
```

3. Visit your repository/org settings, select **Actions > Runners**.\
   Your new runner-set should be listed under "Runner scale sets" with the status shown as "Online".
4. To verify the installation, run a sample action:

```yaml
name: Actions Runner Controller Demo
on: push
jobs:
  Explore-GitHub-Actions-Arc:
    runs-on: dz-runner-set # see `INSTALLATION_NAME` above
    steps:
    - run: echo "🎉 This job uses runner scale set runners!"
```
