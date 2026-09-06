//Import Express
const express = require("express");

//Creating express router
const router = express.Router();

//Importing taskController
const taskController = require("../controllers/taskController");

// POST /api/task to create 1 new student
router.post("/tasks", taskController.createTask);

//GET /api/tasks fot all tasks
router.get("/tasks", taskController.getAllTasks);

//GET /api/tasks/:id to get 1 specific task
router.get("/tasks/:id", taskController.getTaskById);

//PUT /api/tasks/:id to update 1 task record
router.put("/tasks/:id", taskController.updateTask);

//DELETE /api/tasks/:id to delete 1 task record
router.delete("/tasks/:id", taskController.deleteTask);


//Exports router which will be used by app.js
module.exports = router;