# Go

{% code overflow="wrap" lineNumbers="true" %}
```yaml
version: "3"
build:
  steps:
    - type: apt-get
      packages: ["wget"]
    - type: command
      command: |
        wget https://go.dev/dl/go1.22.2.linux-amd64.tar.gz
        tar -C /usr/local -xzf go1.22.2.linux-amd64.tar.gz
        rm -rf go1.22.2.linux-amd64.tar.gz
        echo 'export GOPATH=/home/devzero/go' | tee /etc/profile.d/go-installation.sh 
        echo 'export PATH=$PATH:/usr/local/go/bin:$GOPATH/bin' | tee -a /etc/profile.d/go-installation.sh
      user: root
```
{% endcode %}
