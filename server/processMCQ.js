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

module.exports = { processMCQ };
