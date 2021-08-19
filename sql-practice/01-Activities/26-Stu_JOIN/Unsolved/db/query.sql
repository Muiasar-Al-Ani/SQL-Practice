-- Add your code below and execute file in MySQL Shell --
SELECT * FROM book_prices;
SELECT * FROM favorite_books;
SELECT *
FROM favorite_books
JOIN book_prices ON book_prices.price = favorite_books.book_price;