var express = require('express');
var app = express();
var PORT = 3000;

var middleWare = {
  requireAuthntication: function (req, res, next) {
    console.log("Private route hit!");
    next();
  },
  logger: function (req, res, next) {
    console.log("Requested at " + new Date() +" "+req.method + " " + req.originalUrl);
    next();
  }
}

app.use(middleWare.logger);

app.get('/about', middleWare.requireAuthntication, function (req, res){
  res.send('Hello Express!');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
  console.log("app is running at  " + PORT);
});
