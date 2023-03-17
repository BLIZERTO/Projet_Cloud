#!/bin/bash

# Get variables from arguments
username=$1
volumeName=$2

echo ">>> Establish SSH connection"
echo ">>> Get volume stats"
sudo du -h "/home/${username}/${volumeName}"

exit
EOF
# Disconnect SSH connection
echo "Disconnected from server"