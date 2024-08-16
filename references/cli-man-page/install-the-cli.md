# Install the CLI

These instructions will guide you through the DevZero CLI installation process based on your local operating system. The CLI enables building, launching, and connecting to workspaces.

{% tabs %}
{% tab title="MacOS / Linux" %}
Open terminal and run the following command:

{% code %}
```
curl -fsSL https://get.devzero.io | sh
```
{% endcode %}
{% endtab %}

{% tab title="Windows" %}
The Windows CLI requires [WSL 2](https://learn.microsoft.com/en-us/windows/wsl/install). We **do not** support WSL 1. To verify your WSL version you can run the following from your Command shell or PowerShell:

```
wsl -l -v
```

To update your WSL version, please [follow these instructions](https://learn.microsoft.com/en-us/windows/wsl/install#upgrade-version-from-wsl-1-to-wsl-2).

To install the Windows CLI open a terminal using WSL 2 and run the following command:

<pre class="language-bash" data-overflow="wrap"><code class="lang-bash"><strong>curl -fsSL https://get.devzero.io | sh
</strong></code></pre>
{% endtab %}
{% endtabs %}

{% hint style="info" %}
**Make sure to run the following commands after installation to continue with the setup process:**

{% code fullWidth="true" %}
```
sudo dz auth login && sudo dz net connect
```
{% endcode %}
{% endhint %}

If you run into any issues, please reach out to us at [support@devzero.io](mailto:support@devzero.io).
