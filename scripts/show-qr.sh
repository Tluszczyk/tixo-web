#!/bin/bash

# 1. Get Port from argument (Default to 3000 if empty)
PORT=${1:-3000}

# 2. Get the primary IP address
IP=$(hostname -I | awk '{print $1}')

# 3. Check if we found an IP
if [ -z "$IP" ]; then
    echo "Error: Could not detect an IP address."
    exit 1
fi

# 4. Print URL and QR Code
echo "Link: http://$IP:$PORT"
qrencode -t UTF8 "http://$IP:$PORT"
