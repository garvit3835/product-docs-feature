# Ephemeral Kubernetes Cluster

{% hint style="info" %}
**Coming soon...**
{% endhint %}

DevZero's workspaces are backed by ephemeral, virtualized Kubernetes clusters. Depending on the service tier and/or deployment models that you are being served from, one of the following will apply:

* all your workspaces are in the same underlying virtual Kubernetes cluster
  * in this case, each of your devboxes will be in the `default` namespace in the cluster
* each of your workspaces will be in isolated virtual Kubernetes clusters
  * every workspace will have its own devbox
  * every devbox will be in the `default` namespace in the cluster

Use cases:

* Ensure consistency of development environments
* Provide production-symmetric testing and QA environments
* Speed up inner development loops
