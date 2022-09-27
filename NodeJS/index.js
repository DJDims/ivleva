const express = require('express');
const app = express();
const connection = require('./mysql_connect');

app.get('/', function(req, res){
    res.send('Hello database movies!');
});

app.get('/categories', function(req, res){
    connection.query('SELECT * FROM category;', (err, result) =>{
        if (err) console.error(err)
        else res.send(result)
    });
});

app.get('/title', function(req, res){
    connection.query('SELECT title FROM film ORDER BY title ASC;', (err, result) =>{
        if (err) console.error(err)
        else res.send(result)
    });
});

app.get('/actors/10', function(req, res){
    connection.query('SELECT first_name FROM actor ORDER BY first_name LIMIT 10;', (err, result) =>{
        if (err) console.error(err)
        else res.send(result)
    });
});

app.get('/films/genre/:genre', function(req, res){
    const genre = req.params.genre;
    connection.query('SELECT title FROM film INNER JOIN film_category ON film.film_id = film_category.film_id INNER JOIN category ON category.category_id = film_category.category_id WHERE name = ?', genre, (err, result) =>{
        if (err) console.error(err)
        else res.send(result)
    });
});

app.get('/films/actor/:id', function(req, res){
    const id = req.params.id;
    connection.query('SELECT title FROM film WHERE film_id IN (SELECT film_id FROM film_actor WHERE actor_id = ?)', id, (err, result) =>{
        if (err) console.error(err)
        else res.send(result)
    });
});

app.get('/filmsActorByLastName/:id',(req,res) => {
    const id = req.params.id
    connection.query('SELECT * FROM film WHERE film_id IN' +
    '(SELECT film_id FROM film_actor WHERE actor_id IN (SELECT actor_id FROM actor WHERE last_name = ?))', id, (error, result) => {
      if (error) console.error(error);
      return res.send({data:result})
    })
  })
  
  app.get('/filmsActorByLastNameFirstLetters/:id',(req,res) => {
    const id = req.params.id
    connection.query("SELECT * FROM film WHERE film_id IN" +
    "(SELECT film_id FROM film_actor WHERE actor_id IN (SELECT actor_id FROM actor WHERE last_name LIKE ? '%'))", id, (error, result) => {
      if (error) console.error(error);
      return res.send({data:result})
    })
  })
  
  app.get('/filmCountByGenre',(req,res) => {
    const id = req.params.id
    connection.query("SELECT COUNT(*) AS filmCount, (SELECT name FROM category WHERE category.category_id = film_category.category_id) AS genre"+
    " FROM film_category GROUP BY category_id", (error, result) => {
      if (error) console.error(error);
      return res.send({data:result})
    })
  })

app.listen(3000);
