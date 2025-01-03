# Docker management file by python scripts
## Features of the Script:
1) Build Docker images.
2) Start containers with specific configurations.
3) Stop and remove containers.
4) List running and available containers/images.
5) Clean up unused images/volumes

Run Commands:

### Build an image:
~~~
python docker.py build ./path_to_dockerfile my_image
~~~
### Start a container:
~~~
python docker.py start my_image my_container --ports 8080:80 --volumes /host:/container
~~~
### Stop a container:
~~~
python docker.py stop my_container
~~~
### List containers:
~~~
python docker.py list --all
~~~
### Clean up resources:
~~~
python docker.py clean
~~~
* This script provides a foundation for managing Docker projects programmatically. You can further customize it to suit your needs. *