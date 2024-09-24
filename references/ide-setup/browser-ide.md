---
title: Browser IDE (using code-server)
---
# Browser IDE (using code-server)

There's a [walkthrough video](#walkthrough-video) at the bottom of this page if you want to see how everything looks!

{% code lineNumbers="true" %}
```
version: "3"

build:
  steps:
    - type: apt-get
      packages: ["apt-transport-https", "build-essential", "curl", "git", "nano", "software-properties-common", "ssh", "sudo", "tar", "unzip", "vim", "wget", "zip"]

    # Download and extract the specified version of code-server to the desired location (see https://github.com/coder/code-server/releases)
    - type: command
      command: |
        VERSION=4.92.2  # version of code-server to be installed
        mkdir -p ~/.local/lib/code-server  # directory where code-server will be installed
        # download the code-server tarball and extract its contents to the specified directory
        curl -fL https://github.com/coder/code-server/releases/download/v$VERSION/code-server-$VERSION-linux-amd64.tar.gz | tar -C ~/.local/lib/code-server --strip-components=1 -xz

    # code-server configuration file with specified settings
    - type: file
      path: /home/devzero/.config/code-server/config.yaml  # location of configuration file
      permissions: "0644"  # Set file permissions (read/write for owner, read-only for group and others)
      user: devzero
      group: devzero
      content: |
        bind-addr: 0.0.0.0:7102  # bind code-server to all network interfaces on port 7102
        auth: none  # disable app-level authentication (no password required) since network access has auth already
        cert: false  # disable SSL certificate generation
        app-name: DevZero  # Set the application name displayed in the browser
        disable-getting-started-override: true  # Disable the "Getting Started" page on launch

    # Create the systemd service file to manage code-server as a service
    - type: file
      path: /etc/systemd/system/code-server.service  # Path to the systemd service file
      permissions: "0644"  # Set file permissions (read/write for owner, read-only for group and others)
      user: root  # The owner of the file (root for system-wide services)
      group: root  # The group ownership of the file (root for system-wide services)
      content: |
        [Unit]
        Description=code-server  # Description of the service
        After=network.target  # Ensure the network is up before starting the service

        [Service]
        Type=simple  # Simple service type where the process remains in the foreground
        User=devzero  # Run the service as the 'devzero' user
        Environment="CODE_SERVER_CONFIG=/home/devzero/.config/code-server/config.yaml"  # Specify the path to the config file
        ExecStart=/home/devzero/.local/lib/code-server/bin/code-server  # Command to start code-server
        Restart=always  # Restart the service automatically if it fails

        [Install]
        WantedBy=multi-user.target  # Start the service at boot time in multi-user mode

    # Enable the systemd service to start at boot
    - type: command
      command: |
        systemctl enable code-server  # Enable code-server to start on system boot
      user: root  # Execute the command as the root user
```
{% endcode %}

## Walkthrough Video

{% embed url="https://devzero.b-cdn.net/browser-ide.mp4" %}
