# Install the CLI

These instructions will guide you through the DevZero CLI installation process based on your local operating system. The CLI enables building, launching, and connecting to workspaces.

{% tabs %}
{% tab title="MacOS / Linux" %}
<pre class="language-bash" data-overflow="wrap"><code class="lang-bash"><strong>curl -fsSL https://get.devzero.io | sh</strong></code></pre>
{% endtab %}

{% tab title="Windows" %}
<pre class="language-bash" data-overflow="wrap"><code class="lang-bash"><strong>choco install devzero-cli --version=1.0.0 --source="'.;https://chocolatey.org/api/v2'"</strong></code></pre>

To install chocolatey, [follow these instructions](https://docs.chocolatey.org/en-us/choco/setup/#installing-chocolatey-cli).

To install in WSL 2 (**does not** work on WSL 1):
<pre class="language-bash" data-overflow="wrap"><code class="lang-bash"><strong>curl -fsSL https://get.devzero.io | sh</strong></code></pre>
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
