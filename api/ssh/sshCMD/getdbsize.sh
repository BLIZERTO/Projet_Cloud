
# Get variables from arguments
dbName=$1

# Switch to MongoDB
mongosh
echo ">>>>>>> Switch to MongoDB"

use "$dbName"

echo ">>> $dbName selected"

"db.stats()"
echo ">>> Stats from $dbName given"

# Switch back to server
exit
echo ">>>>>>> Switch back to server"

EOF
# Disconnect SSH connection
echo "Disconnected from server"