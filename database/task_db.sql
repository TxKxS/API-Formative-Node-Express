-- Create the database
CREATE DATABASE IF NOT EXISTS task_db;

-- Select the database
USE task_db;

-- Remove the table if it already exists
DROP TABLE IF EXISTS task_tb;

-- Create the table
CREATE TABLE task_tb (

    id INT AUTO_INCREMENT PRIMARY KEY,

    title VARCHAR(100) NOT NULL,

    is_completed VARCHAR(100) NOT NULL


);


-- Adding sample data 
INSERT INTO task_tb (Title, is_completed)
VALUES 
    ("Wake Up", TRUE), 
    ("Eat Breakfast", FALSE)
;
