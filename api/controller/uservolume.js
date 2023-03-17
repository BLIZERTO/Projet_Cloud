const { UserVolume, User } = require("../model/index");

const getAllUserVolumeByID = async (req, res) => {
  // need volume id not user id
  let volume = await UserVolume.find({ creatorID: req.body.id })
    .populate({ path: "creatorID", select: "-password" })
    .select("email")
    .select("name")
    .select("db_username")
    .select("db_password");
  res.json({ volume: volume });
};

const getAllVolume = async (req, res) => {
  let volume = await UserVolume.find()
    .populate({ path: "creatorID", select: "-password" })
    .select("email")
    .select("name")
    .select("db_username")
    .select("db_password");
  res.json({ volume: volume });
};

const deleteVolumeByID = async (req, res) => {
  let { id } = req.body;
  try {
    const deletedVolume = await UserVolume.findByIdAndDelete(id);
    if (!deletedVolume) {
      return res.status(404).json({ message: "Volume not found" });
    }
    return res.json({ message: "Volume deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  getAllUserVolumeByID,
  getAllVolume,
  deleteVolumeByID,
};
