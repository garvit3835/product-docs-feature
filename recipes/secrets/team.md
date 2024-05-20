# Personal Secrets

## Saving a secret

Visit the Environment Variables section at https://www.devzero.io/dashboard/settings/environment-variables#team to add, remove or update your secrets.

{% hint style="warning" %}
Make sure the `Sensitive` field **is checked**.
{% endhint %}

<figure><img src="../../.gitbook/assets/team-secret.png" alt=""><figcaption><p>Team Secrets</p></figcaption></figure>

## Using a secret

Using an secret within your workspace is how you would normally use any environment variable (eg: `echo $SECRET_KEY`).

To use it in a build, you can reference it the same way. If your environment variable is called `MY_SECRET_KEY`:
<figure><img src="../../.gitbook/assets/secret-in-build.png" alt=""><figcaption><p>Secrets during build-stage</p></figcaption></figure>

For more info on secrets, visit the main [Secrets](README.md) page.
