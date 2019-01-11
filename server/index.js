const express = require("express");
const graphqlHTTP = require("express-graphql");
const { buildSchema } = require("graphql");
const logger = require("morgan");
const bodyParser = require("body-parser");
const api = require("./routes/api");
const models = require("./models");

const app = express();
app.use(logger("dev"));

// Graphql Schema
var schema = buildSchema(`
  type Query {
    course(id: Int!): Course
    courses(topic: String): [Course]
  }
`);

var root = {
  hello: () => {
    return `Hello World`;
  }
};

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
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
  })
);

module.exports = app;
