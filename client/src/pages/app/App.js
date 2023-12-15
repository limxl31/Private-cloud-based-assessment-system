import "./App.css";
import NTULogin from "../NTULogin.js";
import CoursePage from "../coursepage/CoursePage.js";
import Identity from "../identity/Identity.js";
import { Route, Routes } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/CoursePage" element={<CoursePage />} />
        <Route path="/NTULogin" element={<NTULogin />} />
        <Route path="/" element={<Identity />} />
      </Routes>
    </div>
  );
}

export default App;
