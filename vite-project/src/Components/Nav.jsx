import React from "react";
import { NavLink, Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/Navbar";

const Nav = () => {
  return (
    <Wrapper>
      <nav>
        <div className="nav-center">
          <span className="logo">MixMaster</span>
          <div className="nav-links">
            <NavLink to="/">HOMEPAGE</NavLink>
            <NavLink to="/about">ABOUT</NavLink>
            <NavLink to="/newsletter">NEWSLETTER</NavLink>
          </div>
        </div>
      </nav>
    </Wrapper>
  );
};

export default Nav;
