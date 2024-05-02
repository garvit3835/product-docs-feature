# CLI Installation

These instructions will guide you through the DevZero CLI installation process based on your local operating system. Our CLI enables you to build, launch, and connect to your team's workspaces.&#x20;

<details>

<summary>MacOS and/or Linux Installation</summary>

Run the following command from within your terminal:&#x20;

<pre class="language-bash" data-full-width="false"><code class="lang-bash"><strong>curl -fsSL https://get.devzero.io | sh
</strong></code></pre>

</details>

<details>

<summary>Windows Installations</summary>

Our Windows CLI requires [WSL 2](https://learn.microsoft.com/en-us/windows/wsl/install). We do not support WSL 1. To verify your WSL version you can run the following from your Command shell or PowerShell:&#x20;

```sh
wsl -l -v
```

If you need to install or upgrade your WSL version please [follow these instructions](https://learn.microsoft.com/en-us/windows/wsl/install#upgrade-version-from-wsl-1-to-wsl-2). \
\
Once you have confirmed your WSL version, please open the Linux shell and run the following command:&#x20;

```bash
curl -fsSL https://get.devzero.io | sh
```

</details>
