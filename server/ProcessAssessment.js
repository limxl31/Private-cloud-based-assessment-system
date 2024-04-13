const fs = require("fs");
const { processMCQ } = require("./processMCQ");
const { processStructured } = require("./processStructured");

const ProcessAssessment = (stdans, srcans) => {
  var totalMarks = 0;
  // Save student answers to a file (e.g., in the thumb drive)
  const filename = "./student_answers.json";
  //assuming file is array alr
  let existingData = JSON.parse(fs.readFileSync(filename, "utf8"));
  // Go through json questions sequentially
  // Process the student's answers and tabulate the marks
  console.log(stdans);
  if (stdans && typeof stdans === "object") {
    var ansId = stdans["answers"];
    for (const [key, value] of Object.entries(ansId)) {
      console.log("Processing question ID:", key);
      // Check if the corresponding question exists in srcans
      if (srcans[key - 1]) {
        const correspondingQuestion = srcans[key - 1]; // Directly access the question object
        console.log("Question ID:", correspondingQuestion.id);
        console.log("Question Type:", correspondingQuestion.type);
        if (correspondingQuestion) {
          // Call the appropriate processing function based on the question type
          switch (correspondingQuestion.type) {
            case "MCQ":
              totalMarks += processMCQ(value, correspondingQuestion);
              break;
            case "Structured":
              processStructured(value, correspondingQuestion, existingData);
              break;
            case "Code":
              totalMarks += value;
              break;
            default:
              console.log("Unhandled question type");
          }
        } else {
          console.log("Invalid question ID in srcans");
        }
      }
    }
  } else {
    console.error("Stdans is null or undefined");
    return "Stdans is null or undefined";
  }
  // Save student answers to a file (e.g., in the thumb drive)
  //push id to array
  const stdid = {
    studentID: stdans["studentID"],
  };
  existingData.push(stdid);
  fs.writeFileSync(filename, JSON.stringify(existingData, null, 2), "utf8");
  console.log("Student answers saved to file:", filename);
  console.log("Total Marks:", totalMarks);
  return totalMarks;
};

module.exports = { ProcessAssessment };
