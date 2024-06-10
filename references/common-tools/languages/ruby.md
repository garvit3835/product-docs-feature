# Ruby

{% code overflow="wrap" lineNumbers="true" %}
```yaml
dev:
  commands:
    - command: |-
        sudo apt-get update && sudo apt-get upgrade -y && sudo apt-get install -y tar curl git zlib1g-dev libdb-dev patch libssl-dev libyaml-dev libreadline6-dev libncurses5-dev libgdbm-dev unzip procps autoconf build-essential libffi-dev
        curl -fsSL https://github.com/rbenv/rbenv-installer/raw/HEAD/bin/rbenv-installer | bash
        eval "$(~/.rbenv/bin/rbenv init - bash)" && export PATH="$HOME/.rbenv/bin:$PATH"
        rbenv install 3.3.1
        rbenv global 3.3.1
        sudo apt-get update && sudo apt-get install -y libxml2-dev libxslt1-dev libsqlite3-dev libpq-dev libmysqlclient-dev
        echo 'eval "$(~/.rbenv/bin/rbenv init - bash)"' | sudo tee /etc/profile.d/103-ruby-installation.sh
        echo 'export PATH="$HOME/.rbenv/bin:$PATH"' | sudo tee -a /etc/profile.d/103-ruby-installation.sh
        sudo chmod +x /etc/profile.d/103-ruby-installation.sh
      name: buildtime_install_cmd_for_Ruby
```
{% endcode %}
