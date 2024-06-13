import React from "react";
import { NavLink, Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/Navbar";

const Nav = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <span className="logo">MixMaster</span>
        <div className="nav-links">
          <NavLink to="/" className="nav-link">
            HOMEPAGE
          </NavLink>
          <NavLink to="/about" className="nav-link">
            ABOUT
          </NavLink>
          <NavLink to="/newsletter" className="nav-link">
            NEWSLETTER
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

export default Nav;
