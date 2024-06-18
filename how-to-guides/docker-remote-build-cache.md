# Docker remote build/cache

### Remote build on a DevBox

1. Create a new workspace with Docker installed ([How-to](../references/common-tools/build-tools/docker.md)).
2. Make sure your machine is connected to the DevZero network:\
   `dz net connect`
3. Set `DOCKER_HOST` environment variable on your machine to match the DevBox hostname:\
   `export DOCKER_HOST=ssh://devzero@your-devbox-hostname`
4.  Verify the installation by running:

    `docker info`

When you run a `docker build` command, the build context will be sent to the DevBox and the build process will run.

{% hint style="info" %}
If you're seeing "Host key verification failed" error, try connecting to your DevBox via ssh to verify the fingerprint.
{% endhint %}

### Remote cache on a DevBox

1. Create a new workspace with Docker installed ([How-to](../references/common-tools/build-tools/docker.md)).
2. Install the Docker Registry image inside your DevBox\
   `docker run -d -p 5000:5000 --name registry registry:2`\
   See [CNCF Distribution guide](https://distribution.github.io/distribution/) for all available options.
3. Make sure your machine is connected to the DevZero network:\
   `dz net connect`
4. Verify you can access the registry from your machine:\
   `curl http://your-devbox-hostname:5000/v2/_catalog`
5. Tag and push your image to the registry:\
   `docker build --push -t your-devbox-hostname:5000/<image> .`
6. Verify the image has been pushed to and cached on the machine:\
   `curl http://your-devbox-hostname:5000/v2/_catalog`

{% hint style="info" %}
If you're getting "http: server gave HTTP response to HTTPS client", try adding the followign to your Docker daemon json configuration:\
\
`insecure-registries": ["your-devbox-hostname:5000"]`
{% endhint %}
