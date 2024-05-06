# Recipes

<details>

<summary>How to enable Docker in a workspace...</summary>

You are probably reading this because you encountered the following error when trying to execute a docker related error:

```
$ docker run hello-world
docker: permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Head "http://%2Fvar%2Frun%2Fdocker.sock/_ping": dial unix /var/run/docker.sock: connect: permission denied.
See 'docker run --help'.

$ docker ps
permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Get "http://%2Fvar%2Frun%2Fdocker.sock/v1.45/containers/json": dial unix /var/run/docker.sock: connect: permission denied
```

To get Docker working in your workspace, add the following command to your recipe:

```
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

\
In order for this to work, please be sure the command name starts with `run_at_startup_`.

</details>

Need help? Reach out to [support@devzero.io](mailto:support@devzero.io)
