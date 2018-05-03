var db = require("../models");

var Task = db.task;

// Defining methods for the tasksController
module.exports = {
    //get all tasks
    findAll: function(req, res) {
        Task.findAll().
            then(tasks => res.send(tasks)); 
    },
    //get tasks by dayId
    findByDayId: function(req, res){
      Task.findAll({
      where:{dayID:req.params.id}
    })
    .then(function(tasks){res.send(tasks)})
    },
    //delete a task
    remove: function(req, res) {
    Task.destroy({
      where:{id:req.params.id}
    })
    .then(() => res.status(200).send("Task deleted successfully"))
    .catch(err => res.status(422).json(err))
    },
    //update a task by id
    update: function(req, res) {
      Task.update(req.body,{
          where:{id: req.params.id}
      }).then(task => res.status(200).end())
    },
    //create a task
    addEvent: function(req, res) {
      console.log("req.user", req.user);
      Task.create({
        userId: req.user.id,
        event: req.body.event,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        dayID: req.params.id,
      })
      .then(newEvent => res.status(200).json(newEvent))
      .catch(err => res.status(500).json(err));
    },
};
