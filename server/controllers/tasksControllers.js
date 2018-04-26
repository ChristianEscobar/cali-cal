var db = require("../models");

var Task = db.task;

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    Task.findAll()
      .then(function(tasks){
        res.send(tasks)
      }); 
  },
  findByDayId: function(req, res){
    Task.findAll({
        where:{
            dayID:req.params.id
        }
    })
    .then(function(tasks){
        res.send(tasks)
    })
  },
  remove: function(req, res) {
    Task.destroy({
        where:{
            id:req.params.id
        }
    })
    .then(() => res.send("Task deleted!"))
  },
  create: function(req, res) {
    console.log("in add", req.body);

    res.status(200).send("OK");
    /*
    Task.create({
      
    });
    */
  }

  
//   findById: function(req, res) {
//     db.Book
//       .findById(req.params.id)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   create: function(req, res) {
//     db.Book
//       .create(req.body)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   update: function(req, res) {
//     db.Book
//       .findOneAndUpdate({ _id: req.params.id }, req.body)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   remove: function(req, res) {
//     db.Book
//       .findById({ _id: req.params.id })
//       .then(dbModel => dbModel.remove())
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   }
};
