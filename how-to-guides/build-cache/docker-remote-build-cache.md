# Docker

## Remote build/cache using `DOCKER_HOST`

1. Create a new workspace with Docker installed ([How-to](../../references/starter-templates/build-tools/docker.md)).
2. Make sure you are connected to the DevZero network:

```
dz net connect
```

3. Set `DOCKER_HOST` environment variable on your machine to match the DevBox hostname:

```
export DOCKER_HOST=ssh://devzero@your-devbox-hostname
```

4. Verify the installation by running:

```
docker info
```

When you run the `docker build` command, the build context will be sent to the DevBox and the build process will run.

{% hint style="info" %}
If you're seeing "Host key verification failed" error, try connecting to your DevBox via ssh first to verify the fingerprint.
{% endhint %}

## Remote build using BuildKit

1. Create a new workspace with Docker installed ([How-to](../../references/starter-templates/build-tools/docker.md)).
2. Inside your DevBox, run the BuildKit container:

```
docker run -d --rm --name=remote-buildkitd --privileged -p 1234:1234 moby/buildkit:latest --addr tcp://0.0.0.0:1234
```

See [Remote driver docs](https://docs.docker.com/build/drivers/remote/) for all available options.

3. On your machine, create a new buildx instance:

```
docker buildx create --name remote-container --driver remote tcp://your-devbox-hostname:1234
```

4. Build an image using remote driver (and download it locally):

```
docker buildx build --builder=remote-container -t test --load .
```

## Remote cache using Docker Registry

1. Create a new workspace with Docker installed ([How-to](../../references/starter-templates/build-tools/docker.md)).
2. Inside your DevBox, install the Docker Registry:

```
docker run -d -p 5000:5000 --name registry registry:2
```

See [CNCF Distribution guide](https://distribution.github.io/distribution/) for available options.

3. Make sure your machine is connected to the DevZero network:

```
dz net connect
```

4. Verify you can access the registry from your machine:

```
curl http://your-devbox-hostname:5000/v2/_catalog
```

5. Build and push your image to the registry

**With Docker**:

```
docker build --push -t your-devbox-hostname:5000/<image> .
```

**With BuildKit remote cache (see previous section)**:

```
docker buildx build --push -t your-devbox-hostname:5000/<image> \
  --cache-to type=registry,ref=your-devbox-hostname:5000/<cache-image> \
  --cache-from type=registry,ref=your-devbox-hostname:5000/<cache-image>
```

6. Verify the image is available in the registry:\

```
curl http://your-devbox-hostname:5000/v2/_catalog
```

{% hint style="info" %}
If you're getting "http: server gave HTTP response to HTTPS client", try adding the following to your Docker daemon json configuration:

```
insecure-registries": ["your-devbox-hostname:5000"]
```
{% endhint %}
