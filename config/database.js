// import mysql2
const mysql = require("mysql2");

//Connection to the MySql DB
const connection = mysql.createConnection({
    //Database credentials
    host : "localhost",
    user: "root",
    password: "",
    database: "student_db"
});

//Connect to the MySQL Database
connection.connect((error) => {
    //Error handling
    if (error) {
        console.log("Database connection failed" , error);

        //Stop executing the function
        return;
    }

    console.log("Connected to MySQL database");
});

//export the connection
module.exports = connection;
