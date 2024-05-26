# Update dz

A single CLI (called `dz`) is used to interact with DevZero control plane. Check out the [CLI main page](../../references/cli-man-page.md) for DevZero CLI options or use. Use&#x20;

```python
localhost % dz version
```

&#x20;to check the version of your CLI and&#x20;

```python
localhost % dz update
```

&#x20;to update your CLI. You can simple use the following command to get help

```
localhost % dz 
```

```
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
shanishoham@Shanis-MacBook-Air-2 frontend % clear

shanishoham@Shanis-MacBook-Air-2 frontend % dz
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
