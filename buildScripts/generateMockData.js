// script generates mock data for local development
import jsf from "json-schema-faker";
import { schema } from "./mockDataSchema";
import fs from "fs";
import chalk from "chalk";

const json = JSON.stringify(jsf(schema)); // string of JSONs stored

fs.writeFile("./src/api/db.json", json, function(err) {
  // use node's built in fs to write database file
  if (err) {
    return console.log(chalk.red(err));
  } else {
    console.log(chalk.green("Mock data generated."));
  }
});
