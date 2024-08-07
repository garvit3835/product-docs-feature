# Overview

Environment variables are materially public in nature. If you want to store or reference a secret value, see [Secrets](secrets.md).

These are usually used by when:

* a build is getting created,
* a process needs it at launch or runtime

Once an environment variable is saved, it will be visible in the UI or CLI. It will be available at build- or launch-time. It will also be available in the running workspaces.

{% hint style="warning" %}
**Reserved prefix** `DEVZERO_` is a reserved prefix used by the platform. They may change at any time so relying on them is not advisable.

You may store environment variables or secrets with line breaks.
{% endhint %}

You can access environment variables within builds or at launch-time. If your variable is called `MY_KEY`, to access its value anywhere, use `$MY_KEY`. At runtime, you can use the `env` binary to verify that the secrets are present within that context.

<figure><img src="../.gitbook/assets/env-var-in-build.png" alt=""><figcaption><p>Environment Variables in Builds</p></figcaption></figure>

<table data-card-size="large" data-view="cards"><thead><tr><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th><th data-hidden data-card-cover data-type="files"></th></tr></thead><tbody><tr><td>Team</td><td>Environment variables that are shared across your team.</td><td><a href="team.md">team.md</a></td><td><a href="../.gitbook/assets/multiple-users-silhouette.png">multiple-users-silhouette.png</a></td></tr><tr><td>Personal</td><td>Environment variables that can only be accessed by the current user.</td><td><a href="personal.md">personal.md</a></td><td><a href="../.gitbook/assets/single-user-silhouette.png">single-user-silhouette.png</a></td></tr></tbody></table>
