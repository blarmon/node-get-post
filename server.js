var express = require('express');
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', function(req, res, next) {
    res.end('<h1>Home Page</h1> <form action="/test/submit" method="post"> <input type="text" name="id"> <button type="submit">Submit</button> </form>'
    );
});

app.get('/test/:id', function(req, res, next) {
   res.end('You accessed this page via a GET request. \n id: ' + req.params.id); 
});

app.post('/test/submit', function(req, res, next) {
    console.log('id: ' + req.body.id);
    var id = req.body.id;
    res.redirect('test/' + id);
});

app.listen(8080, function() {
    console.log('listening on 8080');
});