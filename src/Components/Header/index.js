import React from "react";
import '../../index.css';

const Header = ({ children }) => (
  <header className="header">
    <h1>
      { children }
    </h1>
    <h6>Add as many players as you like for the tournament!</h6>
  </header>
);

export default Header;