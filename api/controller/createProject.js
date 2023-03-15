// const {User} = require("../model/index")
// const bcrypt = require("bcrypt");
//
// const createProject = async (req, res) => {
//     let userExist = await User.findOne({ email: req.body.email });
//     // check user
//     if (!userExist) {
//         const user = new User(req.body)
//         const salt = await bcrypt.genSalt(10);
//         user.password = await bcrypt.hash(req.body.password, salt);
//         user.save();
//
//         res.json({message: "register create" });
//     } else {
//         res.send("user already exist");
//     }
// };
//
//
//
// module.exports = register;
