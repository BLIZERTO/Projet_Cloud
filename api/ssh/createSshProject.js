const connectSSH = require ('./connect')

async function createProject(projectname, username) {
    try {
        // Establish SSH connection
        const ssh = await connectSSH();
        // Create project
        const createUserProject = await ssh.execCommand(`sudo mkdir /home/${username}/${projectname}`);
        console.log(`Project ${projectname} created`);

        // Give user access
        const giveUserAccess = await ssh.execCommand(`sudo chown -R ${username} /home/${username}/${projectname}`);
        console.log(`Access for ${projectname} given to ${username}`);

        // Give rights to write & read
        const giveUserRights = await ssh.execCommand(`sudo chmod 700 /home/${username}/${projectname}`);
        console.log(`Access for ${projectname} to Write & Read given to ${username}`);

        // Disconnect SSH connection
        await ssh.dispose();
        console.log('Disconnected from server');
    } catch (err) {
        console.log(`Error: ${err}`);
    }
}
module.exports = createProject;

