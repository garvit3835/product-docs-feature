# Source Code in Recipes

The repos section of our [Recipe specification](https://docs.devzero.io/product-docs/references/recipe-syntax) is used to clone code. This will use the [permissions of the GitHub application](https://docs.devzero.io/product-docs/admin/permissions) you have connected with DevZero.

To clone one or multiple repos:

{% code %}
```yaml
dev:
    repos:
    - https://github.com/vercel/next.js
    - https://github.com/my-org/my-repo
```
{% endcode %}

<figure><img src="../.gitbook/assets/repos-in-recipe.png" alt=""><figcaption><p>Code block in a recipe</p></figcaption></figure>


<details>
<summary>[advanced] Custom ways of clone code</summary>

This usually applies to cases where you need to use secrets to clone code. To learn more about how to save and use secrets: https://docs.devzero.io/product-docs/recipes/secrets

You can use a `command` block to clone code directly:

{% code overflow="wrap" lineNumbers="true" %}
```yaml
dev:
    commands:
    - command: |-
        git clone https://github.com/vercel/next.js
      directory: /home/devzero
      name: clone public repo

    - command: |-
        # MY_PERSONAL_TOKEN is the key for a secret/environment variable saved at https://www.devzero.io/dashboard/settings/environment-variables#team
        git clone https://$MY_PERSONAL_TOKEN@github.com/vercel/next.js
      directory: /home/devzero
      name: clone private repo using PAT
    
     - command: |-
        # MY_PRIVATE_KEY is the key for secret/environment variable saved at https://www.devzero.io/dashboard/settings/environment-variables#team
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

Some of the use-cases where this is applicable:
- Not using GitHub for source control
- Cannot connect GitHub app to an organization for access control issues
- Want to use [deploy keys](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/managing-deploy-keys), [personal access tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) etc
- Want to use some other authentication methods than the DevZero default
- Wanting to clone your repo to a custom directory
- If there's something else, please drop us a note at [support@devzero.io](mailto:support@devzero.io)

</details>