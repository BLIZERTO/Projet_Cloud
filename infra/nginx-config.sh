#!/usr/bin/env bash
#
# Nginx - new server block

# Variables
WEB_DIR='/home/'$2

if ! [ -d "$WEB_DIR/$1" ]; then

    mkdir $WEB_DIR/$1 && sed -e 's,_;,'$1';,g;s,root_dir,'$WEB_DIR/$1',' /etc/nginx/sites-enabled/default > /etc/nginx/sites-enabled/$1

    echo -e "\n#Added by nginx-server-block-generator.sh\n127.0.0.1     $1" >> /etc/hosts

    /etc/init.d/nginx restart
    
fi
