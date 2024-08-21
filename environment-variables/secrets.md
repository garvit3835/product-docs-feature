# Secrets

Secrets are used to store and reference secret values.

{% hint style="info" %}
To store a secret, navigate to the environment variables page and add a new key-value pair. Before saving, be sure to check "Secret". This stores the environment variable as a secret with the additional protections described below.
{% endhint %}

<figure><img src="../.gitbook/assets/Screenshot 2024-07-18 at 15.36.52.png" alt=""><figcaption></figcaption></figure>

Once a secret is saved, its value cannot be viewed or modified. You can only replace or delete the value. Otherwise, secrets work just like other environment variables.

{% hint style="info" %}
Note: user secrets are not available during build time, they are only available during launch and runtime steps.
{% endhint %}

You can access secrets within builds or at build or launch time, just like you would access any environment variable. If your secret is called `MY_SECRET_KEY`, to access its value anywhere, use `$MY_SECRET_KEY`. At runtime, you can use the `env` binary to verify that the secrets are present within that context.

All secrets are securely stored within DevZero in an isolated HashiCorp Vault deployment.
