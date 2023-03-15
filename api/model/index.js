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
  username: {
    type: String,
    require: true,
  },
  ssh_password: {
    type:String,
    require: true,
  },
  avatar: {
    type: String
  },
  userVolume: {
    type: db.Schema.Types.ObjectId,
    ref: "UserVolume",
    select: true
  },
});

const User = db.model("User", userSchema);

const userVolumeSchema = new db.Schema({
  name: {
    type: String,
    required: true,
  },
  db_name :{
    type: String,
    required : true,
  },
  db_username :{
    type: String,
    required : true,
  },
  db_password :{
    type: String,
    required : true,
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