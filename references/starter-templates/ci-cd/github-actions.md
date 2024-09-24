---
title: GitHub Actions
---
# GitHub Actions

## Self-hosted runner

These steps will allow you to create a workspace with all of the GitHub Actions required packages and binaries for a self-hosted runner

See DevZero's [GitHub Actions docs](../../../how-to-guides/ci/run-github-actions-in-a-devbox.md) for usage.

```yaml
version: "3"
build:
  steps:
    - type: apt-get
      packages: ["build-essential", "curl", "git", "nano", "software-properties-common", "ssh", "sudo", "tar", "unzip", "vim", "wget", "zip", "jq"]
    - type: command
      command: |
        mkdir actions-runner && cd actions-runner
        curl -o actions-runner-linux-x64-2.317.0.tar.gz -L https://github.com/actions/runner/releases/download/v2.317.0/actions-runner-linux-x64-2.317.0.tar.gz
        tar xzf ./actions-runner-linux-x64-2.317.0.tar.gz

launch:
  environment:
    - name: OWNER
      value: "INSERT-YOUR-GITHUB-ORG-NAME"
    - name: REPO
      value: "INSERT-YOUR-REPO-NAME"
    - name: GITHUB_PAT
      value: '***'
  steps:
    - type: command
      command: |
        cd actions-runner && ./config.sh --unattended --url https://github.com/${OWNER}/${REPO} --token $(curl \
        -X POST \
        -H "Accept: application/vnd.github+json" \
        -H "Authorization: Bearer "${GITHUB_PAT}"" \
        https://api.github.com/repos/${OWNER}/${REPO}/actions/runners/registration-token | jq -r '.token')
    - type: command
      command: |
        cd actions-runner && sudo ./svc.sh install
        cd actions-runner && sudo ./svc.sh start
```

## Actions Runner Controller

{% hing style="warning" %}

The Actions Runner Controller directions are in beta and running tests which require Docker aren't supported yet
{% endhint %}

{% hint style="info" %}
Adjust the `INSTALLATION_NAME`, `NAMESPACE`, `GITHUB_CONFIG_URL`, and `GITHUB_PAT` variables as needed.
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
  environment:
    - name: INSTALLATION_NAME
      value: "dz-arc-controller"
    - name: NAMESPACE
      value: "dz-arc-systems"
    - name: GITHUB_CONFIG_URL
      value: "org/repo"
    - name: GITHUB_PAT
      value: '***'
  steps:
    - type: command
      command: |
        helm install arc \
          --namespace "${NAMESPACE}" \
          --create-namespace \
          oci://ghcr.io/actions/actions-runner-controller-charts/gha-runner-scale-set-controller
    - type: command
      command: |
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
