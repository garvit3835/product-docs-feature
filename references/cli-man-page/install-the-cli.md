# Install the CLI

These instructions will guide you through the DevZero CLI installation process based on your local operating system. The CLI enables building, launching, and connecting to workspaces.

{% tabs %}
{% tab title="MacOS / Linux" %}
<pre class="language-bash" data-overflow="wrap"><code class="lang-bash"><strong>curl -fsSL https://get.devzero.io | sh</strong></code></pre>
{% endtab %}

{% tab title="Windows" %}
<pre class="language-bash" data-overflow="wrap"><code class="lang-bash"><strong>choco install devzero-cli --version=1.0.0 --source="'.;https://chocolatey.org/api/v2'"</strong></code></pre>

To install chocolatey, [follow these instructions](https://docs.chocolatey.org/en-us/choco/setup/#installing-chocolatey-cli).
{% endtab %}

{% tab title="Windows / WSL 2" %}
<pre class="language-bash" data-overflow="wrap"><code class="lang-bash"><strong>curl -fsSL https://get.devzero.io | sh</strong></code></pre>

The CLI **does not** work on WSL 1. To verify your WSL version you can run the following from your Command shell or PowerShell:
```
wsl -l -v
```
To update your WSL version, [follow these instructions](https://learn.microsoft.com/en-us/windows/wsl/install#upgrade-version-from-wsl-1-to-wsl-2).
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
