# Cloning Source Code

The repos block of our [recipe specification](syntax.md#git-clone) is used to clone code. This will use the [permissions of the GitHub application](https://docs.devzero.io/product-docs/admin/permissions) you have connected with DevZero.

To clone one or multiple repos:

```yaml
version: "3"
build:
  steps:
    - type: apt-get
      packages: ["git"]
    - type: git-clone
      url: https://github.com/my-org/my-repo
    - type: git-clone
      url: https://github.com/vercel/next.js
```

<figure><img src="../.gitbook/assets/repos-in-recipe.png" alt=""><figcaption><p>Code block in a recipe</p></figcaption></figure>

<details>

<summary>Advanced Methods of Code Cloning</summary>

This usually applies to cases where you need to use secrets to clone code. To learn more about how to save and use secrets: [Secrets](./../environment-variables/secrets.md)

You can use a [`command`](syntax.md#command) block to clone code directly:

{% code lineNumbers="true" %}
```yaml
dev:
    commands:
    - command: |-
        git clone https://github.com/vercel/next.js
      directory: /home/devzero
      name: clone public repo

    - command: |-
        # MY_PERSONAL_TOKEN is the key for a secret/environment variable saved at https://www.devzero.io/dashboard/environment-variables/team
        git clone https://$MY_PERSONAL_TOKEN@github.com/vercel/next.js
      directory: /home/devzero
      name: clone private repo using PAT

     - command: |-
        # MY_PRIVATE_KEY is the key for secret/environment variable saved at https://www.devzero.io/dashboard/environment-variables/team
        # The value for that should be the private key part of what you saved as a deploy key: https://docs.github.com/en/authentication/connecting-to-github-with-ssh/managing-deploy-keys

        mkdir -p .ssh
        echo "-----BEGIN OPENSSH PRIVATE KEY-----" >> .ssh/devzero_id25519
        echo $MY_PRIVATE_KEY >> .ssh/devzero_id25519
        echo "-----END OPENSSH PRIVATE KEY-----" >> .ssh/devzero_id25519
        chmod 400 .ssh/devzero_id25519

        GIT_SSH_COMMAND='ssh -o IdentitiesOnly=yes -o StrictHostKeyChecking=accept-new -i /home/devzero/.ssh/devzero_id25519' git clone git@github.com:my-org/my-repo.git
      directory: /home/devzero
      name: clone private repo over ssh using a deploy key
```
{% endcode %}

Some of the use cases where this is applicable:

* You're not using GitHub for source control
* You cannot authorize the GitHub app due to access control issues
* You need to use [deploy keys](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/managing-deploy-keys), [personal access tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens), etc.
* You need to use some other authentication methods than the DevZero default
* You want to clone your repo to a custom directory
* If there's something else you don't see supported, please drop us a note at [support@devzero.io](mailto:support@devzero.io)

</details>

<details>

<summary>Accessing Code From Bitbucket</summary>

## Step 1. Go to your repo page on the Bitbucket website

<img src="../.gitbook/assets/bitbucket-repo.png" alt="Bitbucket Repo" data-size="original">

## Step 2. Go to the `Access Keys` section

<img src="../.gitbook/assets/bitbucket-access-keys.png" alt="Bitbucket Access Keys" data-size="original">

## Step 3(a). Generate keys

{% code %}
```
ssh-keygen -t ed25519 -C "devzero-user@my-website.com" -f devzero_id25519 -P '' -q
```
{% endcode %}

## Step 3(b). Add the public key to your Bitbucket repo's access keys

First, copy the public key

{% code %}
```
cat ~/.ssh/devzero_id25519.pub | pbcopy
```
{% endcode %}

Then, paste it in the `Key` section in the pop-up box.

<img src="../.gitbook/assets/bitbucket-add-access-key.png" alt="Bitbucket Add Access Keys" data-size="original">

## Step 3(c). Add the private key to DevZero

Check the private key

<img src="../.gitbook/assets/private-key-full.png" alt="New private key" data-size="original">

Copy it

{% code %}
```
cat ~/.ssh/devzero_id25519 | pbcopy
```
{% endcode %}

Then paste it into your team's secrets section at [https://www.devzero.io/dashboard/environment-variables/team](https://www.devzero.io/dashboard/environment-variables/team)

Call it `BITBUCKET_PVT_KEY` (or whatever you please, but this is referenced in Step 4)

<img src="../.gitbook/assets/bitbucket-pvt-key-dz.png" alt="Add private key to DevZero" data-size="original">

## Step 4. Build a recipe

Create a recipe and add a block that looks like the one below (check `line 5` to ensure naming).

{% code %}
```yaml
dev:
  commands:
    - command: |-
        mkdir -p .ssh
        printf "%s" "$BITBUCKET_PVT_KEY" >> .ssh/devzero_id25519
        sed -i 's/^"//; s/"$//' .ssh/devzero_id25519
        chmod 400 .ssh/devzero_id25519
        GIT_SSH_COMMAND='ssh -o IdentitiesOnly=yes -o StrictHostKeyChecking=accept-new -i /home/devzero/.ssh/devzero_id25519' git clone git@bitbucket.org:devzero-inc/demo-repo-pvt.git
      dir: .
      name: clone_from_bitbucket
```
{% endcode %}

## Step 5. Launch a workspace from that recipe

Visit your recipes pages here [https://www.devzero.io/dashboard/recipes](https://www.devzero.io/dashboard/recipes), and launch a workspace from that new recipe!

</details>
