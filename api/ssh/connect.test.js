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

        sshClient.forwardOut(
            sshTunnelConfig.srcHost,
            sshTunnelConfig.srcPort,
            sshTunnelConfig.dstHost,
            sshTunnelConfig.dstPort,
            (err, tunnelStream) => {
                if (err) {
                    console.log('Error establishing SSH tunnel: ', err);
                    return;
                }

                const sshConnection = new Client();
                sshClient.on('ready', () => {
                    sshConnection.exec('ls -l', (err, commandStream) => {
                        if (err) {
                            console.log('Error executing command: ', err);
                            return;
                        }
                        commandStream.on('data', (data) => {
                            console.log(`Command output: ${data}`);
                        }).stderr.on('data', (data) => {
                            console.log(`Command error: ${data}`);
                        }).on('close', () => {
                            sshConnection.end();
                        });
                    });
                });

                sshConnection.connect({
                    sock: tunnelStream,
                    username: sshConfig.username,
                    password: sshConfig.password,
                    host: sshTunnelConfig.dstHost,
                    port: sshTunnelConfig.dstPort,
                    pty: sshTunnelConfig.pty,
                })
                });
            })
            .connect(sshConfig);
