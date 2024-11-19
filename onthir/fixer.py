import os
import sys

def validate_django_structure(base_dir):
    """Validate the structure of a Django project."""
    errors = []
    
    # Required root files
    required_root_files = ['manage.py', 'requirements.txt']
    for file in required_root_files:
        if not os.path.exists(os.path.join(base_dir, file)):
            errors.append(f"Missing required file: {file}")
    
    # Required directories
    required_dirs = ['templates', 'static', 'media']
    for directory in required_dirs:
        if not os.path.exists(os.path.join(base_dir, directory)):
            print(f"Warning: Missing optional directory: {directory}")
    
    # Check for settings module
    project_dirs = [d for d in os.listdir(base_dir) if os.path.isdir(os.path.join(base_dir, d)) and not d.startswith('.')]
    settings_found = False
    for project_dir in project_dirs:
        settings_path = os.path.join(base_dir, project_dir, 'settings.py')
        if os.path.exists(settings_path):
            settings_found = True
            break
    if not settings_found:
        errors.append("Missing `settings.py` in project directory.")
    
    # Validate apps
    apps = [d for d in os.listdir(base_dir) if os.path.isdir(os.path.join(base_dir, d)) and not d.startswith('.') and d != project_dir]
    for app in apps:
        app_path = os.path.join(base_dir, app)
        required_app_files = ['__init__.py', 'models.py', 'views.py', 'admin.py', 'apps.py']
        for app_file in required_app_files:
            if not os.path.exists(os.path.join(app_path, app_file)):
                errors.append(f"Missing `{app_file}` in app `{app}`.")
    
    return errors


def fix_django_structure(base_dir):
    """Fix common Django project structural issues."""
    print("Attempting to fix Django project structure...")
    
    # Create missing root files
    required_root_files = ['requirements.txt']
    for file in required_root_files:
        file_path = os.path.join(base_dir, file)
        if not os.path.exists(file_path):
            with open(file_path, 'w') as f:
                if file == 'requirements.txt':
                    f.write("Django\n")
                print(f"Created missing file: {file}")
    
    # Create missing directories
    required_dirs = ['templates', 'static', 'media']
    for directory in required_dirs:
        dir_path = os.path.join(base_dir, directory)
        if not os.path.exists(dir_path):
            os.makedirs(dir_path)
            print(f"Created missing directory: {directory}")

    print("Basic fixes applied. Please check project manually for unresolved issues.")


if __name__ == "__main__":
    base_dir = os.getcwd()  # Assuming script runs from Django project root
    print(f"Checking Django project structure in: {base_dir}\n")
    
    errors = validate_django_structure(base_dir)
    if errors:
        print("Issues found:")
        for error in errors:
            print(f"- {error}")
        
        fix = input("\nWould you like to apply automatic fixes? (y/n): ")
        if fix.lower() == 'y':
            fix_django_structure(base_dir)
        else:
            print("Exiting without applying fixes.")
    else:
        print("No issues found. Your Django project structure looks good!")
