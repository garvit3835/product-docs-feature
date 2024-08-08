# Workspace Lifecycle

Workspaces are be hibernated when inactivity is detected (or when the DevZero platform under conditions of duress). Currently, all the contents under `/home/devzero` are backed by a persistent volume.

:rotating\_light: Therefore, contents outside of `/home/devzero` (for example, `/var/*`, `/tmp/*`, etc) **will be lost** when such an event occurs.

{% hint style="info" %}
**On the roadmap...** Our team is actively working on ways to preserve and restore:

* running process
* state of the entire filesystem for when a workspace or any of its parts are restarted after being paused/stopped.
{% endhint %}

Users cannot manually hibernate a workspace, however they are automatically restarted (if in a hibernated state) when you attempt to reconnect to the workspace.

Workspace activity is determined by active connections that it's serving. This could be sessions connected via SSH, via various IDEs, etc. Workspaces are considered to be dormant after **30+ minutes** of inactivity, and may be candidates for hibernation.
