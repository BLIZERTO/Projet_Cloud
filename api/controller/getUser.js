const {User} = require("../model/index");


const getUserByID = async (req, res) => {
// need user id not user id
  let user = await User.find({_id: req.body.id}).
  res.json({user})
};

const getAllUser = async (req, res) => {
    let users = await User.find().populate("userVolume");
    res.json({users})
};

module.exports = {
    getUserByID,
    getAllUser
};
