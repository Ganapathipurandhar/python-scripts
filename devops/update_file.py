import fileinput

def update_server_config(file_path, key, value):
    with fileinput.input(file_path, inplace=True, backup='.bak') as file:
        for line in file:
            print(f"{key}={value}") if line.strip().startswith(f"{key}=") else print(line, end="")

# Path to the server configuration file
server_config_file = 'server.conf'

# Key and new value for updating the server configuration
key_to_update = 'MAX_CONNECTIONS'
new_value = '600'  # New maximum connections allowed

# Update the server configuration file
update_server_config(server_config_file, key_to_update, new_value)
