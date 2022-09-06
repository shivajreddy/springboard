/** Command-line tool to generate Markov text. */

const fs = require("fs");
const axios = require("axios");
const process = require("process");

const MarkovMachine = require("./markov");

const sourceType = process.argv[2];
const path = process.argv[3];

console.log("these are argv", process.argv);

function generateText(text) {
  let markov = new MarkovMachine(text);
  console.log(markov.makeText());
}

function cat(path) {
  // Read the file
  fs.readFile(path, "utf8", function (err, data) {
    if (err) {
      console.error("Error reading the file", err);
      process.exit(1);
    } else {
      generateText(data);
    }
  });
}

/** Based on the type of the source, run the functions */
if (sourceType === "file") {
  cat(path);
}
if (sourceType === "url") {
  webCat(path);
}
