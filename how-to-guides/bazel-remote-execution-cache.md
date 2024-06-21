# Bazel remote execution/cache

### Installation (using Helm)

Make sure both kubectl and helm are installed.

When creating a new workspace, take a look at the [Kubectl](../references/starter-templates/infra/kubectl.md) recipe and the [Helm](../references/starter-templates/infra/helm.md) recipe.

Install bazel buildfarm on your k8s cluster using the official helm chart:

```
helm install \
  -n bazel-buildfarm \
  --create-namespace \
  bazel-buildfarm \
  oci://ghcr.io/bazelbuild/buildfarm \
  --version "0.2.4"
```

Forward the k8s port to your DevBox:

```
kubectl port-forward service/bazel-buildfarm-server -n bazel-buildfarm 8980:8980 --address 0.0.0.0
```

### Remote execution

```
bazel build --remote_executor=grpc://<your-devbox>:8980 :main
```

### Remote caching

```
bazel build --remote_cache=grpc://<your-devbox>:8980 :main
```
