//import express
const express = require("express");

//import task routes
const taskRoutes = require("./routes/taskRoutes");

//create express app
const app = express();

//make express use json
app.use(express.json());

//add api before the routes
app.use("/api", taskRoutes);

//create simple home route
app.get("/", (res,req) => {
    //Message to check if it is running
    res.send("Task API is running");
});

//store port number
const PORT = 3000;

//Start express server
app.listen(PORT, () => {
    //Display - to check if it is actually running
    console.log("Server running at https://localhost:" + PORT);
})
