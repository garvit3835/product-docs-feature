# Postgres

{% code lineNumbers="true" %}
```yaml
version: "3"
build:
  steps:
    - type: apt-get
      packages: ["curl", "tar", "unzip"]
    - type: apt-get
      name: "postgres tools"
      packages: ["postgresql-16"]
      extra_repositories:
      - key_url: https://www.postgresql.org/media/keys/ACCC4CF8.asc
        repository: http://apt.postgresql.org/pub/repos/apt
        distribution: jammy-pgdg
        components: ["main"]

launch:
  steps:
    - type: command
      command: |
        systemctl start postgresql.service
        echo 'postgres     ALL=NOPASSWD: ALL' | sudo tee /etc/sudoers.d/100-postgres
        sudo -u postgres bash -c "psql -c \"CREATE USER pguser WITH PASSWORD 'test1234';\""
        sudo -u postgres createdb testdb -O pguser
      directory: /home/devzero
      user: root
```
{% endcode %}
