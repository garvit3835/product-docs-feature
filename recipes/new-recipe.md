# Creating a Recipe

{% hint style="info" %}
At the moment, the only interface for creating a recipe is our Web UI. We plan to add this functionality to our CLI soon.
{% endhint %}

## Creating a Recipe in the Web UI



{% embed url="https://devzero.b-cdn.net/New%20onboarding2.mp4" %}
Create a new recipe
{% endembed %}

1. A recipe always starts from a repository. To get started, first visit the [DevZero Console](https://devzero.io/dashboard).
2. Create a recipe by clicking `Create New` (top-right) >> `Create New Recipe`. This will take you to the [new repo](https://www.devzero.io/dashboard/new/repo) page.
3. Either start typing the name of a private repo or paste the URL of any public GitHub repo (eg: [https://github.com/facebook/react](https://github.com/facebook/react)).

{% hint style="info" %}
If you're not using GitHub, check out this section on [custom cloning source code](code.md#advanced-custom-ways-of-clone-code).
{% endhint %}

4. Modify your recipe, then click `Save` (top-right).
5. Give the recipe a name and description (so you can find it later!), **check the toggle** for team recipe if you want to share the recipe (more info [here](saving-recipes.md)), and save it!
6. The initial build process might take a few minutes, depending on the repo and its dependencies. We expose the logs during the build process in case you need to troubleshoot anything. Once done, the status next to the recipe name will turn green, and "Launch Workspace Now" will be enabled.

<figure><img src="../.gitbook/assets/successful build.png" alt=""><figcaption><p>Build completed</p></figcaption></figure>

{% hint style="info" %}
You can learn more about getting workspaces from recipes in the [Workspace Overview](../workspaces/overview.md) page.
{% endhint %}
