const express = require("express");
const bodyParser = require("body-parser");
const winston = require("winston");
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

///////// Logging ///////////
const logger = winston.createLogger({
  transports: [
    new winston.transports.File({
      filename: 'myapp.log',
      level: 'info',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
      )
    })
  ]
});

app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url} ${JSON.stringify(req.body)}`);
  next();
});

/////////start server//////////////
app.listen(process.env.PORT || 5000, () => {
  logger.info(`server run at ${`http://localhost:${process.env.PORT}/api`}`);
});
