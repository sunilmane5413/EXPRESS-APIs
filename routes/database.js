const express = require('express');
const mysql = require('mysql2');
const router = express.Router()

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  port:3306,
  password: 'Pass@5413',
  database: ' patheya_data'
});

// Connect to the database
connection.connect((error) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Connected to the database');
  }
});

// Define a GET route to retrieve data from the database
router.get('/items', (req, res) => {
  const sql = 'SELECT * FROM patheya_data.employe';
  connection.query(sql, (error, results) => {
    if (error) {
      console.error(error);
      res.sendStatus(500);
    } else {
      res.json(results);
    }
  });
});


module.exports = router;