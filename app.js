var express = require('express');
var middleWare = require('./middleWare');
var app = express();
var PORT = 3000;

app.use(middleWare.logger);

app.get('/about', middleWare.requireAuthntication, function (req, res){
  res.send('Hello Express!');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
  console.log("app is running at  " + PORT);
});
