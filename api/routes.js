const express = require("express");
const routes = express();
const login = require("./controller/login")
const register = require("./controller/register")
const createVolume = require('./controller/uservolume');

const db = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

// Database
db.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
  console.log('DB Connected Successfully');
})
.catch((err) => {
  console.log("Can't connect to DB: ", err);
});


//  All routes
routes.get("/", (req, res) => res.send("Server run"));
routes.post("/login", login);
routes.post("/register", register);
routes.post("/createvolume", createVolume.createUserVolume);
routes.post("/getallvolumesbyid", createVolume.getAllUserVolumeByID);



// export
module.exports = routes;
