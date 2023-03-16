const express = require("express");
const routes = express();
const login = require("./controller/login");
const register = require("./controller/register");
const createProject = require("./controller/createProject");
const createVolume = require('./controller/uservolume');
const { getUserByID, getAllUser} = require("./controller/getUser");
const getDBStatsFromSsh = require("./controller/getDBStatsFromSsh");
const getVolumeStatsFromSsh = require("./controller/getVolumeStatsFromSsh");

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
// creer un projet
// routes.post("/createvolume", createVolume.createUserVolume);
// recuperer tous les projets
routes.post("/getallvolumesbyid", createVolume.getAllUserVolumeByID);
routes.get("/allvolume", createVolume.getAllVolume);
routes.post("/getuserbyid", getUserByID);
routes.get("/users", getAllUser);
routes.post("/getdbstats", getDBStatsFromSsh);
routes.post("/getvolumestats", getVolumeStatsFromSsh);




// export
module.exports = routes;
