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

  # Création de la configuration du projet
  sudo sh nginx-config.sh "$projectname" "$username"
  echo ">>> Project Config created"

echo "Disconnected from server"
