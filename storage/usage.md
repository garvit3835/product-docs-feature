# Volume

{% code %}
```
$ dz storage volume create --region=usw1
{"id":"vol-123"}

$ dz workspace launch recipe-my-uuid --with-volume vol-123 --region us-west-1
```
{% endcode %}

{% code %}
```
$ dz storage volume list
[{"id":"vol-123", "region":"usw1", "created_at":"2024-06-26", "size":"20"}]
```
{% endcode %}

{% code %}
```
$ dz storage create bucket --region=usw1
{"id":"buck-123", "AWS_ACCESS_KEY_ID":"abc","AWS_SECRET_ACCESS_KEY":"xyz"}

$ dz workspace launch recipe-my-uuid --with-env AWS_ACCESS_KEY_ID=abc --with-env AWS_SECRET_ACCESS_KEY=xyz
```
{% endcode %}
