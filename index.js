//importing node framework

//var nocache = require('no-cache');
var request = require('superagent');
//var prefix = require('superagent-prefix')('/static');
var express = require("express");
 
var app = express();
//Respond with "hello world" for requests that hit our root "/"
 
prefix(request); // Prefixes *all* requests
 

//.get('/some-url')

request
app.get("/", function (req, res) {
  //  .use(nocache) // Prevents caching of *only* this request
 res.send("hey CSP world, this is very beginning of implementing CICD piplinew latest updates 5");

});

//listen to port 3000 by default
app.listen(process.env.PORT || 3000);
 
module.exports = app;
