import React, { useState } from "react";
import axios from "axios";
const api_url = process.env.REACT_APP_API_URL2;

const CodeEditor = ({ index, onMarksChange }) => {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [executionResult, setExecutionResult] = useState("");
  const [error, setError] = useState("");
  const [marks, setMarks] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleCodeSubmit = async () => {
    try {
      const response = await axios.post(`${api_url}/submit-code`, {
        code,
        language,
        index,
      });
      setExecutionResult(response.data.stdout);
      const updatedMarks = response.data.marks;
      if (response.data.marks > 0) {
        setIsCorrect(true); // Update state to indicate that the answer is correct
        setMarks(updatedMarks);
        onMarksChange(updatedMarks);
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
      <button onClick={handleCodeSubmit}>Submit Code</button>
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

export default CodeEditor;
