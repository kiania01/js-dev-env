import express from "express";
import path from "path";
import open from "open";
import compression from "compression";

/* eslint-disable no-console */

const port = 3000; // available port
const app = express(); // create express instance

app.use(compression());
app.use(express.static("dist"));

app.get("/", function(req, res) {
  // any references to the root should be handled by this function
  res.sendFile(path.join(__dirname, "../dist/index.html"));
  // delcare our routing (where the application should load)- the response should send a file to the index.html in our current directory
});

app.get("/users", function(req, res) {
  // Hard coding for simplicity. Pretend this hits a real database
  res.json([
    { id: 1, firstName: "Abeer", lastName: "Kiani", email: "akiani@mail.com" },
    {
      id: 2,
      firstName: "Lee",
      lastName: "Doughty",
      email: "ldoughty@mail.com"
    },
    {
      id: 3,
      firstName: "Federico",
      lastName: "Carraretto",
      email: "fcarraretto@mail.com"
    }
  ]);
});

app.listen(port, function(err) {
  if (err) {
    // print out if theres and error opening the server
    console.log(err);
  } else {
    open("http://localhost:" + port);
  }
});
