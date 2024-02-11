import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/ntu_logo.png";
import "./Identity.css";
import axios from "axios";

const Identity = () => {
  function handleClick() {
    axios.get(`http://localhost:5000/submit`).then((res) => {
      console.log(res);
    });
  }
  function handleSubmit() {
    const payload = {
      student_id: 1234,
      answers: [
        {
          id: 1,
          answer: "a",
        },
        {
          id: 2,
          answer: "hello",
        },
      ],
    };
    axios.post(`http://localhost:5000/submit`, payload).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  }
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
      <button className="identity-button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Identity;
