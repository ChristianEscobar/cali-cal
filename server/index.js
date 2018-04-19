const app = require("./server");

const PORT = process.env.PORT || 3000;

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`listening on port ${server.address().port}`);
  });
});