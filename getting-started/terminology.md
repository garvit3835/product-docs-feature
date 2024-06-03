# Terminology & Concepts

## ACL

An access control list (ACL) controls platform access using rules in the driven by the team's DevZero settings. ACLs can be used to restrict recipe authors/editors, assign permissions for workspace regions and compute classes (CPU/GPU), control network access, control volume access.

## Dashboard

The dashboard is the central location to view, edit and generally manage your DevZero workspaces. You can manage recipes, users and their permissions, and settings such as environment variables, secrets, etc. The admin console also informs you if updates are needed in any of your recipes and workspaces. When you make changes from the admin console, the DevZero control plane updates changes immediately.

You can access your admin console at https://devzero.io/dashboard.

## CI

## CD

## Devbox

A devbox is a remote container or VM that is part of a DevZero workspace. It can be connected to via the DevZero CLI, SSH, or any IDE that supports SSH-based connections.

### CLI

CLI stands for command-line interface. The DevZero CLI includes a robust set of commands with functionality that dashboard web application might not have. The DevZero CLI (and some supporting daemons) is installed automatically when you install DevZero on Linux, macOS, or (in a limited capacity, on) Windows.

### IDE

IDE stands for integrated development environment. It combines capabilities such as source code editing, building, testing and debugging.

### SSH

SSH stands for the Secure Shell protocol. It is used to set up encrypted connections for remote logins and file transfers between computers. SSH also enables tunneling.

## Environments

Environment refers to a user-defined collection of resources (see Recipe) that hosts one or many applications. An environment is the mechanism for bringing together components that comes together to make an end-user facing software product. Environments are typically modeled on some stage of the software project lifecycle, such as development, QA, staging, pre-production or production.

### Dev/Staging/.. Env

### QA/UAT Env

## Environment Variables

## Hosting

## Identity Provider

An identity provider is a method for users to authenticate to DevZero and the DevZero network. Examples of identity providers include BitBucket, GitHub, GitLab, Google, Okta, and Microsoft. DevZero is not an identity provider - it relies on other identity providers for authentication.

### SSO

SSO stands for single sign-on. Single sign-on lets users log in to one site using the identity of another.

## Kubernetes Cluster (ephemeral, namespaced)

## Network

### DNS

DNS is used to assigned human-readable names for IP addresses. Workspaces in DevZero have internal IPs for components within DevZero's network. The DevZero network utilizes Tailscale's MagicDNS to automatically register memorable hostnames for resources in your team's DevZero network. It also extends and improves DNS functionality.
DevZero network runs a DNS resolver (on `100.100.100.100:53`) on all nodes that it's installed in.

### IP Address

An IP address within DevZero's network is a unique IP address assigned to each resource in your team's DevZero network. They are currently of the form `100.x.y.z` (for example, `100.101.102.103`). It stays the same regardless of the Wi-Fi network that you are using to access DevZero. What `127.0.0.1` is for your `localhost`, `100.100.100.100` is for your DevZero network - it is simply a local service.

### Peer

A peer is another node (or WireGuard endpoint) that your node is trying to talk to. A peer might or might not be in the same domain - if you wish to communicate with a peer in a different domain, you will need to switch your network context.

## Recipe



### Build
mention Buildkit

### Execution stages
<table data-full-width="false">
    <thead>
        <tr>
            <th width="215">Term</th>
            <th>Definition</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>Build-time</strong></td>
            <td></td>
        </tr>
        <tr>
            <td><strong>Launch-time</strong></td>
            <td></td>
        </tr>
        <tr>
            <td><strong>Run-time</strong></td>
            <td></td>
        </tr>
    </tbody>
</table>


### Recipe Library

## Regions

## Secrets

## Team

## User

## Volume

## Ceph

Ceph is a free and open-source software-defined storage platform that provides object storage, block storage, and file storage built on a common distributed cluster foundation.

### Mount

### Persistent Volumes

## Workspace

## WireGuard

WireGuard is the underlying cryptographic protocol that the DevZero network uses. WireGuard is a registered trademark of Jason A. Donenfeld.

## Tailscale

Tailscale is a provider of a WireGuard-based VPN. DevZero network uses some open-sourced components of Tailscale to enable connectivity over the DevZero network. 


