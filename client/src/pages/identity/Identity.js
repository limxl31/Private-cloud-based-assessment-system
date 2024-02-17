import React from "react";
import { Link } from "react-router-dom";
import "./Identity.css";
import axios from "axios";
import Header from "../Header";

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
      <Header />
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
