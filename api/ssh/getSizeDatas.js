const connectSSH = require ('./connect')

const getSshDBStats = async (dbName) =>{
    try {
        // Establish SSH connection
        const ssh = await connectSSH();
        const { stdout: connectStdout, stderr: connectStderr } = await ssh.execCommand(`sudo mongosh`);
        console.log(">>> Enter Mongo DB mod");
        if (connectStderr) {
            throw new Error(`Failed to enter: ${connectStderr}`);
        }

        const { stdout: selectStdout, stderr: selectStderr } = await ssh.execCommand(`use ${dbName}`,{cwd:'/bin/src/mongosh'});
        console.log(`>>> ${dbName} selected`);
        if (selectStderr) {
            throw new Error(`Failed to select db : ${selectStderr}`);
        }

        // get db sizes
        const { stdout: statsStdout, stderr: statsStderr } = await ssh.execCommand('"db.stats()"');
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
        const { stdout: statsStdout, stderr: statsStderr }  = await ssh.execCommand(`sudo du -sh /home/${username}/${volumeName}/`);
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


