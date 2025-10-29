const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

let db;

function connectWithRetry() {
    db = mysql.createConnection({
        host: 'db',
        user: 'root',
        password: 'password',
        database: 'todo_db'
    });

    db.connect(err => {
        if (err) {
            console.log('MySQL not ready, retrying in 3s...');
            setTimeout(connectWithRetry, 3000);
        } else {
            console.log('MySQL Connected!');
            createTableIfNotExists();
            startServer();
        }
    });
}

function createTableIfNotExists() {
    const createTableSQL = `
        CREATE TABLE IF NOT EXISTS todos (
            id INT AUTO_INCREMENT PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            completed TINYINT(1) DEFAULT 0
        )
    `;

    db.query(createTableSQL, (err) => {
        if (err) {
            console.log('Table creation failed:', err.message);
        } else {
            console.log('Table "todos" ready!');
            insertSeedData();
        }
    });
}

function insertSeedData() {
    const seedSQL = `
        INSERT INTO todos (title, completed) 
        VALUES ('Docker Master', 0), ('3-Tier Pro', 1)
        ON DUPLICATE KEY UPDATE title = VALUES(title)
    `;

    db.query(seedSQL, (err) => {
        if (err) console.log('Seed data error:', err.message);
        else console.log('Seed data inserted!');
    });
}

function startServer() {
    app.get('/todos', (req, res) => {
        db.query('SELECT * FROM todos', (err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(results);
        });
    });

    app.post('/todos', (req, res) => {
        const { title } = req.body;
        db.query('INSERT INTO todos (title) VALUES (?)', [title], (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ id: result.insertId, title });
        });
    });

    app.listen(PORT, '0.0.0.0', () => {
        console.log(`Backend running on http://localhost:${PORT}`);
    });
}

connectWithRetry();
