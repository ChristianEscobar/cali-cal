if (process.env.NODE_env === "production") {
  module.exports = require('./prod');
} else {
  module.exports = require('./dev');
}