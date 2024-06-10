# Accessing the Devbox in a Workspace

There are various ways to interact with your devbox. The first step is to verify the name of the workspace that you want to interact with.

{% code overflow="wrap" %}
```bash
# to get the workspace name
dz workspace list
```
{% endcode %}

You will see something like this...
<figure><img src="../../.gitbook/assets/dz-ws-list.png" alt=""><figcaption></figcaption></figure>

You can interact with this via:
- `dz workspace connect <workspace name>`
- local IDEs (eg: VS Code, JetBrains)
- SSH

To view running applications, visit `<workspacename>:<port>` in your browser (more info on this under Access Running Applications!).

Here's a video covering all these concepts:

{% embed url="https://devzero.b-cdn.net/Accessing%20a%20workspace.mp4" %}
