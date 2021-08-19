// Imports and requires the express module
const express = require('express');
// Imports and requires the mysql2 module
const mysql = require('mysql2');

// Declares the port 
const PORT = process.env.PORT || 3001;
const app = express();

// Middleware for json files and urlencoded forms
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Creates connection with the db by using the host, database name, username and password
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'classlist_db'
  },
  console.log(`Connected to the classlist_db database.`)
);

// Creates query from database 
db.query('SELECT * FROM students', function (err, results) {
  console.log(results);
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

// Listens to the used port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
