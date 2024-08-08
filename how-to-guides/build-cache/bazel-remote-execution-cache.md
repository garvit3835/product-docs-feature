# Bazel

{% hint style="info" %}
Looking for a pre-made recipe template? See: [Bazel Buildfarm](../../references/starter-templates/ci-cd/bazel-buildfarm.md)
{% endhint %}

## Installation (using Helm)

1. Make sure both kubectl and helm are installed.
2. When creating a new workspace, take a look at the [Kubectl](../../references/starter-templates/infra/kubectl.md) recipe and the [Helm](../../references/starter-templates/infra/helm.md) recipe.
3. Install bazel buildfarm on your k8s cluster using the official helm chart:

```
helm install \
  -n bazel-buildfarm \
  --create-namespace \
  bazel-buildfarm \
  oci://ghcr.io/bazelbuild/buildfarm \
  --version "0.2.4"
```

4. Forward the port from the k8s cluster to your DevBox:

```
kubectl port-forward service/bazel-buildfarm-server -n bazel-buildfarm 8980:8980 --address 0.0.0.0
```

## Example

Create the following bazel workspace file structure for testing:

`main.cc`

```cpp
#include <iostream>

int main( int argc, char *argv[] )
{
  std::cout << "Hello, World!" << std::endl;
}
```

`BUILD`

```starlark
cc_binary(
    name = "main",
    srcs = ["main.cc"],
)
```

`WORKSPACE`

Leave this file empty.

Run `bazel run :main` to verify the build locally.

### Remote execution

```
bazel build --remote_executor=grpc://<your-devbox>:8980 :main
```

### Remote caching

```
bazel build --remote_cache=grpc://<your-devbox>:8980 :main
```
