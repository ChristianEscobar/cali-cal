var db = require("../models");

var Task = db.task;

// Defining methods for the booksController
module.exports = {
<<<<<<< HEAD
  findAll: function(req, res) {
    Task.findAll()
      .then(function(tasks){
        res.send(tasks)
      }); 
  },
  findByDayId: function(req, res){
    Task.findAll({
=======
    //get all tasks
    findAll: function(req, res) {
        Task.findAll().
            then(function(tasks){
                res.send(tasks)
        }); 
    },
    //get tasks by day
    findByDayId: function(req, res){
        Task.findAll({
>>>>>>> 619b3557d8ca86aebc3471eaa36565c858331dd3
        where:{
            dayID:req.params.id
        }
    })
    .then(function(tasks){
        res.send(tasks)
    })
    },
    //delete a task
    remove: function(req, res) {
    Task.destroy({
        where:{
            id:req.params.id
        }
    })
    .then(() => res.send("Task deleted!"))
<<<<<<< HEAD
  },
  create: function(req, res) {
    console.log("in add", req.body);

    res.status(200).send("OK");
    /*
    Task.create({
      
    });
    */
  }

  
=======
    },
    //update a task by id
    update: function(req, res) {
        Task.update(req.body,{
            where:{
                id: req.params.id
            }
        }).then(task => res.status(200).end())
    },
>>>>>>> 619b3557d8ca86aebc3471eaa36565c858331dd3
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
