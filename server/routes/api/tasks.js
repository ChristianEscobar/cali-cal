const router = require("express").Router();
const tasksController = require("../../controllers/tasksControllers");

// Matches with "/api/tasks"
router.route("/")
  .get(tasksController.findAll)
  .post(tasksController.create)
//   .post(booksController.create);
   
// Matches with "/api/tasks/:id"
router.route("/:id")
//   .get(booksController.findById)
    .get(tasksController.findByDayId)
//   .put(booksController.update)
//   .delete(booksController.remove);
    .delete(tasksController.remove)

module.exports = router;
