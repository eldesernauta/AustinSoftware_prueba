import logo from "./../../logo.png";
import "./Navbar.scss";
import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/about" activeStyle>
          <img src={logo} alt="logo" className="logo" />
        </NavLink>
        <Bars />

        <NavMenu>
          <NavLink to="/home" activeStyle>
            Home
          </NavLink>
          <NavLink to="/about" activeStyle>
            About Us
          </NavLink>
          <NavLink to="/library" activeStyle>
            Library
          </NavLink>
          <NavLink to="/locations" activeStyle>
            Locations
          </NavLink>
          <NavLink to="/companies" activeStyle>
            For Companies
          </NavLink>
          <NavLink to="/find-your-dream-job" activeStyle>
            Find your dream job
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
