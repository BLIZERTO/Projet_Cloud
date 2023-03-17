
const {NodeSSH} = require('node-ssh')
let ssh = new NodeSSH();


function connectSSH() {
    return ssh.connect({
            host: '40.124.184.7',
            username: 'groupe8',
            password: 'hetic2023groupe8RD!',
        })
        .then(() => {
            console.log('Connected to server');
            return ssh; // renvoie l'objet ssh
        })
        .catch(err => {
            console.log(`Error connecting to server: ${err}`);
            throw err; // lance une erreur
        });
}
module.exports = connectSSH;




