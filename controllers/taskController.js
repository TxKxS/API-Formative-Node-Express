//Import Task Model
const task = require("../models/task_models");

//create the task controller object and functions
const taskController = {

    //controller to get all task
    getAllTasks: (res, req) => {

        task.getAllTasks((error, results) => {

            //error handling
            if (error) {
                return res.status(500).json({message: "Database error"})
            }

            //sending all data as json
            res.status(200).json(results);

        });



    }


};

//exports controller, will be used by routes
model.exports = taskController;