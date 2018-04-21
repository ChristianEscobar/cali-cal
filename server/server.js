const express = require("express");
const bodyParser = require("body-parser");
const db = require('./models');

const app = express();
app.use(bodyParser.json());

// Test route
app.get("/hello", (req, res) => {
  res.send("hello world");
});

module.exports = app;