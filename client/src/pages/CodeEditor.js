import React, { useState } from "react";
import axios from "axios";

const CodeEditor = ({ index }) => {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [executionResult, setExecutionResult] = useState("");
  const [error, setError] = useState("");
  const [marks, setMarks] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:5000/submit-code", {
        code,
        language,
        index,
      });
      setExecutionResult(response.data.stdout);
      setMarks(response.data.marks);
      if (response.data.marks > 0) {
        setIsCorrect(true); // Update state to indicate that the answer is correct
      } else {
        setIsCorrect(false);
      }
      setError("");
    } catch (error) {
      console.error(
        "Error submitting code:",
        error.response ? error.response.data : error.message
      );
      setError(
        error.response ? error.response.data.error : "Internal Server Error"
      );
      setExecutionResult("");
      setMarks(0);
      setIsCorrect(false);
    }
  };

  return (
    <div>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        rows={10}
        cols={80}
        placeholder="Enter your code here..."
      />
      <div>
        <label htmlFor="language-select">Select Language:</label>
        <select
          id="language-select"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          {/* Add options for other languages as needed */}
        </select>
      </div>
      <button onClick={handleSubmit}>Submit Code</button>
      {error && <div>Error: {error}</div>}
      {executionResult && (
        <div>
          <h3>Execution Result:</h3>
          <pre>{executionResult}</pre>
        </div>
      )}
      {isCorrect && <div>Answer is correct! Marks Obtained: {marks}</div>}
    </div>
  );
};

// Export function to access marks state
const exportMarks = () => {
  return marks;
};

export default CodeEditor;
