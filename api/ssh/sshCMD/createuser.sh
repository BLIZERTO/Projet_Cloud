# Get variables from arguments
  username=$1
  userpass=$2

  # Création de l'utilisateur
  sudo useradd -m "$username"
  echo ">>> User $username created"

  # Définition du mot de passe
echo "$username":"$userpass" | sudo /usr/sbin/chpasswd

echo ">>> Password set for user $username"

  # Sécurisation du dossier utilisateur
  sudo chmod 511 "/home/$username"
  echo ">>> Folder secure"

# Appel de la fonction createUser avec les arguments fournis en ligne de commande

echo "Disconnected from server"
