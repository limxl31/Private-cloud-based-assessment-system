const fs = require("fs");

const ProcessAssessment = (stdans, srcans) => {
  var totalMarks = 0;
  const studentAnswers = [];
  var ansId = stdans["answers"];
  //list of answers from student : [ { id: 1, answer: 'a' }, { id: 2, answer: 'hello' } ]
  // Go through json questions sequentially
  // Process the student's answers and tabulate the marks
  for (const [key, value] of Object.entries(ansId)) {
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
            totalMarks += processCode(value, correspondingQuestion);
            break;
          case "MultiSelect":
            totalMarks += processMultiSelect(value, correspondingQuestion);
            break;
          default:
            console.log("Unhandled question type");
        }
      } else {
        console.log("Invalid question ID in srcans");
      }
    }
  }
  console.log("Total Marks:", totalMarks);
  // Save student answers to a file (e.g., in the thumb drive)
  const filename = "student_answers.json";
  fs.writeFileSync(filename, JSON.stringify(studentAnswers, null, 2));
  console.log("Student answers saved to file:", filename);
};
// Separate functions to process each type of question
const processMCQ = (studentAnswer, question) => {
  console.log("Processing MCQ");
  // Check if student's answer matches the correct answer
  if (studentAnswer.answer === question.answer) {
    console.log("Correct answer!");
    return question.marks; // Increment total marks if correct
  } else {
    console.log("Incorrect answer");
    return 0; // No marks if incorrect
  }
};

const processStructured = (studentAnswer, question, studentAnswers) => {
  console.log("Processing Structured");
  console.log("hello");
  // Add student answer to the array (without marking)
  studentAnswers.push({
    questionId: question.id,
    answer: studentAnswer.answer,
  });
  console.log("To be graded");
  return 0;
};

const processCode = (studentAnswer, question) => {
  console.log("Processing Code");
  // Your logic to process Code questions
};

const processMultiSelect = (studentAnswer, question) => {
  console.log("Processing MultiSelect");
  // Check if student's answer matches the correct answer
  if (studentAnswer.answer === question.answer) {
    console.log("Correct answer!");
    return question.marks; // Increment total marks if correct
  } else {
    console.log("Incorrect answer");
    return 0; // No marks if incorrect
  }
};

module.exports = { ProcessAssessment };
