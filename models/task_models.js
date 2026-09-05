//Import the database connection
const db = require("../config/database");

//create object which will constain databse function
const task = {

    //Function to add new task
    createTask: (task, callback) => {

        //prepare the query
        const sql = "INSERT INTO task_tb (title, completed) VALUES (?, ?)";

        //Execute the query
        db.query(sql, [task.title, task.completed], callback);
    },


    //funciton to get all students
    getAllStudents : (callback) => { 

        //Create the sql query
        const sql = "SELECT * FROM task_tb";

        //send the SQL query to MySql
        db.query(sql,callback);
    }

};

//export task object
modules.exports = task;