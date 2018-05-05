const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
const db = require('./models');
require('./services/passport');


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [ keys.cookieKey ]
  })
);
// passport to use cookies
app.use(passport.initialize());
app.use(passport.session());


require('./routes/authRoutes/authRoutes')(app);
// require('./routes/authRoutes/authRoutes')(app);
require('./')

// Test route
app.get("/hello", (req, res) => {
  res.json("hello world");
});

app.use(express.static(`${__dirname}/public`));

// Add routes, both API and view
app.use(routes);

module.exports = app;