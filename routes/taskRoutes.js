//Import Express
const express = require("express");

//Creating express router
const router = express.Router();

//Importing taskController
const taskController = require("../controllers/taskController");

// POST /api/task
router.post("/tasks", taskController.createTask);




//Exports router which will be used by app.js
module.exports = router;