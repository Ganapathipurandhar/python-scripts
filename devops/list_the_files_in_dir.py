import os

def list_files_in_folder(folder_path):
    try:
        return os.listdir(folder_path), None
    except FileNotFoundError:
        return None, "Folder not found"
    except PermissionError:
        return None, "Permission denied"

def main():
    folder_paths = input("Enter a list of folder paths separated by spaces: ").split()
    
    for folder_path in folder_paths:
        files, error_message = list_files_in_folder(folder_path)
        if files:
            print(f"Files in {folder_path}:")
            for file in files:
                print(file)
        else:
            print(f"Error in {folder_path}: {error_message}")

if __name__ == "__main__":
    main()
    # this is highly recommended when we are using modules in the script to avoid unwanted side effects(executing main function, which is not necessary for other code we need only function ) and  and code reusability