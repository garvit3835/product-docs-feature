
# Alternative Installation Steps

If you happen to be running an unsupported configuration (i.e. where you don't have sudo access), we got your back! We offer support on a best-effort basis for most Linux distributions & macOS versions, via statically-compiled binaries.

{% hint style="info" %}
As you're deviating from the "happy path", you'll need to run some extra commands in order to get the DevZero CLI working on your machine. If you'd like assistance with this, please contact us at support@devzero.io and we'd be happy to guide you through these steps.
{% endhint %}

We generally support most arm64 / amd64 Linux systems, as well as Apple Silicon & Intel macOS systems. If you're running - say, a SPARC / RISC-V machine, we don't support that at this time.

## 1. Download the tarball

{% tabs %}
{% tab title="Linux" %}
For the `stable` release track (this is most likely what you want), click the respective link for your CPU architecture.

* [amd64](https://get.devzero.io/stable/linux-amd64/dz.tar.gz) - more common

* [arm64](https://get.devzero.io/stable/linux-arm64/dz.tar.gz) - less common (Raspberry Pi, etc)

If you're feeling adventurous, these links are for the `latest` release track, which has potentially unstable updates that are pushed more frequently.

* [amd64](https://get.devzero.io/latest/linux-amd64/dz.tar.gz) - more common

* [arm64](https://get.devzero.io/latest/linux-arm64/dz.tar.gz) - less common (Raspberry Pi, etc)

{% endtab %}
{% tab title="macOS" %}
For the `stable` release track (this is most likely what you want), click the respective link for your CPU architecture.

* [Intel](https://get.devzero.io/stable/darwin-amd64/dz.tar.gz) - more common

* [Apple Silicon](https://get.devzero.io/stable/darwin-arm64/dz.tar.gz) - less common (Raspberry Pi, etc)

If you're feeling adventurous, these links are for the `latest` release track, which has potentially unstable updates that are pushed more frequently.

* [Intel](https://get.devzero.io/latest/darwin-amd64/dz.tar.gz) - more common

* [Apple Silicon](https://get.devzero.io/latest/darwin-arm64/dz.tar.gz) - less common (Raspberry Pi, etc)

{% endtab %}
{% endtabs %}

## 2. Unpack the tarball

{% code %}
```
tar xvf dz.tar.gz
```
{% endcode %}

This should produce one file, called `dzcmd`.

## 3. Create symlinks

{% code %}
```
ln -s dzcmd dz
ln -s dzcmd dznetd
```
{% endcode %}

## 4. Start dznetd

{% code %}
```
sudo ./dznetd
```
{% endcode %}

## 5. Connect to your team's network

{% code %}
```
sudo ./dz net connect
```
{% endcode %}

## 6. Success

You're connected! You can now connect to your workspaces via `./dz workspace connect`. Have fun!
