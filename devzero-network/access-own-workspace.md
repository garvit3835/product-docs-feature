# Access Running Applications

## Access Your Running Application(s)

Make sure you're connected to the DevZero network by running:

```
dz network connect
```

The, find the desired workspace by running:

```
dz network status
```

You will see an output that looks like this:

<figure><img src="../.gitbook/assets/net-status.png" alt=""><figcaption><p>dz network status</p></figcaption></figure>

You can use either the hostname or the IP to make network requests when accessing running applications inside the DevBox.

### Sending network requests to an application inside the DevBox

#### Using cURL

To access an application running inside a DevBox using the **cURL** command, you can send requests to the desired DevBox using the following URL scheme: \<protocol>://\<devbox hostname>:\<port> or the DevBox IP

Example:

```
curl popular-bluejay-yzrt:8080

## OR

curl 100.64.0.202:8080
```

#### In the Browser

To access an application running inside a DevBox in the **Browser**, you can open a URL that follows the scheme: \<protocol>://\<devbox hostname>:\<port> or \<devbox IP>:\<port>

#### Using SSH

To access your DevBox using **ssh**, connect to your DevBox with devzero@\<devbox hostname> or devzero@\<devbox ip> as a credential:

Example:

```
ssh devzero@popular-bluejay-yzrt

## OR

ssh devzero@100.64.0.202
```

### Port forwarding

As long as you're connected to the DevZero network, all the ports available are exposed to your machine **automatically**.

If you're running applications inside Kubernetes, you might need to use the [kubectl](../references/starter-templates/infra/kubectl.md) port-forward command fo forwards to port of the application to your DevBox.

Example:

```
kubectl port-forward <pod> <port>:<target port>
```

### Access Your Team's Running Application(s)

The flow for this is exactly the same as all above.

The only difference is, in order to see your teammate's workspace, add the `--team` flag to the command.

```
dz network status --team
```

The rest of the steps are exactly the same!
