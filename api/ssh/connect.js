const { Client } = require('ssh2');
const fs = require('fs');

const sshConfig = {
    host: '40.124.184.7',
    port: 22,
    username: 'groupe8',
    password: 'hetic2023groupe8RD!',
};

const sshTunnelConfig = {
    srcHost: 'localhost',
    srcPort: 4000,
    dstHost: '40.124.184.7',
    dstPort: 80,
    pty:true
};

const sshClient = new Client();

sshClient
    .on('ready', () => {
        console.log('SSH client connected');

        sshClient.shell((err, stream) => {
            if (err) {
                console.log('Error creating shell: ', err);
                sshClient.end();
                return;
            }
            stream.on('data', (data) => {
                console.log(`Shell output: ${data}`);
            });

            stream.on('close', () => {
                console.log('Shell closed');
                sshClient.end();
            });
        });

})
    .connect(sshConfig);
