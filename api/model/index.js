const db = require("mongoose");

const userSchema = new db.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  volume: {
    type: db.Schema.Types.ObjectId,
    ref: "UserVolume"
  },
});

const User = db.model("User", userSchema);

const userVolumeSchema = new db.Schema({
  name: {
    type: String,
    required: true,
  },
  creatorID: {
    type: db.Schema.Types.ObjectId,
    ref: "User",
    select: false
  },
});

const UserVolume = db.model("UserVolume", userVolumeSchema);

module.exports = {
  User,
  UserVolume,
};
