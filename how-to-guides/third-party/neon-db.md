---
description: >-
  Using a NeonDB database branch from a DevZero workspace is a very good use
  case for workspaces on dev zero.
---

# Neon DB

## Architecture Diagram

<figure><img src="../../.gitbook/assets/neondb.drawio.png" alt=""><figcaption></figcaption></figure>

## Prerequisites:

Basic knowledge of [Neon DB](https://neon.tech/docs) and [Neon DB branching](https://neon.tech/docs/introduction/branching)

### Creating a Branch <a href="#existing-compute-instance" id="existing-compute-instance"></a>

1. Go to **Your Project > Project Dashboard.**
2. Click on **Branch** ,  create a new branch.
3. Give it a name and select Current point to time to create the branch off the current state of your main database.

<figure><img src="../../.gitbook/assets/Screenshot 2024-08-06 at 14.03.47.png" alt=""><figcaption></figcaption></figure>

Once the branch is created, please copy the connection string and add it  to your [user environment secrets](../../environment-variables/personal.md#saving-an-user-scoped-environment-variable).

