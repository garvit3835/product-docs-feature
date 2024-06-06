# Connecting resources to your network

## Add a peer to your DevZero network

1. Get a shell inside the node that you want to add to the network.
2. Install the CLI following [these steps](broken-reference).
3. Run

{% code overflow="wrap" lineNumbers="true" %}
```bash
sudo dz auth login
```
{% endcode %}

4. Add the node to the network by running (_optional_ `--hostname` flag: replace `<some_name>` with a memorable hostname)

{% code overflow="wrap" lineNumbers="true" %}
```bash
sudo dz network connect --hostname=<some_name>
# example: sudo dz net connect --hostname=my-rds-jump-node
```
{% endcode %}

5. Verify that the node is in the network by running

{% code overflow="wrap" lineNumbers="true" %}
```bash
dz network status
```
{% endcode %}

## Advertise routes to your DevZero network

1. Get a shell inside the node that you want to add to the network.
2. Install the CLI following [these steps](broken-reference).
3. Run

{% code overflow="wrap" lineNumbers="true" %}
```bash
sudo dz auth login
```
{% endcode %}

4. Add the node to the network by running (_optional_ `--hostname` flag: replace `<some_name>` with a memorable hostname)

{% code overflow="wrap" lineNumbers="true" %}
```bash
sudo dz network connect --hostname=<some_name> --advertise-routes=<CIDR range>
# example: sudo dz net connect --hostname=my-rds-jump-node --advertise-routes=172.31.0.0/16 
# where the current node is on a VPC w/ CIDR range 172.31.0.0/16 
```
{% endcode %}

5. Verify that the node is in the network by running

{% code overflow="wrap" lineNumbers="true" %}
```bash
dz network status
```
{% endcode %}
