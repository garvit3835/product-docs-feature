# Team

## Saving a team environment variable

Visit the Environment Variables section at https://www.devzero.io/dashboard/settings/environment-variables#team to add, remove or update your environment variables for your team.

{% hint style="warning" %}
Make sure the `Sensitive` field is **not** checked.
{% endhint %}

<figure><img src="../.gitbook/assets/team-env-var.png" alt=""><figcaption><p>Team Environment Variables</p></figcaption></figure>

## Using a team environment variable

Using an environment variable within your workspace is how you would normally use any environment variable (eg: `echo $NOT_SO_SECRET_KEY`).

To use it in a build, you can reference it the same way. If your environment variable is called `MY_KEY`:

<figure><img src="../.gitbook/assets/env-var-in-build.png" alt=""><figcaption><p>Environment Variables during build-stage</p></figcaption></figure>

For more info on environment variables, visit the main [Environment Variables](env-vars.md) page.
