var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('Hello MGT-656! I am a complete ninja now!');
});

app.get('/netid', function(request, response){
    response.send('You should put your netid here!');
});

app.get('/nickname', function(request, response){
    response.send('chip-jumper');
});

app.listen(process.env.PORT || 4000);