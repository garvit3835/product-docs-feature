# Help Commands

## dz

{% code overflow="wrap" lineNumbers="true" %}
```bash
% dz -h
Welcome to the DevZero CLI!                                        
                                                                   
This CLI is still under active development. Commands and flags will
change in the future.                                              
                                                                   
Made with <3 in Seattle, WA

Usage:
  dz [command]

Available Commands:
  auth        Authenticate to the DevZero backend
  cli         Control the DevZero CLI.
  completion  Generate the autocompletion script for the specified shell
  docs        Open the DevZero documentation in your browser.
  help        Help about any command
  network     Control your connection to your team's DevZero network.
  workspace   Manage your DevZero workspaces

Flags:
  -h, --help   help for dz
```
{% endcode %}

## dz > workspace

{% code overflow="wrap" lineNumbers="true" %}
```bash
% dz workspace -h
Operate against and manage your workspaces

Usage:
  dz workspace [command]

Aliases:
  workspace, ws

Available Commands:
  code        Open a workspace in VS Code
  config      Configure your workspaces
  connect     Connect to a workspace
  list        List your workspaces, optionally filtering the output by workspace ID / name
  logs        Get logs for a workspace

Flags:
  -h, --help   help for workspace
```
{% endcode %}

## dz > network

{% code overflow="wrap" lineNumbers="true" %}
```bash
% dz network -h 
Control your connection to your team's DevZero network.

Usage:
  dz network [command]

Aliases:
  network, wireguard, wg, net

Available Commands:
  connect     Connect to your team's DevZero network.
  disconnect  Disconnect from your team's mesh network
  ping        Ping a peer on your team's network.
  status      Show the status of your team's DevZero network

Flags:
  -h, --help   help for network
```
{% endcode %}
