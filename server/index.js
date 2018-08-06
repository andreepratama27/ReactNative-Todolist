const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const api = require("./routes/api");
const models = require("./models");

const app = express();
app.use(logger("dev"));

/* models initialization */
models.sequelize
  .sync()
  .then(() => {
    console.log("sequelize connected");
  })
  .catch(err => {
    console.log("something wrong : ", err);
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/v1", api);

module.exports = app;
