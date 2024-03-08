const fs = require("fs");
const { promisify } = require("util");
const { exec } = require("child_process");

// Function to submit code for execution
const ProcessCode = async (code, language, questionId, highestCodeScore) => {
  const fileName = `temp_code.${getFileExtension(language)}`;
  await writeCodeToFile(code, fileName);

  return new Promise((resolve, reject) => {
    const command =
      language === "python" ? `python ${fileName}` : `node ${fileName}`;
    exec(command, { shell: true }, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing code: ${error.message}`);
        reject(error);
      }
      if (stderr) {
        console.error(`Code execution error: ${stderr}`);
        reject(new Error(stderr));
      }
      resolve({ stdout });
      // After resolving the promise, delete the temporary file
      deleteTempFile(fileName);
    });
  });
};

// Helper function to get file extension based on language
const getFileExtension = (language) => {
  console.log(language);
  switch (language.toLowerCase()) {
    case "javascript":
      return "js";
    case "python":
      return "py";
    default:
      return "";
  }
};

// Helper function to delete temporary file
const deleteTempFile = (fileName) => {
  fs.unlink(fileName, (error) => {
    if (error) {
      console.error(
        `Error deleting temporary file ${fileName}:`,
        error.message
      );
    } else {
      console.log(`Temporary file ${fileName} deleted successfully.`);
    }
  });
};
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

module.exports = { ProcessCode };
