import React from "react";
import logo from "./../images/ntu_logo.png";

const Header = () => {
  return (
    <div>
      <header className="NTU-header">
        <img src={logo} className="NTU-logo" alt="logo" />
      </header>
    </div>
  );
};

export default Header;
