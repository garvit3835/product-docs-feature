# Dart

{% code overflow="wrap" lineNumbers="true" %}
```yaml
dev:
  commands:
    - command: |
        wget https://storage.googleapis.com/dart-archive/channels/stable/release//sdk/dartsdk-linux-x64-release.zip
        sudo unzip -d /usr/local/dart dartsdk-linux-x64-release.zip
        rm -rf dartsdk-linux-x64-release.zip
        echo 'export PATH=$PATH:/usr/local/dart/dart-sdk/bin' | sudo tee -a /etc/profile.d/dart-installation.sh #
        sudo chmod +x /etc/profile.d/dart-installation.sh
      name: buildtime_install_cmd_for_Dart
```
{% endcode %}
