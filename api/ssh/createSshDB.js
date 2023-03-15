const connectSSH = require ('./connect')

async function createDatabase(dbName,dbUsername,dbPassword) {
    try {
        // Establish SSH connection
        const ssh = await connectSSH();
        // Access to MongoDB
        const switchToMongoDb = await ssh.execCommand(`mongosh`);
        console.log(`>>>>>>> Switch to MongoDB`);

        // Create database
        const createDatabase = await ssh.execCommand(`use ${dbName}`);
        console.log(`>>> Database ${dbName} created`);

        // Give user access to db
        const giveDBAccess = await ssh.execCommand(`
        db.createUser({
          user: "${dbUsername}",
          pwd: "${dbPassword}",
          roles: [{ role: "readWrite", db: "${dbName}"]
        })
        `);
        console.log(`>>> Access for ${dbName} given`);

        // Switch back to server
        const exit = await ssh.execCommand(`exit`);
        console.log('>>>>>>> Switch back to server');

        // Disconnect SSH connection
        await ssh.dispose();
        console.log('Disconnected from server');

    } catch (err) {
        console.log(`Error: ${err}`);
    }
}
module.exports = createDatabase;

