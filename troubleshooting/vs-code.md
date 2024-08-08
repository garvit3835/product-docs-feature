# Recipes

<details>

<summary>Error while using `code` in the terminal of a Remote VS Code session</summary>

You are probably reading this because you encountered the following error:

```
code -r my-folder/
Unable to connect to VS Code server: Error in request.
Error: connect ENOENT /tmp/vscode-ipc-73cdc2ea-86d3-4e98-8237-5b535ba16353.sock
    at PipeConnectWrap.afterConnect [as oncomplete] (node:net:1555:16) {
  errno: -2,
  code: 'ENOENT',
  syscall: 'connect',
  address: '/tmp/vscode-ipc-73cdc2ea-86d3-4e98-8237-5b535ba16353.sock'
}
```

This happens because the a variable used by VS Code (called `$VSCODE_IPC_HOOK_CLI`) is referencing the wrong socket file. To fix this, rerun your command like this:

```
VSCODE_IPC_HOOK_CLI=$(lsof | grep /tmp/vscode-ipc | awk '{print $(NF-1)}' | head -n 1) code -r my-folder/
```

\
And that should fix your problem! For more information, see this GitHub issue: https://github.com/microsoft/vscode-remote-release/issues/6997.

</details>

Need help? Reach out to [support@devzero.io](mailto:support@devzero.io)
