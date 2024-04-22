# Recipes

<details>

<summary>How to enable Docker in a workspace...</summary>

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
In order for this to work, please be sure the command name is set to `run_at_startup_script`

</details>

Need help? Reach out to [support@devzero.io](mailto:support@devzero.io)
