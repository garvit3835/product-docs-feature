# Terminology

## ACL

An access control list (ACL) controls platform access using rules in the driven by the team's DevZero settings. ACLs can be used to restrict recipe authors/editors, assign permissions for workspace regions and compute classes (CPU/GPU), control network access, control volume access.

## Dashboard

The dashboard is the central location to view, edit and generally manage your DevZero workspaces. You can manage recipes, users and their permissions, and settings such as environment variables, secrets, etc. The admin console also informs you if updates are needed in any of your recipes and workspaces. When you make changes from the admin console, the DevZero control plane updates changes immediately.

You can access your admin console at [https://devzero.io/dashboard](https://devzero.io/dashboard).

## Continuous Integration (CI)

Continuous Integration (CI) is a software development practice where developers frequently commit code changes to a shared repository, triggering automated builds and tests to ensure new code integrates smoothly and does not introduce errors. This process provides immediate feedback, helping to detect and fix bugs early, improving code quality, and reducing integration issues. By fostering collaborative development and streamlining the release process, CI enables faster and more reliable software delivery. Popular CI tools include Jenkins, Travis CI, CircleCI, GitLab CI, and Bamboo.

## Continuous Delivery (CD)

Continuous Delivery (CD) is a software development practice where code changes are automatically built, tested, and prepared for a release to production, ensuring that the software can be reliably and quickly delivered at any time. This approach involves deploying code to a staging environment where it undergoes further automated tests and manual verifications. The goal is to minimize the risks associated with releasing new features and updates, enabling faster and more frequent delivery of high-quality software to end-users. Continuous Delivery builds on the foundation of Continuous Integration (CI), extending it to ensure that the software is always in a deployable state.

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

### Dev Env

Dev environments are environments representative of a production environment, but with a bunch of other tools that are more tuned for development purposes.

### Staging Env

Staging is a common environment that development teams use to ensure that all merged changes work as expected.

### Pre-production Env

Preproduction (or preprod) is a common environment that's representative of, and ideally a copy of production, that maturing software development teams use to validate complex environments by executing synthetic and load tests against to test for regressions, before merging to production.

### QA/UAT Env

QA or Quality Assurance envs are used by QA teams to validate that all functionalities have been implemented as intended - often, QA work is performed against Staging or Preprod.

UAT or User Acceptance Testing is usually performed by end-(beta-) users to also perform validation work. This can also be performed against Staging or Preprod environments.

## Environment Variables

Environment variables are key-value pairs that are used to configure application settings without hard-coding them into the application's source code. They provide a flexible way to manage configurations for different environments (e.g., development, testing, production) by allowing developers to define variables for database connections, API keys, service endpoints, and other operational parameters.

## Hosting

Hosting refers to the various ways of operating and interacting with the DevZero platform, and workspaces it provisions. DevZero offers a fully-hosted Saas Platform, that can also have dedicated deployments managed by DevZero, as well as fully self-hosted deployments for certain enterprise teams.

## Identity Provider

An identity provider is a method for users to authenticate to DevZero and the DevZero network. Examples of identity providers include BitBucket, GitHub, GitLab, Google, Okta, and Microsoft. DevZero is not an identity provider - it relies on other identity providers for authentication.

### SSO

SSO stands for single sign-on. Single sign-on lets users log in to one site using the identity of another.

## Kubernetes Cluster (ephemeral, namespaced)

## Network

Network is a decentralized VPN strategy that DevZero employs to enable secure access to nodes within that network, over WireGuard. Within the DevZero network, nodes either connect peer-to-peer (using NAT Traversal), or through a relay.

### NAT traversal

NAT traversal is used to connect nodes across the internet through barriers such as firewalls. Usually, internet devices can't talk to each other because of firewals, but NAT traversal is able ot get around this problem by virtue of enabling connections between devices that have outbound connectivity to the internet, and are authorized to talk to each other.

### Relay

Relay is a jump-server (an intermediary server) that passes data between two or more nodes in a network. DevZero network uses Tailscale to use a globally distributed relay server called Designated Encrypted Relay for Packets (DERP). When NAT Traversal fails, nodes connect to each other using the DERP relays.

### DNS

DNS is used to assigned human-readable names for IP addresses. Workspaces in DevZero have internal IPs for components within DevZero's network. The DevZero network utilizes Tailscale's MagicDNS to automatically register memorable hostnames for resources in your team's DevZero network. It also extends and improves DNS functionality. DevZero network runs a DNS resolver (on `100.100.100.100:53`) on all nodes that it's installed in.

### IP Address

An IP address within DevZero's network is a unique IP address assigned to each resource in your team's DevZero network. They are currently of the form `100.x.y.z` (for example, `100.101.102.103`). It stays the same regardless of the Wi-Fi network that you are using to access DevZero. What `127.0.0.1` is for your `localhost`, `100.100.100.100` is for your DevZero network - it is simply a local service.

### Node

A node is a combination of a peer and a DevZero user (that connected the peer to the DevZero network).

### Peer

A peer is another node (or WireGuard endpoint) that your node is trying to talk to. A peer might or might not be in the same domain - if you wish to communicate with a peer in a different domain, you will need to switch your network context.

## Recipe

Recipe defines the underlying infrastructure and how tools are configured for a DevZero workspace. Workspaces are created from recipes. Recipes are specified using YAML.

### Build

Build is a representation of a recipe as an OCI-compatible image. Once a recipe has a build for a certain version, workspaces can be launched from it. This saves every user from having to build their own environments, instead being able to utilize a prebuild. Launch-time steps and other user customizations are handled on a per-workspace basis, and aren't shared in the prebuild.

DevZero transforms a recipe YAML into a Low-Level Build (LLB) definition format before using BuildKit to build the images - this is to enable caching and parallelization during the build process.

### Execution stages

<table data-full-width="false"><thead><tr><th width="215">Term</th><th>Definition</th></tr></thead><tbody><tr><td><strong>Build-time</strong></td><td>Covered by the Build (commonly known as prebuild) stage</td></tr><tr><td><strong>Launch-time</strong></td><td>Executed when a workspace is starting up (by default, not when it restarts)</td></tr><tr><td><strong>Run-time</strong></td><td>When a user is inside the workspace, and does whatever they do</td></tr></tbody></table>

### Recipe Library

Recipe library is a collection of recipes that are built for use by the members of a team.

## Regions

Regions are various cities around the world where DevZero runs workspaces. This is to enable end-users to be as close to compute and data as possible.

## Secrets

Secrets are sensitive materials used to authenticate to other services (eg: git, third-party services, etc).

## Team

Team is a collection of 1+ users on DevZero.

## User

User in DevZero is an entity resource that belongs to a team. They can interact with various components depending on the ACLs that their User entity has access to.

## Volume

Volume is a storage device. It may be used only by one workspace, or can be attached to multiple, in a read-write capacity. It usually shows up on a workspace as a filesystem.

## Ceph

Ceph is a free and open-source software-defined storage platform that provides object storage, block storage, and file storage built on a common distributed cluster foundation.

### Mount

The methodology that's used to enable a workspace to have access to persistent volumes (can be verified by running `mount` in a UNIX shell).

### Persistent Volumes

Persistent volumes are network-backed block devices that are mounted to workspaces. This ensures that changes made inside a workspace are resilient to restarts, etc.

## Workspace

A workspace is the environment that a developer works in, or shares with their colleagues. Developers in a team each work from their own workspace, which is generally isolated from other workspace, and can use various IDEs to connect to it. Workspaces are created from a Recipe file - this is to allow for developers to start building their environments from pre-defined golden paths, ensuring identical configuration and provisioning settings.

## WireGuard

WireGuard is the underlying cryptographic protocol that the DevZero network uses. WireGuard is a registered trademark of Jason A. Donenfeld.

## Tailscale

Tailscale is a provider of a WireGuard-based VPN. DevZero network uses some open-sourced components of Tailscale to enable connectivity over the DevZero network.
