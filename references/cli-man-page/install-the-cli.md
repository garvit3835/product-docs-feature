---
title: Install the CLI
---
# Install the CLI

These instructions will guide you through the DevZero CLI installation process based on your local operating system. The CLI enables building, launching, and connecting to workspaces.

{% tabs %}
{% tab title="MacOS / Linux" %}
<pre data-overflow="wrap"><code><strong>curl -fsSL https://get.devzero.io | sh
</strong></code></pre>

**Make sure to run the following commands after installation to continue with the setup process:**

{% code fullWidth="true" %}
```
dz auth login
```
{% endcode %}

```
dz net connect
```
{% endtab %}

{% tab title="Windows" %}
Download Links:

* **ARM64:** [https://get.devzero.io/stable/windows-arm64/DevZero.exe](https://get.devzero.io/stable/windows-arm64/DevZero.exe)
* **AMD64:** [https://get.devzero.io/stable/windows-amd64/DevZero.exe](https://get.devzero.io/stable/windows-amd64/DevZero.exe)

Using Chocolatey:

```
choco install devzero-cli --version=1.0.0 --
source="'.;https://chocolatey.org/api/v2'"
```

To install chocolatey, [follow these instructions](https://docs.chocolatey.org/en-us/choco/setup/#installing-chocolatey-cli).

To install in WSL 2 (**does not** work on WSL 1):

<pre data-overflow="wrap"><code><strong>curl -fsSL https://get.devzero.io | sh
</strong></code></pre>
{% endtab %}
{% endtabs %}

If you run into any issues, please reach out to us at [support@devzero.io](mailto:support@devzero.io).
