import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import CoursePage from "./CoursePage";

const NTULogin = () => {
  <div>Sign in to your NTU account</div>;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here, you can add code to validate the username and password
    // and handle the login logic, such as making an API request.

    console.log("Username:", username);
    console.log("Password:", password);

    // Clear the form fields
    setUsername("");
    setPassword("");
  };
  const navigate = useNavigate();
  const navigateToCoursePage = () => {
    // 👇️ navigate to /coursepage
    navigate("/CoursePage");
  };

  // const navigateHome = () => {
  //   // 👇️ navigate to /
  //   navigate("/");
  // };

  return (
    <div className="login">
      <h2 className="login-title">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button onClick={navigateToCoursePage} type="submit">
          Login
        </button>
        <Routes>
          <Route path="/CoursePage" element={<CoursePage />} />
        </Routes>
      </form>
    </div>
  );
};

export default NTULogin;
