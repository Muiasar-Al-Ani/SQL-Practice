const express = require('express');
// Exports and requires the mysql2 module
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Creates connection to the database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '0000',
    database: 'books_db'
  },
  console.log(`Connected to the books_db database.`)
);

// Queries the entire favorite_books table  
db.query('SELECT * FROM favorite_books', function (err, results){
  console.log(results);
})


// Queries the IDs and counts their repeatability and rename that columns as total_count and finally group them by in stock 
db.query('SELECT COUNT(id) AS total_count FROM favorite_books GROUP BY in_stock', function (err, results) {
  console.log(results);
});


// Queries the sum of all quantities and returns the maximum, the minimum and the average and finally group them by section
db.query('SELECT SUM(quantity) AS total_in_section, MAX(quantity) AS max_quantity, MIN(quantity) AS min_quantity, AVG(quantity) AS avg_quantity FROM favorite_books GROUP BY section', function (err, results) {
  console.log(results);
});

app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
