//Import the database connection
const db = require("../config/database");

//create object which will constain databse function
const task = {

    //Function to add new task
    createTask: (task, callback) => {

        //prepare the query
        const sql = "INSERT INTO task_tb (title, is_completed) VALUES (?, ?)";

        //Execute the query
        db.query(sql, [task.title, task.is_completed], callback);
    },



    //funciton to get all students
    getAllTask : (callback) => { 

        //Create the sql query
        const sql = "SELECT * FROM task_tb";

        //send the SQL query to MySql
        db.query(sql,callback);
    },

    //getTaskByID
    getTaskByID : (id, callback) => {

        const sql = "SELECT * FROM task_tb WHERE id = ?";

        db.query(sql, [id], callback);
    },

    //DeleteByID
    deleteTask :(id, callback) => {

        const sql = "DELETE FROM task_tb WHERE id = ?";

        db.qurey(sql, [id], callback);

    },

    //UpdateTask
    updateTask: (id, task, callback) => {

        const sql = "UPDATE task SET Title = ?, is_completed = ? WHERE id = ?";

        db.query(sql, [task.title, task.is_completed, id], callback);
    }

};

//export task object which will be used by controller
modules.exports = task;