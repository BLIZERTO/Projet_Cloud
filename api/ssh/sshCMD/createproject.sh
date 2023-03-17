# Get variables from arguments
  projectname=$1
  username=$2


  # Create project
  sudo mkdir "/home/$username/$projectname"
  echo ">>> Project $projectname created"

  # Attribution des droits sur le projet
  sudo chown -R "$username" "/home/$username/$projectname"
  echo ">>> Access for $projectname given to $username"

  # Attribution des droits de lecture et écriture sur le projet
  sudo chmod 700 "/home/$username/$projectname"
  echo ">>> Access for $projectname to Write & Read given to $username"

  get_port()
  {
      PORT=$(shuf -i 81-9999 -n 1);

      while (! grep -Fxq $PORT /home/groupe8/ports.txt)
      do
          PORT=$(shuf -i 81-9999 -n 1);

          mongosh
          use cloud_server
          db.$1.insertOne({port: $PORT})
          exit
      done
  }

  WEB_DIR='/home/'$2

  get_port
  sed -e 's,_;,'$1';,g;s,root_dir,'$WEB_DIR/$1',g;s,http://127.0.0.1:3000/,http://127.0.0.1:'$PORT'/,g' /etc/nginx/sites-enabled/default > /etc/nginx/sites-enabled/$1

  echo -e "\n#Added by nginx-server-block-generator.sh\n127.0.0.1     $1" >> /etc/hosts

  /etc/init.d/nginx restart


  echo ">>> Project Config created"

  echo "Disconnected from server"
