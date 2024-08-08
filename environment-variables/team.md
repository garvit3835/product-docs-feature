# Team-scoped

## Saving a team-scoped environment variable

Visit the Environment Variables section at [https://www.devzero.io/dashboard/environment-variables/team](https://www.devzero.io/dashboard/environment-variables/team) to add, remove or update your  team-scoped environment variables. Team-scoped environment variables can be referenced and used by anyone within your DevZero team.

<figure><img src="../.gitbook/assets/Update environment variables (1).png" alt=""><figcaption><p>Team environment variables</p></figcaption></figure>

{% hint style="info" %}
Team-scoped environment variables and secrets must be directly referenced in your recipe template steps. Unlike user-scoped environment variables, they are **not** automatically added to every workspace.
{% endhint %}

<figure><img src="../.gitbook/assets/Update environment variables.png" alt=""><figcaption><p>Team Environment Variables</p></figcaption></figure>

## Using a team-scoped environment variable

Using an environment variable within your workspace is how you would normally use any environment variable (eg: `echo $NOT_SO_SECRET_KEY`).

To use it in a build, you can reference it the same way. If your environment variable is called `MY_KEY`:

<figure><img src="../.gitbook/assets/env-var-in-build.png" alt=""><figcaption><p>Environment Variables during build-stage</p></figcaption></figure>

Need to store a secret environment variable? Check out the [secrets.md](secrets.md "mention") page.
