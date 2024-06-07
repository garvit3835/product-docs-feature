# JetBrains

## Connect to a workspace

{% tabs %}
{% tab title="Using Jetbrains Gateway" %}
* Сlick **New Connection** under the **SSH** connection provider.

<figure><img src="../../../.gitbook/assets/jetbrains-gateway-connect.png" alt="" width="563"><figcaption><p>Connect using SSH</p></figcaption></figure>

* Create a new connection using username "devzero" and the workspace you want to connect to in host. Then click on **Check Connection and Continue**.

<figure><img src="../../../.gitbook/assets/jetbrains-gateway-host-configuration.png" alt="" width="563"><figcaption><p>Configure SSH connection to your workspace</p></figcaption></figure>

* Select the IDE of your preference and the path of your codebase. Then click on **Download IDE and Connect**.

<figure><img src="../../../.gitbook/assets/jetbrains-gateway-ide-selection.png" alt="" width="563"><figcaption><p>Select your IDE</p></figcaption></figure>

{% hint style="info" %}
The default path for your cloned code is `/home/devzero`
{% endhint %}

* Under **Connections > SSH**, you should see your workspace listed.

<figure><img src="../../../.gitbook/assets/jetbrains-gateway-workspaces.png" alt="" width="563"><figcaption><p>Your workspaces</p></figcaption></figure>


{% endtab %}

{% tab title="Using any Jetbrains IDE" %}
* Create a new project under **Remote Development > SSH**.

<figure><img src="../../../.gitbook/assets/jetbrains-remote-project.png" alt=""><figcaption><p>Connect using SSH </p></figcaption></figure>

* Create a new connection using username "devzero" and the workspace you want to connect to in host. Then click on **Check Connection and Continue**.

<figure><img src="../../../.gitbook/assets/jetbrains-gateway-host-configuration.png" alt="" width="563"><figcaption><p>Configure SSH connection to your workspace</p></figcaption></figure>

* Select the IDE of your preference and the path of your codebase. Then click on **Download IDE and Connect**.

<figure><img src="../../../.gitbook/assets/jetbrains-gateway-ide-selection.png" alt="" width="563"><figcaption><p>Select your IDE</p></figcaption></figure>

{% hint style="info" %}
The default path for your cloned code is `/home/devzero`
{% endhint %}

* Under **Remote Development > SSH**, you should see your workspace listed.

<figure><img src="../../../.gitbook/assets/jetbrains-workspaces.png" alt="" width="563"><figcaption><p>Your workspaces</p></figcaption></figure>


{% endtab %}
{% endtabs %}
