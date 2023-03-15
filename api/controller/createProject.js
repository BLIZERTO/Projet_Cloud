const {UserVolume} = require("../model/index")
const createDatabase = require("../ssh/createSshDB");
const createPassword = require("../lib/createPassword");

const createProject = async (req, res) => {
    let projectExist = await UserVolume.findOne({ name: req.body.name });
    // check user
    if (!projectExist) {
        const project = new UserVolume(req.body)
        project.db_name = project.name.replace(/ /g,'') + '_database';
        project.db_username = project.name.replace(/ /g,'') + '_admin';
        project.db_password = createPassword();
        project.save();
        
        await createDatabase(project.db_name, project.db_username, project.db_password);

        res.json({message: "Project created" });
    } else {
        res.send("user already exist");
    }
};



module.exports = createProject;
