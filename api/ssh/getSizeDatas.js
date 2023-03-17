const { spawn } = require('child_process');

const getSshDBStats = (dbName) => {
    return new Promise((resolve, reject) => {
        const child = spawn('./ssh/sshCMD/getdbsize.sh', [dbName]);

        let stdoutData = '';
        let stderrData = '';

        child.stdout.on('data', (data) => {
            stdoutData += data;
        });

        child.stderr.on('data', (data) => {
            stderrData += data;
        });

        child.on('close', (code) => {
            if (code !== 0) {
                reject(new Error(`child process exited with code ${code}: ${stderrData}`));
            } else {
                resolve(stdoutData);
            }
        });
    });
};

const getSshVolumeStats = async (volumeName, username) => {
    try {
        const child = spawn('./ssh/sshCMD/getprojectsize.sh', [volumeName, username]);
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

module.exports = {
    getSshDBStats,
    getSshVolumeStats,
};


