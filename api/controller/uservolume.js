const {UserVolume} = require("../model/index");

const createUserVolume = async (req, res) => {
  const newVolume = new UserVolume(req.body);
  newVolume.save();
  res.json({ message: "volume create" });
};

const getAllUserVolumeByID = async (req, res) => {
// need volume id not user id
  let volume = await UserVolume.find({_id: req.body.id}).populate({path: "creatorID", select: "-password"}).select("email").select("name")
  res.json({volume: volume})
};

const getAllVolume = async (req, res) => {
    // need volume id not user id
      let volume = await UserVolume.find().populate({path: "creatorID", select: "-password"}).select("email").select("name")
      res.json({volume: volume})
    };

module.exports = {
  createUserVolume,
  getAllUserVolumeByID,
  getAllVolume,
};
