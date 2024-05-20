# Install DevZero CLI

A single CLI is used to interact with the DevZero control plane.

These instructions will guide you through the DevZero CLI installation process based on your local operating system. The CLI enables building, launching, and connecting to workspaces.&#x20;

{% tabs %}
{% tab title="MacOS / Linux" %}
{% code overflow="wrap" lineNumbers="true" %}
```bash
curl -fsSL https://get.devzero.io | sh
```
{% endcode %}
{% endtab %}

{% tab title="Windows" %}
To run on Windows, the CLI requires [WSL2](https://learn.microsoft.com/en-us/windows/wsl/install). We **do not** support WSL1. To verify your WSL version you can run the following from your Command shell or PowerShell:&#x20;
```sh
wsl -l -v
```
To update your WSL version, please [follow these instructions](https://learn.microsoft.com/en-us/windows/wsl/install#upgrade-version-from-wsl-1-to-wsl-2).

If you have WSL2, open a terminal using WSL2 and run the following command:&#x20;
{% code overflow="wrap" lineNumbers="true" %}
```bash
curl -fsSL https://get.devzero.io | sh
```
{% endcode %}
{% endtab %}
{% endtabs %}