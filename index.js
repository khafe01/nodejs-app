//importing node framework

//var nocache = require('no-cache');
var request = require('superagent');
//var prefix = require('superagent-prefix')('/static');
var express = require("express");
var app = express();
var useragent = require('express-useragent');
 
//var app = express();
//Respond with "hello world" for requests that hit our root "/"
 
//prefix(request); // Prefixes *all* requests
 

//.get('/some-url')

//request
app.use(useragent.express());
app.get("/", function (req, res) {
  //  .use(nocache) // Prevents caching of *only* this request
 res.send("hey CSP world, this is very beginning of implementing CICD piplinew latest updates 9");

});

//listen to port 3000 by default
app.listen(process.env.PORT || 3000);
 
module.exports = app;
