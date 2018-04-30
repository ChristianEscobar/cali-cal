var db = require("../models");

var Task = db.task;

// Defining methods for the booksController
module.exports = {
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
    },
    //update a task by id
    update: function(req, res) {
      console.log('body: ', req);
      console.log("id: ", req.params.id);
      Task.update(req.body,{
          where:{
              id: req.params.id
          }
      }).then(task => res.status(200).end())
    },
    addEvent: function(req, res) {
      Task.create({
        userId: 1,
        event: req.body.event,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        dayID: req.params.id,
      })
      .then(newEvent => res.status(200).json(newEvent))
      .catch(err => res.status(500).json(err));
    },
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
