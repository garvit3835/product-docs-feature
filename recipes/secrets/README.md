# Secrets

Secrets are used to store and reference sensitive material, that are materially non-public. 

These are usually used by:
- operations that are used to access sensitive resources, or
- your applications, either to get built or run

Once a secret is saved, it won't be visible in the UI or CLI. It will be available at build- or startup-time. 
It will also be available in the running workspaces.

{% hint style="warning" %}
**Reserved prefix** `DEVZERO_` is a reserved prefix used by the platform. They may change at any time so relying on them is not advisable.
{% endhint %}

You can access secrets within builds or at startup-time, just like you would access any environment variable. If your secret is called `MY_SECRET_KEY`, to access its value anywhere, use `$MY_SECRET_KEY`.
At runtime, you can use the `env` binary to verify that the secrets are present within that context.  

All secrets are stored securely within DevZero (in an isolated HashiCorp Vault deployment). 

<figure><img src="../.gitbook/assets/secret-in-build.png" alt=""><figcaption><p>Secret in Builds</p></figcaption></figure>

<table data-card-size="large" data-view="cards">
  <thead>
    <tr>
      <th></th>
      <th></th>
      <th data-hidden data-card-target data-type="content-ref"></th>
      <th data-hidden data-card-cover data-type="files"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Team</td>
      <td>Secrets that are shared across your team.</td>
      <td><a href="team.md">team.md</a></td>
      <td><a href="../../.gitbook/assets/multiple-users-silhouette.png">multiple-users-silhouette.png</a></td>
    </tr>
    <tr>
      <td>Personal</td>
      <td>Secrets that can only be accessed by the current user.</td>
      <td><a href="personal.md">personal.md</a></td>
      <td><a href="../../.gitbook/assets/single-user-silhouette.png">single-user-silhouette.png</a></td>
    </tr>
  </tbody>
</table>