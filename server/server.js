const express = require("express");
const app = express();
const bodyParser = require("body-parser");

var jsonParser = bodyParser.json();

app.get("/submit", (req, res) => {
  // Extract student answers

  // Check whether upload.json exists, if not return error

  // Go through json questions sequentially

  // Process the student's answers and tabulate the marks

  // Return marks to thumbdrive
  const data = {
    name: "John Doe",
    age: 30,
    occupation: "Software Developer",
  };

  res.json(data);
});

app.post("/submit", jsonParser, (req, res) => {
  // Extract student answers
  // Check whether upload.json exists, if not return error
  // Go through json questions sequentially
  // Process the student's answers and tabulate the marks
  // Return marks to thumbdrive
  const data = req.body;
  console.log(data);
  res.json(data);
});

const test1 = () => {};

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
