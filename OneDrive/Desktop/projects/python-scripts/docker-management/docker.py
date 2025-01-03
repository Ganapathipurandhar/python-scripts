import docker
import argparse
import os

def build_image(dockerfile_path, image_name):
    """Build a Docker image from a Dockerfile."""
    client = docker.from_env()
    try:
        print(f"Building image '{image_name}' from {dockerfile_path}...")
        image, logs = client.images.build(path=dockerfile_path, tag=image_name)
        for log in logs:
            print(log.get('stream', '').strip(), end='')
        print(f"Image '{image_name}' built successfully.")
    except Exception as e:
        print(f"Error building image: {e}")

def start_container(image_name, container_name, ports=None, volumes=None):
    """Start a Docker container."""
    client = docker.from_env()
    try:
        print(f"Starting container '{container_name}' from image '{image_name}'...")
        container = client.containers.run(
            image_name,
            name=container_name,
            ports=ports,
            volumes=volumes,
            detach=True
        )
        print(f"Container '{container_name}' started successfully.")
    except Exception as e:
        print(f"Error starting container: {e}")

def stop_container(container_name):
    """Stop and remove a Docker container."""
    client = docker.from_env()
    try:
        print(f"Stopping container '{container_name}'...")
        container = client.containers.get(container_name)
        container.stop()
        container.remove()
        print(f"Container '{container_name}' stopped and removed successfully.")
    except Exception as e:
        print(f"Error stopping container: {e}")

def list_containers(all_containers=False):
    """List Docker containers."""
    client = docker.from_env()
    try:
        containers = client.containers.list(all=all_containers)
        for container in containers:
            print(f"{container.name}: {container.status}")
    except Exception as e:
        print(f"Error listing containers: {e}")

def clean_unused_resources():
    """Remove unused Docker images and volumes."""
    client = docker.from_env()
    try:
        print("Removing unused images...")
        client.images.prune()
        print("Removing unused volumes...")
        client.volumes.prune()
        print("Unused resources cleaned up.")
    except Exception as e:
        print(f"Error cleaning up resources: {e}")

def main():
    parser = argparse.ArgumentParser(description="Docker Project Management Script")
    subparsers = parser.add_subparsers(dest="command")

    # Build Image
    build_parser = subparsers.add_parser("build", help="Build a Docker image")
    build_parser.add_argument("dockerfile_path", help="Path to the Dockerfile")
    build_parser.add_argument("image_name", help="Name of the Docker image")

    # Start Container
    start_parser = subparsers.add_parser("start", help="Start a Docker container")
    start_parser.add_argument("image_name", help="Name of the Docker image")
    start_parser.add_argument("container_name", help="Name of the Docker container")
    start_parser.add_argument("--ports", nargs='+', help="Ports to expose (e.g., 8080:80)")
    start_parser.add_argument("--volumes", nargs='+', help="Volumes to mount (e.g., /host:/container)")

    # Stop Container
    stop_parser = subparsers.add_parser("stop", help="Stop a Docker container")
    stop_parser.add_argument("container_name", help="Name of the Docker container")

    # List Containers
    list_parser = subparsers.add_parser("list", help="List Docker containers")
    list_parser.add_argument("--all", action="store_true", help="List all containers (default: running containers only)")

    # Clean Resources
    clean_parser = subparsers.add_parser("clean", help="Clean up unused Docker resources")

    args = parser.parse_args()

    if args.command == "build":
        build_image(args.dockerfile_path, args.image_name)
    elif args.command == "start":
        ports = {p.split(':')[0]: p.split(':')[1] for p in args.ports} if args.ports else None
        volumes = {v.split(':')[0]: {'bind': v.split(':')[1], 'mode': 'rw'} for v in args.volumes} if args.volumes else None
        start_container(args.image_name, args.container_name, ports, volumes)
    elif args.command == "stop":
        stop_container(args.container_name)
    elif args.command == "list":
        list_containers(args.all)
    elif args.command == "clean":
        clean_unused_resources()
    else:
        parser.print_help()

if __name__ == "__main__":
    main()