/** Command-line tool to generate Markov text. */

const fs = require("fs");
const axios = require("axios");
const process = require("process");

const MarkovMachine = require("./markov");

const sourceType = process.argv[2];
const path = process.argv[3];

function generateText(text) {
  let markov = new MarkovMachine(text);
  console.log(markov.makeText());
}

function plainText(path) {
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

async function web(path) {
  // Axios GET call to url
  let response;
  try {
    response = await axios.get(path);
  } catch (error) {
    console.error("Error reaching the site", err);
    process.exit(1);
  }
  return generateText(response.data);
}

/** Based on the type of the source, run the functions */
if (sourceType === "file") {
  console.log("Generated text from file");
  plainText(path);
}
if (sourceType === "url") {
  console.log("Generated text from URL");
  web(path);
}
