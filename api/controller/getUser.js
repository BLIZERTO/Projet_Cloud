const {User} = require("../model/index");


const getUserByID = async (req, res) => {
// need user id not user id
  let user = await User.find({_id: req.body.id}).populate("volume").
  res.json({user: user})
};

const getAllUser = async (req, res) => {
    let users = await User.find().populate("volume", "name");
    res.json({user: users})
};

module.exports = {
    getUserByID,
    getAllUser
};
