const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Test route
app.get("/hello", (req, res) => {
  res.send("hello world");
});

app.use(express.static(`${__dirname}/public`));

module.exports = app;