# Stop/Pause/Resume

Workspaces can be paused/stopped when inactivity is detected (or when the DevZero platform under conditions of duress). Currently, all the contents under `/home/devzero` is backed by a persistent volume.

{% hint style="warning" %}
Therefore, contents outside of `/home/devzero` (for example, `/var/*`, `/tmp/*`, etc) **will be lost** when such an event occurs.
{% endhint %}

From the devbox's perspective, this would feel like it was restarted.

{% hint style="info" %}
Our team is actively working on ways to preserve and restore:
- running process
- state of the entire filesystem
for when a workspace or any of its parts are restarted after being paused/stopped. 
{% endhint %}

Currently, there is no way for a user to invoke any of the following operations:
- starting a stopped workspace
- stopping a running workspace
as they are handled seamless by the platform. This might change in the future.

{% hint style="info" %}
Workspace activity is determined by active connections that it's serving. This could be sessions connected via SSH, via various IDEs, etc.
Workspaces are considered to be dormant after **30+ minutes** of inactivity, and may be candidates for getting paused/stopped.

If you'd like to see other ways of determining if a workspace is under active use, please write to us at [support@devzero.io](mailto:support@devzero.io).
{% endhint %}
