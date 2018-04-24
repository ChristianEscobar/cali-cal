const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Test route
app.get("/hello", (req, res) => {
  res.send("hello world");
});

app.use(express.static(`${__dirname}/public`));

// Add routes, both API and view
app.use(routes);

module.exports = app;