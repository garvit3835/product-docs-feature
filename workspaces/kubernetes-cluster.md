# Workspace Cluster

User workspaces are deploying with an [ephemeral, namespaced Kubernetes cluster](../references/terminology.md#workspace-cluster). If you need to interact with this cluster, here's how:&#x20;

## From Anywhere

To view the config, run

{% code overflow="wrap" %}
```bash
dz workspace kubeconfig <workspace-name>

# to get the workspace name
dz workspace ls
```
{% endcode %}

To write the config to the default Kubernetes configuration location, run

{% code overflow="wrap" %}
```bash
dz workspace kubeconfig <workspace-name> --update-kubeconfig
```
{% endcode %}

Then run commands like

{% code overflow="wrap" %}
```bash
kubectl get pods
```
{% endcode %}

## From Inside a DevBox

When inside a [DevBox](../references/terminology.md#devbox) context (i.e. when connected to a workspace), the CLI is able to retrieve environmental information from `/etc/devzero`. It is possible to replace the `<workspace-name>` with `.`. For example,

{% code overflow="wrap" %}
```bash
dz workspace kubeconfig . --update-kubeconfig
```
{% endcode %}

Then run commands like

{% code overflow="wrap" %}
```bash
kubectl get pods
```
{% endcode %}

{% hint style="warning" %}
DevZero reserves the `default` namespace for it's managed deployments. **Do not** operate on this namespace. Adding or removing resources in this namespace will lead to undocumented behaviors and cause potential data loss.
{% endhint %}

{% code overflow="wrap" %}
```bash
dz workspace kubeconfig -h 
This kubeconfig can be used by any kubectl to interact with the virtual cluster backing a workspace.
Usage: kubectl --kubeconfig <(dz ws kubeconfig <workspace_id | workspace_name>) ...

Usage:
  dz workspace kubeconfig <workspace_id | workspace_name> [flags]

Aliases:
  kubeconfig, kc

Flags:
  -h, --help                help for kubeconfig
  -u, --update-kubeconfig   update local kubeconfig (default: $HOME/.kube/config)

Global Flags:
      --verbose   Get detailed output
```
{% endcode %}

Here's a video covering how you can access and deploy apps to your workspace's Kubernetes cluster...

{% embed url="https://devzero.b-cdn.net/Kubernetes%20demo.mp4" %}
