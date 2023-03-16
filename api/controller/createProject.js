const {UserVolume} = require("../model/index")
const createDatabase = require("../ssh/createSshDB");
const createPassword = require("../lib/createPassword");
const createSshProject = require("../ssh/createSshProject")
const {User} = require("../model/index");

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

        await createSshProject(project.name,userName)
        await createDatabase(project.db_name, project.db_username, project.db_password);

        res.json({message: `Project  [${project.name}]  created` });
};



module.exports = createProject;
