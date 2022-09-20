const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send('Hello world!');
});

app.get('/users/:name', function(req, res){
    res.send('Helwewewwelo, ' + req.params.name);
});

app.listen(3000);
