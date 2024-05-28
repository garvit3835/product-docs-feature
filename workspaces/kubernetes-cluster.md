# Kubernetes cluster

Access to the ephemeral, namespaced Kubernetes cluster is enabled via the CLI. 

## From anywhere 

To view the config, run
{% code overflow="wrap"%}
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

## From inside a devbox

When inside a devbox context, the CLI is able to retrieve environmental information from `/etc/devzero`. 
It is possible to replace the `<workspace-name>` with `.`. For example,
{% code overflow="wrap" %}
```bash
dz workspace kubeconfig . --update-kubeconfig
```
{% endcode %}

{% hint style="warning" %}
DevZero reserves the `default` namespace for it's managed deployments. **Do not** operate on this namespace.
Adding or removing resources in this namespace will lead to undocumented behaviors and cause potential data loss.
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
