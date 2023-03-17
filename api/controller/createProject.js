const {UserVolume} = require("../model/index")
const createDatabase = require("../ssh/createSshDB");
const createPassword = require("../lib/createPassword");
const createSshProject = require("../ssh/createSshProject")
const {User} = require("../model/index");
const Client = require('ssh2').Client;

const createProject = async (req, res) => {
    //get Username with ID provided
    const users = await User.find({_id: req.body.creatorID});
    const user = users[0];
    const userName = user.username;

    // check Project

        const project = new UserVolume(req.body)
        project.db_name = project._id+ '_database';
        project.db_username = project.name.replace(/ /g,'') + '_admin';
        project.db_password = createPassword();
        project.save();
        await createDatabase(project.db_name, project.db_username, project.db_password);
        await createSshProject(project.name,userName)

        res.json({project});
};



module.exports = createProject;
