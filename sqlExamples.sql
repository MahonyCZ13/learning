/* Inner join */
SELECT * FROM books INNER JOIN authors ON books.AuthorId = authors.id WHERE authors.authorName = 'J.R.R.Tolkien';
/*
OUTPUT:
MariaDB [test]> source tolkien.sql
+--------+----------------------------------------------+----------+----------+----+---------------+
| BookId | Title                                        | SeriesId | AuthorId | id | authorName    |
+--------+----------------------------------------------+----------+----------+----+---------------+
|      1 | The Fellowship of the ring                   |        1 |        1 |  1 | J.R.R.Tolkien |
|      2 | The Two Towers                               |        1 |        1 |  1 | J.R.R.Tolkien |
|      3 | The Return of the King                       |        1 |        1 |  1 | J.R.R.Tolkien |
|      6 | The Hobbit: The Journey there and back again |        0 |        1 |  1 | J.R.R.Tolkien |
+--------+----------------------------------------------+----------+----------+----+---------------+
4 rows in set (0.00 sec)
*/

/* Create Table */
CREATE TABLE IF NOT EXISTS test3 (
    id INT NOT NULL PRIMARY KEY auto_increment,
    itemName VARCHAR(200) NOT NULL,
    itemDesc VARCHAR(300),
    itemDate DATE NOT NULL,
    itemNumber INT NOT NULL
);

/* Insert Into */
INSERT INTO 
    test3 (itemName, itemDesc, itemDate, itemNumber)
    VALUES
        ('Apple','A fruit','2017-11-16',3),
        ('Lemon','A another fruit','2017-10-18',6),
        ('A car','Expensive object', '2017-03-01',1);
