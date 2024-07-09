# Volume

{% code overflow="wrap" %}
```bash
$ dz storage create volume --region=usw1
{"id":"vol-123"}

$ dz workspace launch recipe-my-uuid --with-volume vol-123
```
{% endcode %}

{% code overflow="wrap" %}
```bash
$ dz storage create bucket --region=usw1
{"id":"buck-123", "AWS_ACCESS_KEY_ID":"abc","AWS_SECRET_ACCESS_KEY":"xyz"}

$ dz workspace launch recipe-my-uuid --with-env AWS_ACCESS_KEY_ID=abc --with-env AWS_SECRET_ACCESS_KEY=xyz
```
{% endcode %}
