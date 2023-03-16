const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const routes = require("./routes");
const dotenv = require('dotenv');
const cors = require("cors");

dotenv.config();

////// CORS /////
app.use(cors());

// Middelware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/////////////// Dossier ///////////////////
app.use(express.static('Public'));

///initial routes
app.use("/api", routes);


/////////start server//////////////
app.listen(process.env.PORT || 5000, () => console.log(`server run at ${`http://localhost:${process.env.PORT}/api`}`));




