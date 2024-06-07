# PHP

{% code overflow="wrap" lineNumbers="true" %}
```yaml
dev:
  commands:
    - command: |-
        sudo apt-get update && sudo apt-get upgrade && sudo apt-get install -y openssl libxml2-dev sqlite3 libsqlite3-dev
        wget https://www.php.net/distributions/php-7.4.33.tar.gz
        tar -C /home/devzero -xzf php-7.4.33.tar.gz
        cd /home/devzero/php-7.4.33 && ./buildconf && ./configure --with-openssl --with-zlib
        cd /home/devzero/php-7.4.33 && make -j 4
        cd /home/devzero/php-7.4.33 && sudo make install
        rm php-7.4.33.tar.gz
      name: buildtime_install_cmd_for_PHP
```
{% endcode %}
