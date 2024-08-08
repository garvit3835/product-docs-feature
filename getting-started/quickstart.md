---
description: 'Estimated time to complete: ~5 mins'

---

# Quickstart

**Welcome!** :wave:

Follow the steps below to get started on the DevZero platform. Or, if you're more of a visual learner, we have a video tutorial as well!

{% embed url="https://devzero.b-cdn.net/New%20onboarding2.mp4" %}

## Step 1. Signing up for an account

You'll need to sign up for a DevZero account before you're able to do anything. We require you to have an existing account with an external Identity Provider (such as GitHub, Microsoft, or Google). To sign up for a DevZero account & create your DevZero team, please visit [https://devzero.io/dashboard](https://devzero.io/dashboard)

## Step 2. Connecting your source code provider

<figure><img src="../.gitbook/assets/Connect Github.gif" alt=""><figcaption><p>Connecting GitHub</p></figcaption></figure>

<figure><img src="https://devzero.b-cdn.net/Github%20connection.gif" alt=""><figcaption><p>Connecting your source control provider</p></figcaption></figure>

You can connect your source code provider during the workspace creation or though the "User Settings"

We currently only offer native support for GitHub as a code provider for DevZero's workspaces. Bitbucket and GitLab support are coming soon!

If you only plan to work with public repositories, you do not need to enable our GitHub integration. However, if you'd like to work with private codebases, you'll need to head to [https://www.devzero.io/dashboard/settings/user-settings](https://www.devzero.io/dashboard/settings/user-settings) and complete the installation and authorization steps.

{% hint style="info" %}
For more information (including a hack to use Bitbucket and GitLab repos), see our [Source Code in Recipes](./../recipes/cloning-source-code.md) guide.
{% endhint %}

## Step 3. Creating Your First Recipe

Great! Now, you'll need a [recipe](../references/terminology.md#recipe) to build your first [workspace](../references/terminology.md#workspace). A recipe is a blueprint for your environment. DevZero uses these recipes to provision your workspaces -- for example, cloning from a Git repository, installing dependencies, or importing your dotfiles.

We currently only support creating recipes via our Web UI ([https://devzero.io/dashboard](https://devzero.io/dashboard)), so you'll need to head there to get started. Once you're there, you should see a button on the top-right corner, labeled "Create New".

<figure><img src="../.gitbook/assets/CleanShot 2024-05-21 at 16.09.31@2x.png" alt="A picture of the DevZero dashboard, with a red highlighted border around the &#x22;Create New&#x22; button. This button is located in the top-right of the DevZero dashboard."><figcaption></figcaption></figure>

When you click that button, a menu should pop up with two options. We want to create a new recipe, so click "Create New Recipe".

<figure><img src="../.gitbook/assets/CleanShot 2024-05-21 at 16.16.53@2x.png" alt="A picture of the DevZero dashboard, with the &#x22;Create New Recipe&#x22; button highlighted in red."><figcaption><p>The button you should click. Don't click the one above it. Not yet.</p></figcaption></figure>

Once you click that button, you should be taken to a new screen. This is where the magic happens.

<figure><img src="../.gitbook/assets/Create recipes - page 1 - with GH auth.png" alt=""><figcaption><p>Recipe generation! We do it!</p></figcaption></figure>

In that text box, you can put _any_ Git repositories, public ones or ones you have access to, and, using some clever DevZero magic, we'll detect the programming languages, frameworks, and dependencies that are needed for that repository. We'll also generate a starter recipe with all of those things preloaded. Cool, right?

Make sure to "Add" each repo that you would like to include in your environment.

For the sake of this tutorial, let's use a personal website repository ([https://github.com/hatf0/hat.fo-next](https://github.com/hatf0/hat.fo-next)). This is a Next.js / Tailwind CSS app built on top of Node.js, which we happily support.

<figure><img src="../.gitbook/assets/CleanShot 2024-05-21 at 16.27.59@2x.png" alt=""><figcaption><p>.</p></figcaption></figure>

Click the 'Next' button, and sit tight while we craft your starter recipe!

After a few moments, you should be redirected to our recipe editor page. We've finished doing our checks on your repo, and now you're ready to start further customizing your recipe. We support two ways of building recipes - the visual editor, or the text editor. To see the raw recipe, click the "View YAML" switch at the top right.

<figure><img src="../.gitbook/assets/CleanShot 2024-05-21 at 16.31.46@2x (1).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../.gitbook/assets/YAML (2).png" alt=""><figcaption><p>Recipe YAML editor</p></figcaption></figure>

Review the recipe we generated, and if everything looks good, click the "Save" button at the top-right of the page. A modal should pop up, asking you to name the newly generated recipe. Don't worry -- you can always change this later. Let's keep things simple, and call it "My First Recipe".

<figure><img src="../.gitbook/assets/CleanShot 2024-05-21 at 16.37.50@2x.png" alt=""><figcaption><p>The description is not required, just FYI. The recipe will build without it... or will it?</p></figcaption></figure>

Once you're done naming the recipe (we know, naming things is the hardest part of any software engineer's job), click the "Save" button at the bottom-right of the modal. You'll be redirected to the next page, where we'll attempt to build your recipe. These builds are similar to a base-image for any workspace that is launched from the recipe specification. We do a lot of clever caching to keep things snappy and prevent needing to rebuild everything each time you launch a workspace.

<figure><img src="../.gitbook/assets/CleanShot 2024-05-21 at 16.40.20@2x.png" alt=""><figcaption><p>These logs are real-time, so if you're like me &#x26; you like to watch paint dry, this is very exciting.</p></figcaption></figure>

<figure><img src="../.gitbook/assets/YAML (3).png" alt=""><figcaption></figcaption></figure>

## Step 4. Launching a Workspace from the Recipe

If your build is successful, a button near the top-right side of your browser should appear, allowing you to "Launch Workspace Now". Great! Clicking that will deploy a workspace from the [build image](../references/terminology.md#build) we just created.

<figure><img src="../.gitbook/assets/CleanShot 2024-05-21 at 16.42.38@2x.png" alt=""><figcaption></figcaption></figure>

Click the "Launch Workspace Now" button, and you'll be whisked off to your workspace's page! What's happening here? During this stage, we are initializing a [cluster](../references/terminology.md#workspace-cluster) for your user (if one doesn't already exist), deploying the workspace into that cluster, and setting up all of the fun networking bits.

<figure><img src="../.gitbook/assets/CleanShot 2024-05-21 at 16.44.11@2x.png" alt=""><figcaption></figcaption></figure>

<figure><img src="../.gitbook/assets/Launch workspace - from recipe.png" alt=""><figcaption><p>Click "Launch" to create a remote environment</p></figcaption></figure>

<figure><img src="../.gitbook/assets/Workspace details (1).png" alt=""><figcaption><p>A workspace is created</p></figcaption></figure>

### Step 5. Downloading the DevZero CLI

The [DevZero CLI](../references/cli-man-page/), or `dz` for short, is the primary interface for connecting to your workspaces. We've built a simple "one-click" installer script that installs the CLI & prepares you to connect to a workspace. To use the installer, in a terminal window, run the following command:

{% tabs %}
{% tab title="MacOS / Linux" %}
<pre class="language-bash" data-overflow="wrap"><code class="lang-bash"><strong>curl -fsSL https://get.devzero.io | sh
</strong></code></pre>
{% endtab %}

{% tab title="Windows" %}
To run on Windows, the CLI requires [WSL 2](https://learn.microsoft.com/en-us/windows/wsl/install). We **do not** support WSL 1. To verify your WSL version you can run the following from your Command shell or PowerShell:

```
wsl -l -v
```

To update your WSL version, please [follow these instructions](https://learn.microsoft.com/en-us/windows/wsl/install#upgrade-version-from-wsl-1-to-wsl-2).

If you have WSL 2, open a terminal using WSL 2 and run the following command:

```
curl -fsSL https://get.devzero.io | sh
```
{% endtab %}
{% endtabs %}

<figure><img src="../.gitbook/assets/Connect to workspace (1).png" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
**Please be sure to run these two commands after the installer finishes:**

```
sudo dz auth login && sudo dz net connect
```
{% endhint %}

## Step 6. Connecting to your Workspace

Once ready, a button should appear at the top-right, labeled "Connect". Click that drop-down, and you should be presented with three tabs:

<figure><img src="../.gitbook/assets/CleanShot 2024-05-21 at 16.48.14@2x.png" alt=""><figcaption><p>We also support opening workspaces in VS Code, or in the browser. Just in case you don't have an SSH client nearby.</p></figcaption></figure>

Click the "Terminal" tab, and then copy the command at the bottom of the drop-down. Open a new terminal window, paste that command, and you're in! Congratulations, and welcome to the DevZero platform!

<figure><img src="../.gitbook/assets/CleanShot 2024-05-21 at 16.50.11@2x.png" alt=""><figcaption><p>The font is Berkeley Mono, just in case you're interested.</p></figcaption></figure>

## Need help?

If you face any issues, please send an email to [support@devzero.io](mailto:support@devzero.io), or visit [https://devzero.io/dashboard](https://devzero.io/dashboard)and click the "chat" icon in the bottom right-hand side of your browser window. We'd be happy to assist you.

<figure><img src="../.gitbook/assets/Create recipe.gif" alt=""><figcaption><p>Creating a new recipe</p></figcaption></figure>
