const connectSSH = require ('./connect')

async function createUser(username, userpass) {
    try {
        // Establish SSH connection
        const ssh = await connectSSH();
        // Create user
        const createUser = await ssh.execCommand(`sudo useradd -m ${username}`);
        console.log('User created');

        // Set user password
        const setUserPassword = await ssh.execCommand(`sudo passwd ${username}`, {
            pty: true,
            stdin: `${userpass}\n${userpass}\n`
        });
        console.log(`Password set for user ${username}`);

        // Secure user folder
        const secureUserFolder = await ssh.execCommand(`sudo chmod 511 /home/${username}`);
        console.log('Folder secure');

        // Disconnect SSH connection
        await ssh.dispose();
        console.log('Disconnected from server');
    } catch (err) {
        console.log(`Error: ${err}`);
    }
}

createUser('testnode', 'testnode');