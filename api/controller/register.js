const {User} = require("../model/index")
const bcrypt = require("bcrypt");
const createSshUser = require ('../ssh/createSshUser');
const createPassword = require('../lib/createPassword')

const register = async (req, res) => {
    let userExist = await User.findOne({ email: req.body.email });
    // check user
    if (!userExist) {
        const user = new User(req.body)
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(req.body.password, salt);
        const sshUsername = (email = req.body.email) => {
                const atIndex = email.indexOf('@');
                if (atIndex === -1) {
                    throw new Error('Invalid email address');
                }
                return email.slice(0, atIndex);
        }
        const sshPassword = createPassword();
        user.ssh_password = sshPassword;
        // user.username = sshUsername();
         user.username = 'testshhhh';
        user.save();

        await createSshUser(user.username,sshPassword)

      res.json({message: "register create"});
    } else {
      res.send("user already exist");
    }
};

module.exports = register;
