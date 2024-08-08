# User-scoped

## Saving an user-scoped environment variable

Visit the Environment Variables section at [https://www.devzero.io/dashboard/environment-variables/user](https://www.devzero.io/dashboard/environment-variables/user) to add, remove, or update your user-scoped environment variables and secrets. User-scoped environment variables can only be seen, managed, and used by you.

{% hint style="info" %}
User-scoped environment variables are automatically made available on each of your running workspaces by default.
{% endhint %}

<figure><img src="../.gitbook/assets/Personal variables.gif" alt=""><figcaption><p>Adding personal environment variables</p></figcaption></figure>

## Using an environment variable

<figure><img src="../.gitbook/assets/Update environment variables (1).png" alt=""><figcaption><p>Personal Environment Variables</p></figcaption></figure>

Using an environment variable within your workspace is how you would normally use any environment variable (eg: `echo $NOT_SO_SECRET_KEY`).

To use it in a build, you can reference it the same way. If your environment variable is called `MY_KEY`:

<figure><img src="../.gitbook/assets/env-var-in-build.png" alt=""><figcaption><p>Environment Variables during build-stage</p></figcaption></figure>

Need to store a secret environment variable? Check out the [secrets.md](secrets.md "mention") page.
