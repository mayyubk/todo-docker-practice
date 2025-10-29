CREATE DATABASE IF NOT EXISTS todo_db;
USE todo_db;

DROP TABLE IF EXISTS todos;
CREATE TABLE todos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    completed TINYINT(1) DEFAULT 0
);

INSERT INTO todos (title, completed) VALUES 
('Docker Master', 0),
('3-Tier Pro', 1);
