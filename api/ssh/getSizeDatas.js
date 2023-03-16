const connectSSH = require ('./connect')

const getSshDBStats = async (dbName) =>{
    try {
        // Establish SSH connection
        const ssh = await connectSSH();
        const { stdout: connectStdout, stderr: connectStderr } = await ssh.execCommand(`sudo mongosh`);
        console.log(">>> Enter Mongo DB mod");

        const selectDB = await ssh.execCommand(`use ${dbName}`);
        console.log(`>>> ${dbName} selected`);

        // get db sizes
        const { stdout: statsStdout, stderr: statsStderr } = await ssh.execCommand('"db.stats()"');
        console.log(statsStdout)
        if (statsStderr) {
            throw new Error(`Failed to get DB stats: ${statsStderr}`);
        }
        console.log(`>>> Stats from ${dbName} given`);
        const stats = JSON.parse(stdout);
        ssh.dispose();
        console.log('Disconnected from server')
        return stats;
    } catch (err) {
        console.log(`Error: ${err}`);
    }
}

const getSshVolumeStats = async (volumeName, username) => {
    try {
        // Establish SSH connection
        const ssh = await connectSSH();
        // get db sizes
        const { stdout: statsStdout, stderr: statsStderr }  = await ssh.execCommand(`sudo du -h /home/${username}/${volumeName}/`);
        if (statsStderr) {
            throw new Error(`Failed to get Volume stats : ${statsStderr}`);
        }
        console.log(`>>> Stats from ${volumeName} given`);
        const stats = statsStdout;
        ssh.dispose();
        console.log('Disconnected from server')
        return stats;
    } catch (err) {
        console.log(`Error: ${err}`);
    }
}

module.exports = {
    getSshDBStats,
    getSshVolumeStats,
};


