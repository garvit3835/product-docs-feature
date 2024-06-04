# Volume

{% code overflow="wrap" %}
```bash
$ dz storage create volume --region=usw1
{"id":"vol-123"}

$ dz workspace launch recipe-my-uuid --with-volume vol-123
```
{% endcode %}