const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// Test route
app.get("/hello", (req, res) => {
  res.send("hello world");
});

module.exports = app;