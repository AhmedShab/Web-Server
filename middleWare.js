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

module.exports = middleWare;
