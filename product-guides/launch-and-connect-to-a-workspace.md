# Launch & Connect to a Workspace

<figure><img src="../.gitbook/assets/CleanShot 2024-05-01 at 20.53.52@2x (1).png" alt=""><figcaption><p>Launch a workspace</p></figcaption></figure>

You can launch a workspace based on any recipe template that you have access to. Navigate to the recipes tab and find the recipe you'd like to use as the baseline for your environment. Next, click the 'Launch' button to build an environment based on that recipe template.

Prior to launching a workspace, there are a few things you can control to ensure your optimal developer experience. Workspaces automatically launch in your default region. However, you can override this at launch time if desired. You can also set things like shell config, dotfiles, and other user-specific customizations. Default region and all user customization options can be found in your user settings menu.

While a workspace is building, you'll see realtime logs of the build process, including the installations of all host and application packages, any build commands or scripts provided in the recipe, as well as any runtime commands and scripts as provided in the recipe. These logs can be used to troubleshoot any issues with the workspace-building process. Often, the errors seen here require updates to the underlying recipe template.

Once your workspace has finished building, a 'Connect' button will be enabled. We currently have two different ways for you to connect to the workspace, both requiring installing the DevZero CLI ([Guide](./../references/cli-man-page/install-the-cli.md)).

Current options for connecting to your workspace include:

1. Via the terminal - `dz ws connect best-gull-psxv`
2. Directing from VS Code - `dz ws code best-gull-psxv`
3. Via Code Server in browser - follow the onscreen instructions

{% hint style="info" %}
If you're having trouble launching or connecting to your workspace, we're here to help! Please reach out to support@devzero.io
{% endhint %}
