// Simple Express server with SQLite database for saving and reading form data

const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const db = new sqlite3.Database('users.db');

// Middlewares
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Create the users table if it doesn't exist
db.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT, message TEXT)');

// Save data from form submission
app.post('/api/save', (req, res) => {
  const { name, message } = req.body;
  db.run('INSERT INTO users (name, message) VALUES (?, ?)', [name, message], function(err) {
    if (err) {
      return res.json({ success: false });
    }
    res.json({ success: true });
  });
});

// Get the latest saved entry
app.get('/api/latest', (req, res) => {
  db.get('SELECT * FROM users ORDER BY id DESC LIMIT 1', [], (err, row) => {
    if (err) {
      return res.json({ success: false });
    }
    res.json({ success: true, data: row });
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
