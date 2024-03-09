import "./App.css";
import NTULogin from "../NTULogin.js";
import CoursePage from "../coursepage/CoursePage.js";
import Identity from "../identity/Identity.js";
import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AssessmentPage from "../AssessmentPage.js";

function App() {
  const [username, setUsername] = useState("");
  return (
    <div>
      <Routes>
        <Route path="/CoursePage" element={<CoursePage />} />
        <Route path="/NTULogin" element={<NTULogin onLogin={setUsername} />} />
        <Route
          path="/AssessmentPage/"
          element={<AssessmentPage username={username} />}
        />
        <Route path="/" element={<Identity />} />
      </Routes>
    </div>
  );
}

export default App;
