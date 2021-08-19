USE books_db;
SELECT * FROM favorite_books;

SELECT COUNT(id) AS total_count 
FROM favorite_books 
GROUP BY in_stock;

SELECT SUM(quantity) AS total_in_section, 
MAX(quantity) AS max_quantity, 
MIN(quantity) AS min_quantity, 
AVG(quantity) AS avg_quantity 
FROM favorite_books 
GROUP BY section;