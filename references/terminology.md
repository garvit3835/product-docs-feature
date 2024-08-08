# Terminology

## DevZero Terminology

### Build

A build is a representation of a recipe as an OCI-compatible image. Once a recipe has a build for a certain version, workspaces can be launched from it. This saves every user from having to build their own environments and instead leverages a prebuilt environment. Launch-time steps and other user customizations are handled on a per-workspace basis and aren't shared caching in the build layers.

DevZero transforms a [recipe](terminology.md#recipe) YAML into a Low-Level Build (LLB) definition format before using BuildKit to build the images - this is to enable caching and parallelization during the build process.

### Dashboard

The dashboard is the central location to view, edit, and manage your DevZero [workspaces](terminology.md#workspace). You can manage [recipes](terminology.md#recipe), users and their permissions, and settings such as [environment variables](terminology.md#environment-variables), secrets, etc. The admin console also informs you if updates are needed in any of your recipes and workspaces.

### DevBox

A DevBox is a remote container that is part of a DevZero [workspace](terminology.md#workspace). It can be connected to via the DevZero [CLI](terminology.md#cli), [SSH](terminology.md#ssh), or any [IDE](terminology.md#ide) that supports SSH-based connections. You connect to a workspace through the DevBox.

### DevZero Network

The DevZero Network uses a decentralized VPN strategy to enable secure access to [nodes](terminology.md#node) across your team. We accomplish using WireGuard. Within the DevZero network, nodes either connect peer-to-peer (using [NAT Traversal](terminology.md#nat-traversal)), or through a [relay](terminology.md#relay).

### Execution stages

<table data-full-width="false"><thead><tr><th width="178">Term</th><th>Definition</th></tr></thead><tbody><tr><td><strong>Build-time</strong></td><td>Covered by the Build (commonly known as prebuild) stage</td></tr><tr><td><strong>Launch-time</strong></td><td>Executed when a workspace is starting up (by default, not when it restarts)</td></tr><tr><td><strong>Run-time</strong></td><td>When a user is inside the workspace, and does whatever they do</td></tr></tbody></table>

### Recipe

Recipe defines the underlying infrastructure and how tools are configured for a DevZero [workspace](terminology.md#workspace). Workspaces are created from recipes. Recipes are specified using YAML.

### Recipe Library

Recipe library is a collection of recipes that are built for use by the members of a [team](terminology.md#team).

### Regions

Regions are various physical locations around the world where you can run your DevZero [workspaces](terminology.md#workspace). For most use cases, you'll want to use the region closest to your physical location.

### Workspace

A workspace is the DevZero environment that a developer works in. A workspace consists of a [cluster](terminology.md#workspace-cluster), a [DevBox](terminology.md#devbox), and all of the underlying infrastructure and resources defined in the workspace's [recipe](terminology.md#recipe) specification. Developers in a [team](terminology.md#team) each work from their own workspace, which is generally isolated from other workspace, and can use various [IDEs](terminology.md#ide) to connect to it. Workspaces are created from a [Recipe](terminology.md#recipe) file - this is to allow for developers to start building their environments from pre-defined golden paths, ensuring identical configuration and provisioning settings.

### Workspace Cluster

A virtualized Kubernetes cluster that's elastically backed by a varying number of [nodes](terminology.md#node). By default, a DevZero workspace is backed by one Kubernetes cluster, with a [DevBox](terminology.md#devbox) deployed to the `default` namespace. Each Workspace Cluster is ephemeral and fully namespaced; clusters are automatically provisioned at workspace launch time as needed.

### Team

A team is the parent-most organizational unit for users within the DevZero ecosystem (oftentimes your company or organization). Users may only belong to one (1) team. Switching teams requires a team admin to reach out to [support@devzero.io](mailto:support@devzero.io).

***

## General Terminology

### ACL

An access control list (ACL) controls platform access using rules in the driven by the team's DevZero settings. ACLs can be used to restrict recipe authors/editors, assign permissions for workspace regions and compute classes (CPU/GPU), control network access, control volume access.

### Continuous Integration (CI

Continuous Integration (CI) is a software development practice where developers frequently commit code changes to a shared repository, triggering automated builds and tests to ensure new code integrates smoothly and does not introduce errors. This process provides immediate feedback, helping to detect and fix bugs early, improving code quality, and reducing integration issues. By fostering collaborative development and streamlining the release process, CI enables faster and more reliable software delivery. Popular CI tools include Jenkins, Travis CI, CircleCI, GitLab CI, and Bamboo.

### Continuous Delivery (CD

Continuous Delivery (CD) is a software development practice where code changes are automatically built, tested, and prepared for a release to production, ensuring that the software can be reliably and quickly delivered at any time. This approach involves deploying code to a staging environment where it undergoes further automated tests and manual verifications. The goal is to minimize the risks associated with releasing new features and updates, enabling faster and more frequent delivery of high-quality software to end-users. Continuous Delivery builds on the foundation of Continuous Integration (CI), extending it to ensure that the software is always in a deployable state.

### CLI

CLI stands for command-line interface. The DevZero CLI includes a robust set of commands with functionality that dashboard web application might not have. The DevZero CLI (and some supporting daemons) is installed automatically when you install DevZero on Linux, macOS, or (in a limited capacity, on) Windows.

### DNS

DNS is used to assigned human-readable names for IP addresses. Workspaces in DevZero have internal IPs for components within DevZero's network. The DevZero network utilizes Tailscale's MagicDNS to automatically register memorable hostnames for resources in your team's DevZero network. It also extends and improves DNS functionality. DevZero network runs a DNS resolver (on `100.100.100.100:53`) on all nodes that it's installed in.

### Environments

Environment refers to a user-defined collection of resources (see Recipe) that hosts one or many applications. An environment is the mechanism for bringing together components that comes together to make an end-user facing software product. Environments are typically modeled on some stage of the software project lifecycle, such as development, QA, staging, pre-production or production.

### Environment Variables

Environment variables are key-value pairs that are used to configure application settings without hard-coding them into the application's source code. They provide a flexible way to manage configurations for different environments (e.g., development, testing, production) by allowing developers to define variables for database connections, API keys, service endpoints, and other operational parameters. {Add stuff on how to use env vars for secrets}

### IDE

IDE stands for integrated development environment. It combines capabilities such as source code editing, building, testing and debugging.

### Identity Provider

An identity provider is a method for users to authenticate to DevZero and the DevZero network. Examples of identity providers include BitBucket, GitHub, GitLab, Google, Okta, and Microsoft. DevZero is not an identity provider - it relies on other identity providers for authentication.

### IP Address

An IP address within DevZero's network is a unique IP address assigned to each resource in your team's DevZero network. They are currently of the form `100.x.y.z` (for example, `100.101.102.103`). It stays the same regardless of the Wi-Fi network that you are using to access DevZero. What `127.0.0.1` is for your `localhost`, `100.100.100.100` is for your DevZero network - it is simply a local service.

### NAT traversal

NAT traversal is used to connect nodes across the internet through barriers such as firewalls. Usually, internet devices can't talk to each other because of firewals, but NAT traversal is able ot get around this problem by virtue of enabling connections between devices that have outbound connectivity to the internet, and are authorized to talk to each other.

### Node

A node is a combination of a [peer](terminology.md#peer) and a DevZero user (that connected the peer to the DevZero network).

### Peer

A peer is another node (or WireGuard endpoint) that your node is trying to talk to. A peer might or might not be in the same domain - if you wish to communicate with a peer in a different domain, you will need to switch your network context.

### Relay

Relay is a jump-server (an intermediary server) that passes data between two or more nodes in a network. DevZero network uses Tailscale to use a globally distributed relay server called Designated Encrypted Relay for Packets (DERP). When NAT Traversal fails, nodes connect to each other using the DERP relays.

### SSH

SSH stands for the Secure Shell protocol. It is used to set up encrypted connections for remote logins and file transfers between computers. SSH also enables tunneling.

### WireGuard

<!-- markdown-link-check-disable-next-line -->
WireGuard is the underlying cryptographic protocol that the DevZero network uses. WireGuard is a registered trademark of [Jason A. Donenfeld](https://www.wireguard.com).

### Tailscale

Tailscale is a provider of a WireGuard-based VPN. DevZero network uses some open-sourced components of Tailscale to enable connectivity over the DevZero network.
