# Secrets

Secrets are used to store and reference sensitive values.&#x20;

{% hint style="info" %}
To store a secret, navigate to the environment variables page and add a new key-value pair. Before saving, be sure to check "Sensitive". This stores the environment variable as a secret with the additional protections described below.&#x20;
{% endhint %}

<figure><img src="../.gitbook/assets/CleanShot 2024-06-21 at 10.18.33@2x.png" alt=""><figcaption><p>Sensitive value checkbox for environment variables</p></figcaption></figure>

Once a secret is saved, its value cannot be viewed or modified. Otherwise secrets work just like other environment variables.&#x20;

You can access secrets within builds or at build or launch time, just like you would access any environment variable. If your secret is called `MY_SECRET_KEY`, to access its value anywhere, use `$MY_SECRET_KEY`. At runtime, you can use the `env` binary to verify that the secrets are present within that context.

All secrets are securely stored within DevZero in an isolated HashiCorp Vault deployment.
