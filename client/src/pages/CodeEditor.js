import React, { useState } from "react";
import Editor from "@monaco-editor/react";

const CodeEditor = () => {
  const [code, setCode] = useState("// Write your code here");

  const handleEditorChange = (value, event) => {
    // Update the code state whenever the editor content changes
    setCode(value);
  };

  const handleRunCode = () => {
    // Send the code to the backend for execution
    // You can use fetch or Axios to send a POST request to your backend server
    fetch("/run", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the backend
        console.log("Execution result:", data.result);
      })
      .catch((error) => {
        console.error("Error executing code:", error);
      });
  };

  return (
    <div>
      <h1>Code Editor</h1>
      {/* Render the Monaco Editor component */}
      <Editor
        height="500px"
        defaultLanguage="javascript"
        defaultValue={code}
        onChange={handleEditorChange}
      />
      {/* Button to run the code */}
      <button onClick={handleRunCode}>Run Code</button>
    </div>
  );
};

export default CodeEditor;
