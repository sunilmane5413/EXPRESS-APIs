const express = require('express');
const app = express();
const mysql = require('mysql2');

// Parse incoming request bodies in a middleware before your handlers
app.use(express.json());

// Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'give password',  // give password here 
  database: 'datbase name'   // give ur databse name here and connect once 
});

// Connect to the database
connection.connect();

// GET request to retrieve all users
app.get('/users', function(req, res) {
  // Execute a SELECT query to retrieve all users from the database
  connection.query('SELECT * FROM patheya.details', function(error, results, fields) {
    if (error) {
      // If there was an error, send a 500 Internal Server Error response
      res.status(500).send(error);
    } else {
      // If the query was successful, send the results as a JSON response
      res.json(results);
    }
  });
});

// POST request to create a new user
app.post('/users', function(req, res) {
  // Insert the new user into the database
  connection.query('INSERT INTO details()) VALUES(), [req.body.name], function(error, results, fields) {
    if (error) {
      // If there was an error, send a 500 Internal Server Error response
      res.status(500).send(error);
    } else {
      // If the query was successful, send a 201 Created response with the new user ID
      res.status(201).send({ id: results.insertId });
    }
  });
});

// PUT request to update a user with a specific ID
app.put('/users/:id', function(req, res) {
  // Update the user with the specified ID in the database
  connection.query('UPDATE users SET name = ? WHERE id = ?', [req.body.name, req.params.id], function(error, results, fields) {
    if (error) {
      // If there was an error, send a 500 Internal Server Error response
      res.status(500).send(error);
    } else {
      // If the query was successful, send a 200 OK response
      res.send('User has been updated.');
    }
  });
});

// DELETE request to delete a user with a specific ID
app.delete('/users/:id', function(req, res) {
  // Delete the user with the specified ID from the database
  connection.query('DELETE FROM users WHERE id = ?', [req.params.id], function(error, results, fields) {
    if (error) {
      // If there was an error, send a 500 Internal Server Error response
      res.status(500).send(error);
    } else {
      // If the query was successful, send a 200 OK response
      res.send('User has been deleted.');
    }
  });
});

// Start the server
app.listen(3000, function() {
  console.log('API listening on port 3000');
});
``
