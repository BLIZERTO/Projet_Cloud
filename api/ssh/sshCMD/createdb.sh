

# Get variables from arguments
dbName=$1
dbUsername=$2
dbPassword=$3

# Switch to MongoDB
mongosh
echo ">>>>>>> Switch to MongoDB"

# Create database
use "$dbName"
echo ">>> Database $dbName created"

# Give user access to db
mongo << END
use "$dbName"
db.createUser({
  user: "$dbUsername",
  pwd: "$dbPassword",
  roles: [{ role: "readWrite", db: "$dbName"}]
})
END
echo ">>> Access for $dbName given"

# Switch back to server
exit
echo ">>>>>>> Switch back to server"

EOF
# Disconnect SSH connection
echo "Disconnected from server"