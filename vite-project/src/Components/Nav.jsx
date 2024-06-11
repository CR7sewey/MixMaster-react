import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div style={{ display: "flex", padding: "5px", gap: "5px" }}>
      <Link to="/">HOMEPAGE</Link>
      <Link to="/about">ABOUT</Link>
    </div>
  );
};

export default Nav;
