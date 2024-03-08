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

module.exports = { processStructured };
