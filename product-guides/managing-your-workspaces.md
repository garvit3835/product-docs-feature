# Managing Your Workspaces

Once launched, workspaces remain active so long as there is an active SSH connection or activity occurring within that workspace. After a prolonged period of inactivity, a workspace may be put in hibernation. This is fully stateful and will only add a few seconds to the relaunch time when reassuming that workspace.&#x20;

Your workspace lifecycle should look something like this:&#x20;

1. I need to start some new development work so I launch a workspace from the relevant environment recipe.&#x20;
2. I connect to that workspace and write some code.&#x20;
3. Once that work has been complete, I delete the workspace.

Generally speaking, workspaces are meant to be ephemeral and not long lived, as you can always spin up a fresh workspace in <1 minute. However, you can rest assured that until you choose to manually delete your workspace(s), any changes and state will always be preserved.&#x20;
