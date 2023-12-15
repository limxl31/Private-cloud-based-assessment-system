import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/ntu_logo.png";
import "./Identity.css";

const Identity = () => {
  return (
    <div>
      <header className="NTU-header">
        <img src={logo} className="NTU-logo" alt="logo" />
      </header>
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
