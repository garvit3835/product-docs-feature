# Secrets

Secrets are used to store and reference sensitive material, that are materially non-public.

These are usually used by:

* operations that are used to access sensitive resources, or
* your applications, either to get built or run

Once a secret is saved, it won't be visible in the UI or CLI. It will be available at build- or launch-time. It will also be available in the running workspaces.

You can access secrets within builds or at launch-time, just like you would access any environment variable. If your secret is called `MY_SECRET_KEY`, to access its value anywhere, use `$MY_SECRET_KEY`. At runtime, you can use the `env` binary to verify that the secrets are present within that context.

All secrets are stored securely within DevZero in an isolated HashiCorp Vault deployment.
