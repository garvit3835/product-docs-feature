# Create Your First Recipe

A [recipe](https://www.devzero.io/dashboard/workspaces/new) can be thought of as a template for a given environment. This could be an environment for development, testing, QA, or anything you need!

All workspaces are launched from a recipe template, so to start using the platform, you'll need to create a recipe. We offer a few Quickstart examples for common stacks and use cases, which should be visible in your shared recipe library on the web console. Alternatively, you can create a custom recipe to meet your needs better.

Recipes allow you to automate and control all build and runtime steps for your environment. This includes:

* Default region(s) where the environment should be deployed
* Minimum compute resources required to run the environment
* Cloning code repositories
* Installing host or application packages and dependencies
* Executing arbitrary bash commands and scripts
* Networking to shared cloud or 3rd party resources

The recipe creation process begins by denoting the required code bases for a given environment. We can currently import any public or private GitHub repositories. To work with private repositories, please follow the onscreen guidance to install and authorize our GitHub app.

All other recipe customizations are guided by the web UI.

To create a new Recipe, select "Create New" from the top-right navbar at devzero.io/dashboard and select "Create New Recipe"

<figure><img src="../../.gitbook/assets/CleanShot 2024-05-02 at 13.54.26@2x.png" alt=""><figcaption><p>Create New Recipe</p></figcaption></figure>

**Tip:** be sure to provide a helpful recipe name to make it easy for your teammates to understand how and when to use workspaces based on that recipe.
