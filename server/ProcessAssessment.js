const fs = require("fs");
const { processMCQ } = require("./processMCQ");
const { processStructured } = require("./processStructured");
const ProcessAssessment = (stdans, srcans) => {
  var totalMarks = 0;
  const studentAnswers = [];
  var ansId = stdans["answers"];
  //list of answers from student : [ { id: 1, answer: 'a' }, { id: 2, answer: 'hello' } ]
  // Go through json questions sequentially
  // Process the student's answers and tabulate the marks
  console.log(srcans);
  for (const [key, value] of Object.entries(ansId)) {
    console.log("Processing question ID:", key);
    if (srcans[key]) {
      const correspondingQuestion = srcans.find(
        (question) => question.id === value.id
      );

      if (correspondingQuestion) {
        console.log(correspondingQuestion.id);
        console.log(correspondingQuestion.type);

        // Call the appropriate processing function based on the question type
        switch (correspondingQuestion.type) {
          case "MCQ":
            totalMarks += processMCQ(value, correspondingQuestion);
            break;
          case "Structured":
            totalMarks += processStructured(
              value,
              correspondingQuestion,
              studentAnswers
            );
            break;
          case "Code":
            totalMarks += tabCode(value, correspondingQuestion);
            break;
          default:
            console.log("Unhandled question type");
        }
      } else {
        console.log("Invalid question ID in srcans");
      }
    }
  }
  // Save student answers to a file (e.g., in the thumb drive)
  const filename = "student_answers.json";
  fs.writeFileSync(filename, JSON.stringify(studentAnswers, null, 2));
  console.log("Student answers saved to file:", filename);
  console.log("Total Marks:", totalMarks);
  return totalMarks;
};

const tabCode = (studentAnswer, question) => {
  console.log("Processing Code");
  return studentAnswer;
  // Your logic to process Code questions
};

module.exports = { ProcessAssessment };
