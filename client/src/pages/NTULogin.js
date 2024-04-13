import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/ntu_logo.png";

const NTULogin = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

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
    onLogin(username);
    console.log("Username:", username);
    console.log("Password:", password);

    // Clear the form fields
    setUsername("");
    setPassword("");
    navigate("/CoursePage");
  };
  return (
    <div>
      <header className="NTU-header">
        <img src={logo} className="NTU-logo" alt="logo" />
      </header>
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
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default NTULogin;
