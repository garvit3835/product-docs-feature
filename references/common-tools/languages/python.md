# Python

{% code overflow="wrap" lineNumbers="true" %}
```yaml
dev:
  commands:
    - command: sudo apt-get update && sudo apt-get upgrade -y && sudo apt-get install -y unzip tar curl
      name: install_base_packages
    
    - command: |-
        sudo apt-get update
        sudo apt-get install -y software-properties-common
        sudo apt-add-repository --yes --update ppa:deadsnakes/ppa
        sudo apt-get update
        sudo DEBIAN_FRONTEND=noninteractive apt-get install -y python3.8 python3.8-venv libpython3.8-dev libpq-dev
      name: buildtime_install_cmd_for_python
    - command: |-
        python3.8 -m venv venv
        . venv/bin/activate
        curl https://bootstrap.pypa.io/get-pip.py --output get-pip.py
        python get-pip.py
        rm get-pip.py
      name: buildtime_venv_setup_cmd_for_python
```
{% endcode %}
