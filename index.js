//importing node framework

var nocache = require('no-cache');
var request = require('superagent');
var prefix = require('superagent-prefix')('/static');
var express = require("express");
 
var app = express();
//Respond with "hello world" for requests that hit our root "/"
 
prefix(request); // Prefixes *all* requests
 
request
.get('/some-url')
.use(nocache) // Prevents caching of *only* this request
.end(function(res){
    // Do something
});
app.get("/", function (req, res) {
 res.send("hey CSP world, this is very beginning of implementing CICD piplines");
});
//listen to port 3000 by default
app.listen(process.env.PORT || 3000);
 
module.exports = app;
