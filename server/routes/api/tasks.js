const router = require("express").Router();
const tasksController = require("../../controllers/tasksControllers");

// Matches with "/api/tasks"
router.route("/")
  .get(tasksController.findAll)
   
// Matches with "/api/tasks/:id"
router.route("/:id")
    .get(tasksController.findByDayId)
    .put(tasksController.update)
    .delete(tasksController.remove)
    .post(tasksController.addEvent)

module.exports = router;
