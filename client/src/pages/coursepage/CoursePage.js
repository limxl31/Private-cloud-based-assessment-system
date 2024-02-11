import React from "react";
// import { Navbar } from "react-bootstrap";
import Navibar from "../navigation-top/NavigationTop";
import Sidebar from "../Sidebar";
import Assessment from "../Assessment";
import CodeEditor from "../CodeEditor";
import AssessmentPage from "../AssessmentPage";
import { Link } from "react-router-dom";
import axios from "axios";

const CoursePage = () => {
  function handleFetch() {
    axios.get(`http://localhost:5000/AssessmentPage`).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  }
  return (
    <div>
      <Sidebar />
      <Navibar />
      <Assessment />
      <Link className="assessment-page" to="/AssessmentPage">
        <button className="assessment-page" onClick={handleFetch}>
          Assessment Page
        </button>
      </Link>
      <CodeEditor />
    </div>
  );
};

export default CoursePage;
