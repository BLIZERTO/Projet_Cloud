const {UserVolume} = require("../model/index");

const getAllUserVolumeByID = async (req, res) => {
// need volume id not user id
  let volume = await UserVolume.find({_id: req.body.id}).populate({path: "creatorID", select: "-password"}).select("email").select("name").select("username").select("ssh_password")
  res.json({volume: volume})
};

const getAllVolume = async (req, res) => {
    // need volume id not user id
      let volume = await UserVolume.find().populate({path: "creatorID", select: "-password"}).select("email").select("name").select("username").select("ssh_password")
      res.json({volume: volume})
    };

module.exports = {
  getAllUserVolumeByID,
  getAllVolume,
};
