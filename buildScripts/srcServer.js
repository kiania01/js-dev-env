import express from "express";
import path from "path";
import open from "open";
import webpack from "webpack";
import config from "../webpack.config.dev";

/* eslint-disable no-console */

const port = 3000; // available port
const app = express(); // create express instance
const compiler = webpack(config); // create webpack config instance

app.use(
  require("webpack-dev-middleware")(compiler, {
    // integrate webpack with express
    noInfo: true,
    publicPath: config.output.publicPath
  })
);

app.get("/", function(req, res) {
  // any references to the root should be handled by this function
  res.sendFile(path.join(__dirname, "../src/index.html"));
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
