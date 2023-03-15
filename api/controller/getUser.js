const {User} = require("../model/index");


const getUserByID = async (req, res) => {
    if ( req.body.id){
        let user = await User.find({_id: req.body.id});
    }
    else if (req.body)

  res.json({user});
};

const getAllUser = async (req, res) => {
    let users = await User.find().populate("userVolume");
    res.json({users})
};

module.exports = {
    getUserByID,
    getAllUser
};
