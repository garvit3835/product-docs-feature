# Remote Desktop

You can access your DevBox interactively using Remote Desktop.

### Using Docker (recommended)

1. Create a new workspace with Docker installed ([How-to](../references/starter-templates/build-tools/docker.md)).
2. Launch the headless VNC docker environment:

```
docker run -d -p 5901:5901 -p 6901:6901 consol/debian-xfce-vnc
```

See how to connect below.

More information about the Docker image [here](https://github.com/ConSol/docker-headless-vnc-container/tree/master).

### Self-hosted install (experimental)

#### Installing Lightweight Desktop Environment

1. Make sure the package repositories are up-to-date:

```
sudo apt update
```

2. Install Xfce Desktop Environment:

```
sudo apt install xfce4 xfce4-goodies
```

3. Install a VNC server:

```
sudo apt install tightvncserver
```

4. Create a new file in `~/.vnc/xstartup` :

<pre><code><strong>#!/bin/bash
</strong>xrdb $HOME/.Xresources
startxfce4 &#x26;
</code></pre>

5. Start the VNC server:

```
vncserver
```

You will be prompted to create a password.

## Connecting to a remote desktop

{% hint style="info" %}
Make sure your machine is connected to the DevZero network before connecting
{% endhint %}

You can connect to the remote desktop using the VNC protocol.

```
vnc://<your-devbox-hostname>:5901
```

On macOS, open **"Finder" > "Go" > "Connect to server".**\
Type in the server address above and click on "Connect", if promted, enter the password you've selected.

{% hint style="success" %}
For the Docker-based install, the default password is **vncpassword**
{% endhint %}

<figure><img src="../.gitbook/assets/Screenshot 2024-08-06 at 13.04.47.png" alt=""><figcaption><p>DevBox Remote Desktop</p></figcaption></figure>
