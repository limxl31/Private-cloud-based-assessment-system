import React from "react";
// import { Navbar } from "react-bootstrap";
import Navibar from "../navigation-top/NavigationTop";
import Sidebar from "../Sidebar";
import Assessment from "../Assessment";
import CodeEditor from "../CodeEditor";
import { Link } from "react-router-dom";

const CoursePage = () => {
  return (
    <div>
      <Sidebar />
      <Navibar />
      <Assessment />
      <Link className="assessment-page" to="/AssessmentPage">
        <button className="assessment-page">Assessment Page</button>
      </Link>
      <CodeEditor />
    </div>
  );
};

export default CoursePage;
