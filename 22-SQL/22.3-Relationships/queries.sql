-- write your queries here

SELECT * FROM owners o FULL JOIN vehicles v ON v.owner_id = o.id;

SELECT o.first_name, o.last_name, COUNT(*) FROM owners o FULL JOIN vehicles v ON v.owner_id = o.id GROUP BY o.id ORDER BY o.first_name;


SELECT o.first_name, o.last_name, SUM(v.price)/COUNT(*) AS avg_price, COUNT(*)
FROM owners o
FULL JOIN vehicles v
ON v.owner_id = o.id
GROUP BY o.id
HAVING SUM(v.price)/COUNT(*) > 10000
ORDER BY COUNT(*) DESC;
