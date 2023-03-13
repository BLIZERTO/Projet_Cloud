const UserVolume = require("../model/index")

const createUserVolume = async (req, res) => {
    let volume = await UserVolume.findOne({ name: req.body.name });
    // check user
    if (!volume) {
        const newVolume = new UserVolume(req.body);
        newVolume.save();

        res.send(`Volume ${req.body.name} created`);
    } else {
      res.send("A volume with this name already exist");
    }
};
const getAllUserVolumeByID = async (req, res) => {
    let volume = await UserVolume.findOne({ name: req.body.name });
    // check user
    if (!volume) {
        const newVolume = new UserVolume(req.body);
        newVolume.save();

        res.send(`Volume ${req.body.name} created`);
    } else {
      res.send("A volume with this name already exist");
    }
};

module.exports = {
    createUserVolume,
    getAllUserVolumeByID,
};
