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

const syncOptions = {}
// if (process.env.NODE_ENV !== 'production') {
//     syncOptions.force = false;
// }

db.sequelize.sync({force:false})
    .then(() => {
        const server = app.listen(PORT, () => {
            console.log(`listening on port ${server.address().port}`);
        });
    }).catch((error) => {
        console.error(error);
    });