# Unsupported Operating Systems

If you happen to be running a bespoke version of Linux, or otherwise have an unsupported configuration (i.e. where you don't have sudo access), we got your back! We offer support on a best-effort basis for most Linux distributions, using statically-compiled binaries.

It's important to note that, as you're deviating from the "happy path", you'll need to run some extra commands in order to get DevZero working. If you'd like assistance with this, please contact us at support@devzero.io and we'd be happy to guide you through these steps.

We generally support most ARM64 / AMD64 Linux systems. If you're running - say, a SPARC machine, I'm sorry to inform you that we don't support that at this time.

## 1. Download the tarball

For the `stable` release track (this is most likely what you want), click the respective link for your CPU architecture.

* [ARM64](https://get.devzero.io/stable/linux-arm64/dz.tar.gz) - less common (Raspberry Pi, etc)
* [AMD64](https://get.devzero.io/stable/linux-amd64/dz.tar.gz) - more common

If you're feeling adventurous, these links are for the `latest` release track, which has potentially unstable updates that are pushed more frequently.

* [ARM64](https://get.devzero.io/latest/linux-arm64/dz.tar.gz) - less common (Raspberry Pi, etc)
* [AMD64](https://get.devzero.io/latest/linux-amd64/dz.tar.gz) - more common

## 2. Unpack the tarball

```
tar xvf dz.tar.gz
```
This should produce one file, called `dzcmd`. Move `dzcmd` to a location under `$PATH` or execute it directly.

## 3. Create symlinks

```
ln -s dzcmd dz
ln -s dzcmd dznetd
```

## 4. Start dznetd

```
sudo ./dznetd
```

## 5. Connect to your team's network

```
sudo ./dz net connect
```

## 6. Success

You're connected! You can now connect to your workspaces via `dz workspace connect`. Have fun!
