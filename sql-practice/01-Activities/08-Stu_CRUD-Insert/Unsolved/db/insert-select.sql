-- Inserts in the biographies table and choeses the id and the name columns
INSERT INTO biographies (id, name)
-- The chosed values are:
VALUES
-- Each row will be populated with id and name and the total will be 3 rows
    ( 001, "Diary of Anne Frank"),
    ( 002, "Frida: A Biography of Frida Kahlo"),
    ( 003, "Long Walk to Freedom");

-- Returns all the biographies table
SELECT * FROM biographies;
