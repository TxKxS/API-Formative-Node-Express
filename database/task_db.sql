-- Create the database
CREATE DATABASE IF NOT EXISTS task_tb;

-- Select the database
USE task_db;

-- Remove the table if it already exists
DROP TABLE IF EXISTS task_tb;

-- Create the table
CREATE TABLE task_tb (

    ID INT AUTO_INCREMENT PRIMARY KEY;

    Title VARCHAR(100) NOT NULL;

    Completed VARCHAR(100) NOT NULL;


);


-- Adding sample data 
INSERT INTO task_tb (Title, Completed)
VALUES ( ("Wake Up", TRUE), ("Eat Breakfast", TRUE));

    
