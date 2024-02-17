const fs = require("fs");
const { promisify } = require("util");
const { exec } = require("child_process");
const writeCodeToFile = async (code, fileName) => {
  console.log("writing code...");
  const writeFileAsync = promisify(fs.writeFile);
  try {
    await writeFileAsync(fileName, code);
    console.log(`Code written to ${fileName} successfully.`);
  } catch (error) {
    console.error("Error writing code to file:", error.message);
    throw error;
  }
};

// Function to submit code for execution
const ProcessCode = async (code, language) => {
  const fileName = `temp_code.${getFileExtension(language)}`;
  await writeCodeToFile(code, fileName);

  return new Promise((resolve, reject) => {
    const command =
      language === "python" ? `python ${fileName}` : `node ${fileName}`;
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing code: ${error.message}`);
        reject(error);
      }
      if (stderr) {
        console.error(`Code execution error: ${stderr}`);
        reject(new Error(stderr));
      }
      resolve(stdout);
    });
  });
};

// Helper function to get file extension based on language
const getFileExtension = (language) => {
  switch (language.toLowerCase()) {
    case "javascript":
      return "js";
    case "python":
      return "py";
    default:
      return "";
  }
};

// Function to compare execution result with the correct answer
const compareExecutionResult = (executionResult, correctAnswer) => {
  // Here you can define your comparison logic
  // For example, if the execution result matches the correct answer, return true; otherwise, return false
  return executionResult.trim() === correctAnswer.trim();
};

module.exports = { ProcessCode, compareExecutionResult };
