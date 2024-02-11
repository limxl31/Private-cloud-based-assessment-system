const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const { ProcessAssessment } = require("./ProcessAssessment");
var srcanswer = require("./upload.json");
console.log(srcanswer);
var jsonParser = bodyParser.json();

const app = express();
app.use(cors());
app.get("/AssessmentPage", (req, res) => {
  // Return the assessment questions from upload.json
  res.json(srcanswer);
});

app.post("/submit", jsonParser, (req, res) => {
  // Extract student answers
  var sdntanswer = req.body;
  console.log(sdntanswer);
  // See if the file exists
  if (srcanswer != null) {
    console.log("The file exists!");
    // console.log(srcanswer);
    const result = ProcessAssessment(sdntanswer, srcanswer);
  } else {
    console.log("The file does not exist!");
    res.status(400).json({ error: "Invalid JSON data" });
    return;
  }
  // Return marks to thumbdrive
  const data = req.body;
  console.log(data);
  res.json(data);
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
