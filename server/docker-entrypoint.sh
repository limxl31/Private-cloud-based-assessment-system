#!/bin/bash

echo "Script is running..."  # Debugging statement
echo "Initializing application..."

# Start the main application process
exec "$@"

echo "Script execution completed."  # Debugging statement