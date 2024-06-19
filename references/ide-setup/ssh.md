# SSH

First, get the name of the workspace that you want to connect VS Code to...

{% code overflow="wrap" %}
```bash
# to get the workspace name
dz workspace ls
```
{% endcode %}

Then, run ...

{% code overflow="wrap" %}
```bash
dz workspace connect <workspace-name>

# if your workspace is called absconding-rhino-mega
dz workspace connect absconding-rhino-mega
```
{% endcode %}

Or if you prefer you can connect via SSH client

{% code overflow="wrap" %}
```bash
# if your workspace is called absconding-rhino-mega
ssh devzero@absconding-rhino-mega
```
{% endcode %}
