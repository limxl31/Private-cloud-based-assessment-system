import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

const Routing = () => {
  const navigate = useNavigate();
  const navigateToCoursePage = () => {
    // 👇️ navigate to /coursepage
    navigate("/CoursePage");
  };

  return <div>Routing</div>;
};

export default Routing;
