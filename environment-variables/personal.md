---
description: Setting personal environment variables
---

# Personal

## Saving an environment variable

Visit the Environment Variables section at [https://www.devzero.io/dashboard/environment-variables/personal](https://www.devzero.io/dashboard/environment-variables/personal) to add, remove or update your environment personal environment variables and secrets. Personal environment variables can only be see, managed, and used by you.&#x20;

{% hint style="info" %}
Personal environment variables are automatically made available on each of your running workspaces by default.&#x20;
{% endhint %}

<figure><img src="../.gitbook/assets/Personal variables.gif" alt=""><figcaption><p>pkjujuiuytreAdding personal environment variables</p></figcaption></figure>

## Using an environment variable

Using an environment variable within your workspace is how you would normally use any environment variable (eg: `echo $NOT_SO_SECRET_KEY`).

To use it in a build, you can reference it the same way. If your environment variable is called `MY_KEY`:

<figure><img src="../.gitbook/assets/env-var-in-build.png" alt=""><figcaption><p>Environment Variables during build-stage</p></figcaption></figure>

Need to store a sensitive environment variable or secret? Check out the [secrets.md](secrets.md "mention") page.&#x20;
