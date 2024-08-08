---
description: >-
  The following guide outlines how to use DevBox as a runtime for GitHub
  actions.

---

# GitHub Actions

{% hint style="info" %}
Pre-built recipe templates are available [here](../../references/starter-templates/ci-cd/github-actions.md).
{% endhint %}

## Using a self-hosted runner

1. Visit your **GitHub** repository/org settings page.
2. Go to **Actions > Runners**.
3. Click on "New runner" and select "New self-hosted runner".
4. Select "Linux" and set "x64" as architecture.
5. Create a new workspace.
6. Follow the instructions provided on the page:

```
mkdir actions-runner && cd actions-runner
curl -o actions-runner-linux-x64-2.317.0.tar.gz -L https://github.com/actions/runner/releases/download/v2.317.0/actions-runner-linux-x64-2.317.0.tar.gz
tar xzf ./actions-runner-linux-x64-2.317.0.tar.gz
./config.sh --url https://github.com/OWNER/REPO --token <token> --labels devzero
```

Install and start the systemd service:

```
./svc.sh install && ./svc.sh start
```

You can also get the registration token non-interactively by sending a http request using curl:

```
curl \
    -X POST \
    -H "Accept: application/vnd.github+json" \
    -H "Authorization: Bearer "${{ GH_PAT }}"" \
    https://api.github.com/repos/OWNER/REPO/actions/runners/registration-token
```

6. Verify that the runner was added to your repo/org and is either in "Idle" or "Online" state.

{% hint style="info" %}
Tip: The runner name should be same as the DevBox hostname.
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

## Using Actions Runner Controller

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
