const {spawn} = require("child_process");

async function createSshProject(projectname, username) {
    try {
        const child = spawn('./ssh/sshCMD/createproject.sh', [projectname, username]);
        // Log the output of the shell script
        child.stdout.on('data', (data) => {
            if (child.stdout) {
                return data;
            }
        });
        child.stderr.on('data', (data) => {
            if (child.stderr) { return data;}
        });

        child.on('close', (code) => {
            console.log(`child process exited with code ${code}`);
        });

    } catch (err) {
        console.log(`Error: ${err}`);
    }
}
module.exports = createSshProject;

