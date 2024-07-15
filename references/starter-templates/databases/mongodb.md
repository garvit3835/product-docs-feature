# MongoDB

{% code overflow="wrap" lineNumbers="true" %}
```yaml
version: "3"
build:
  steps:
    - type: apt-get
      packages: ["curl", "tar", "unzip", "wget"]
    - type: command
      name: "mongosh"
      command: |
        VERSION=2.2.12
        wget https://downloads.mongodb.com/compass/mongosh-$VERSION-linux-x64.tgz
        tar -zxvf mongosh-$VERSION-linux-x64.tgz
        sudo cp mongosh-$VERSION-linux-x64/bin/mongosh /usr/local/bin/
        rm -rf mongosh-$VERSION-linux-x64*    
    - type: command
      name: "mongodb tools"
      command: |
        VERSION=100.9.5
        wget https://fastdl.mongodb.org/tools/db/mongodb-database-tools-ubuntu2204-x86_64-$VERSION.tgz
        tar -zxvf mongodb-database-tools-ubuntu2204-x86_64-$VERSION.tgz
        sudo cp mongodb-database-tools-ubuntu2204-x86_64-$VERSION/bin/* /usr/local/bin/
        rm -rf mongodb-database-tools-ubuntu2204-x86_64-$VERSION*
```
{% endcode %}
