-- Write your Schema Here -- 
DROP DATABASE IF EXISTS customers_db;

CREATE DATABASE customers_db;

USE customers_db;

CREATE TABLE customers (
    id INT NOT NULL PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30)

);

CREATE TABLE customer_orders (
    id INT NOT NULL PRIMARY KEY,
    customer_id INT NOT NULL,
    order_details TEXT NOT NULL,
    FOREIGN KEY (customer_id) 
    REFERENCES customers(id) 
    ON DELETE SET NULL
);

