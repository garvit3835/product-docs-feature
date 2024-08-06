# Launch and Connect to Your First Workspace

<figure><img src="../../.gitbook/assets/CleanShot 2024-05-01 at 20.53.52@2x.png" alt=""><figcaption><p>How to launch a workspace</p></figcaption></figure>

Now you've got a Recipe written and built, you can use that Recipe to launch a Workspace using that specification. Simply navigate to the [Recipe Library](https://www.devzero.io/dashboard/recipes) and find the Recipe you need. Then select the `Launch` button to create an environment from that recipe. During the Workspace Launch phase, any of your user preferences, config (shell config, dotfiles, etc), and env variables will all be applied.

Once the Workspace has been deployed, you'll see it running on the [dashboard homepage](https://www.devzero.io/dashboard). From there, select the `Connect` button and connect to the workspace using your preferred method.

Current options for connecting to your workspace include:

1. Via the terminal - `dz ws connect best-gull-psxv`
2. Directing from VS Code - `dz ws code best-gull-psxv`
3. Via Code Server in browser - follow the onscreen instructions

{% hint style="info" %}
**Need to install our CLI?** Follow the instructions here: [CLI Installation](./../../references/cli-man-page/install-the-cli.md)
{% endhint %}

Once you're connected, you can use your Workspace just like any other development or testing environment. Then, when you're done with your work, you should use your remote Git provider to save your changes and you can delete your workspace. The next time you have work requiring that environment, simply launch a fresh Workspace from the related Recipe.
