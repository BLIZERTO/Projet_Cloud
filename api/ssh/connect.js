
const {NodeSSH} = require('node-ssh')
let ssh = new NodeSSH();

function connect(){
    ssh.connect({
            host: '40.124.184.7',
            username: 'groupe8',
            password: 'hetic2023groupe8RD!',
        })
        .then(function() {
            console.log('Connected to server');
            // Command
            ssh.exec('ls', [''], {cwd: '/var/www/html'}).then(function (result) {
                console.log('STDOUT: ' + result);});
        }).catch((error) => {
        console.error('ERROR: ', error);
    });
}
connect()



