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
