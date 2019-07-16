var express = require("express");
var path = require("path");
var open = require("open");

var port = 3000; // available port
var app = express(); // create express instance

app.get("/", function(req, res) {
  // any references to the root should be handled by this function
  res.sendFile(path.join(__dirname, "../src/index.html"));
  // delcare our routing (where the application should load)- the response should send a file to the index.html in our current directory
});

app.listen(port, function(err) {
  if (err) {
    // print out if theres and error opening the server
    console.log(err);
  } else {
    open("http://localhost:" + port); // otherwise open our server on port
  }
});
