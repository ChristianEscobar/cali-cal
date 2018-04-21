const app = require("./server");

// const PORT = process.env.PORT || 3000;

const server = app.listen(process.env.PORT || 3001, () => {
    console.log(`listening on port ${server.address().port}`);
  });

// db.sequelize.sync().then(() => {
//   app.listen(PORT, () => {
//     console.log(`listening on port ${server.address().port}`);
//   });
// });

// requiring models for syncing
// const db = require('./models');

// db.sequelize.sync({force: true})
// .then(() => {
//     app.listen(port, () => {
//         console.log("Server started, listening on port " + port);
//     });
// }).catch((error) => {
//     console.error(error);
// });