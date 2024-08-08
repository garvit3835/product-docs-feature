# Updating the CLI

A single CLI (called `dz`) is used to interact with DevZero control plane. Check out the [CLI main page](../../references/cli-man-page/) for DevZero CLI options or use.

To check the currently installed version of your CLI, run:

```python
dz version
```

To update your CLI, run (might require `sudo`!):

```python
dz update
```

To see the manpage for the CLI (with all the commands), run
```
dz -h
```

```
For help on subcommands, add --help after: "dz workspace --help".
	This CLI is still under active development. Commands and flags will
	change in the future.

Usage:
  dz [command]

Available Commands:
  completion            Generate shell completion scripts
  docs                  Open the DevZero documentation in your browser.
  help                  Help about any command
  init                  sudo dz init | Setup DevZero CLI
  license               View licenses for dz ctl
  login                 Log in to DevZero (wireguard initialization not covered).
  logout                Log out of DevZero (wireguard uninitialization not covered).
  me                    Show information about the current user
  token                 Manage personal tokens
  uninstall             sudo uninstall
  update                Update this CLI
  version               Print the version of the CLI
  wireguard             Connectivity to wireguard mesh network (Tailscale calls this a tailnet) [alias: wg]
  workspace             Manage workspaces [alias: ws]

Flags:
      --backend-url string   URL of the backend to use (default "https://api.devzero.io")
  -h, --help                 help for dz
      --socket string        path to tailscaled socket (default "/var/run/tailscaled-managed-by-devzero.socket")
      --statedir string      path to dir tailscaled uses to store state and tmp files (default "/Users/shanishoham/.local/share/tailscale/tailscaled-managed-by-devzero.state")
      --verbose              Get detailed output

Use "dz [command] --help" for more information about a command.
```
