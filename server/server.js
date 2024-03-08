const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const { ProcessAssessment } = require("./ProcessAssessment");
const { ProcessCode } = require("./ProcessCode");
var srcanswer = require("./upload.json");
var jsonParser = bodyParser.json();
const app = express();
app.use(cors());

app.use(bodyParser.json());

app.post("/submit-code", async (req, res) => {
  try {
    // Call the ProcessCode function passing the code and language
    const { stdout } = await ProcessCode(req.body.code, req.body.language);
    const executionResult = stdout;
    // Fetch correct answer based on the question index
    const correctAnswer = srcanswer.find(
      (question) => question.id === req.body.index
    );
    // Compare execution result with the correct answer
    const isCorrect = compareExecutionResult(
      executionResult,
      correctAnswer.answer
    );
    // Calculate marks obtained
    const marksObtained = isCorrect ? correctAnswer.marks : 0;

    // Return execution result and marks obtained to frontend
    res.json({ stdout: executionResult, marks: marksObtained });
  } catch (error) {
    console.error("Error submitting code:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

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

// Function to compare execution result with the correct answer
const compareExecutionResult = (executionResult, correctAnswer) => {
  // Here you can define your comparison logic
  // For example, if the execution result matches the correct answer, return true; otherwise, return false
  if (executionResult.trim() === correctAnswer.trim()) {
    console.log("correct!!");
  }
  return executionResult.trim() === correctAnswer.trim();
};
