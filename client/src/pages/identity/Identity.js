import React from "react";
import { Link } from "react-router-dom";
import "./Identity.css";
import Header from "../Header";

const Identity = () => {
  return (
    <div>
      <Header />
      <Link className="identity" to="/NTULogin">
        <button className="identity-button">Student</button>
      </Link>
      <Link className="identity" to="/NTULogin">
        <button className="identity-button">Staff</button>
      </Link>
    </div>
  );
};

export default Identity;
