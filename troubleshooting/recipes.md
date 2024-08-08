# Recipes

<details>
<summary>ERROR: mount options is too long</summary>
You are probably reading this because you encountered an error that looks like this when building a recipe:

{% code %}
```
ERROR: mount options is too long------ > mkfile /usr/lib/devzero/build-scripts/....: ------
error: failed to solve: mount options is too long Build failed with code 1
```
{% endcode %}

This is happening because the container image that's getting created for your recipe has too many layers, i.e., too many `build-steps`. You can fix it by combining a few build steps together and overall, reducing the number of explicit build steps in your recipe.

{% hint style="info" %}
Our general guideline is to keep this under 100 steps.
{% endhint %}

To learn more about _why_ something like this happens, [check this out](https://github.com/docker/docs/issues/8230#issuecomment-468630187). This limitation is due to how Linux handles syscalls, and various container registries also impose this limit.
</details>

<details>
<summary>How to enable Docker in a workspace...</summary>
You are probably reading this because you encountered the following error when trying to execute a docker related error:

{% code %}
```
$ docker run hello-world
docker: permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Head "http://%2Fvar%2Frun%2Fdocker.sock/_ping": dial unix /var/run/docker.sock: connect: permission denied.
See 'docker run --help'.

$ docker ps
permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Get "http://%2Fvar%2Frun%2Fdocker.sock/v1.45/containers/json": dial unix /var/run/docker.sock: connect: permission denied
```
{% endcode %}

To get Docker working in your workspace, add the following command to your recipe:

{% code lineNumbers="true" %}
```yaml

- command: |-
      sudo groupadd docker || true
      sudo usermod -aG docker $USER
      newgrp docker # if you can't access docker, try rebooting the workspace once: `sudo reboot`
      sudo chown "$USER":"$USER" "$HOME"/.docker -R
      sudo chmod g+rwx "$HOME/.docker" -R
      sudo systemctl start docker
      sudo systemctl enable docker.service
      sudo systemctl enable containerd.service
    name: run_at_startup_script
```
{% endcode %}

In order for this to work, please be sure the command name starts with `run_at_startup_`.
</details>

Need help? Reach out to [support@devzero.io](mailto:support@devzero.io)
