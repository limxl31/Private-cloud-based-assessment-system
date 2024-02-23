import React from "react";
// import { Navbar } from "react-bootstrap";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";

const CoursePage = () => {
  return (
    <div className="course-page-container">
      <div className="sidebar-and-link-container">
        <Sidebar />
        <Link className="assessment-page" to="/AssessmentPage">
          Assessment Page
        </Link>
      </div>
    </div>
  );
};

export default CoursePage;
