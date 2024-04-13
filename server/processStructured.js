const fs = require("fs");
const processStructured = (studentAnswer, question, existingData) => {
  console.log("Processing Structured");
  const data = {
    id: question.id,
    answer: studentAnswer,
  };
  existingData.push(data);
  console.log("Structured answers saved to array:");
  return 0;
};

module.exports = { processStructured };
