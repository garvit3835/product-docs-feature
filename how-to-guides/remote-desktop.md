# Remote Desktop

You can access your DevBox interactively using Remote Desktop.

## Installing Lightweight Desktop Environment

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

## Connecting to remote desktop

You can connect to the remote desktop using VNC protocol.

```
vnc://<your-devbox-hostname>:5901
```

{% hint style="info" %}
Make sure your machine is connected to the DevZero network
{% endhint %}

<figure><img src="../.gitbook/assets/Screenshot 2024-08-06 at 13.04.47.png" alt=""><figcaption><p>DevBox Remote Desktop</p></figcaption></figure>
