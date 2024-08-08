# Overview

## What is a Workspace

A workspace is the DevZero environment that a developer works in. A workspace consists of a  [cluster](../references/terminology.md#workspace-cluster), a [DevBox](../references/terminology.md#devbox), and all of the underlying infrastructure and resources defined in the workspace's recipe specification. Developers in a team each work from their own workspace, which is generally isolated from another workspace, and can use various IDEs to connect to it. Workspaces are created from a [Recipe](../references/terminology.md#recipe) file - this is to allow for developers to start building their environments from pre-defined golden paths, ensuring identical configuration and provisioning settings.

A workspace can be launched in an available region of the users choice. To learn more about how to deploy your workspaces to specific regions and which regions we currently support, check out  [regions](regions/ "mention")
