const app = require("./server");

const PORT = process.env.PORT || 3001;

// const server = app.listen(PORT, () => {
//     console.log(`listening on port ${server.address().port}`);
//   });

// db.sequelize.sync().then(() => {

//   const server = app.listen(PORT, () => {
//     console.log(`listening on port ${server.address().port}`);
//   });
// });

// requiring models for syncing
const db = require('./models');

db.sequelize.sync({force: true})
    .then(() => {
        const server = app.listen(PORT, () => {
            console.log(`listening on port ${server.address().port}`);
        });
    }).catch((error) => {
        console.error(error);
    });