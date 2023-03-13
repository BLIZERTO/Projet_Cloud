const express = require("express");
const routes = express();

const db = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

// Database
// db.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })
// .then(() => {
//   console.log('DB Connected Successfully');
// })
// .catch((err) => {
//   console.log("Can't connect to DB: ", err);
// });


//  All routes
routes.get("/", (req, res) => res.send("Server run"));

// export
module.exports = routes;
