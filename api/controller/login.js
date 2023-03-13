const User = require("../model/index")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
    let login = await User.findOne({ email: req.body.email });
    // check user
    if (login && bcrypt.compareSync(req.body.password, login.password)) {
      var token = jwt.sign(
        {
          id: login._id,
          email: login.email,
        },
        "secret",
        { expiresIn: "1h" }
      );

      res.json({ token: token });
    } else {
      res.send("email ou mot de passe incorrect");
    }
};










module.exports = login;
