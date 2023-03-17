const {spawn} = require ('child_process');


async function createUser(username, userpass) {
    try {
        const child = spawn('./ssh/sshCMD/createuser.sh', [username, userpass]);
        // Log the output of the shell script
        child.stdout.on('data', (data) => {
            console.log(`stdout: ${data}`);
        });
        child.stderr.on('data', (data) => {
            console.error(`stderr: ${data}`);
        });

        child.on('close', (code) => {
            console.log(`child process exited with code ${code}`);
        });
    } catch (err) {
        console.log(`Error: ${err}`);
    }
}
module.exports = createUser;
