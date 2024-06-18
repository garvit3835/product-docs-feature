# Accessing the DevBox

There are various ways to interact with your DevBox. The first step is to verify the name of the workspace that you want to interact with.

If you prefer video from, [click here](access.md#tutorial-video) for a 7min video!

{% code overflow="wrap" %}
```bash
# to get the workspace name
dz workspace list
```
{% endcode %}

You will see something like this...

<figure><img src="../.gitbook/assets/dz-ws-list.png" alt=""><figcaption></figcaption></figure>

You can interact with this via:

* `dz workspace connect <workspace name>`
* local IDEs \[eg: VS Code ([doc](../references/ides/vscode.md)), JetBrains ([doc](../references/ides/jetbrains.md))]
* SSH ([doc](../references/ides/ssh.md))

To view running applications, visit `<workspacename>:<port>` in your browser (more info on this under [Access Running Applications](../devzero-network/access-own-workspace.md#access-your-running-application-s)!

## Tutorial Video

Here's a video covering all these concepts:

{% embed url="https://devzero.b-cdn.net/Accessing%20a%20workspace.mp4" %}
