# Get variables from arguments
  username="test"
  userpass="test"

  # Création de l'utilisateur
  sudo useradd -m "$username"
  echo ">>> User $username created"

  # Définition du mot de passe
  echo -e "$userpass\n$userpass\n" | sudo passwd "$username"
  echo ">>> Password set for user $username"

  # Sécurisation du dossier utilisateur
  sudo chmod 511 "/home/$username"
  echo ">>> Folder secure"

# Appel de la fonction createUser avec les arguments fournis en ligne de commande
createUser "$1" "$2"

echo "Disconnected from server"
