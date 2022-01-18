import logo from "./../../logo.png";
import "./Navbar.scss";
import React from "react";
import {
  Nav,
  NavLink,
  NavMenu,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav className="navigation">
        <NavLink to="/about" activeStyle className="col-10 col-md-4">
          <img src={logo} alt="logo" className="logo" />
        </NavLink>

        <NavMenu className="col-2 col-md-8 d-flex justify-content-end">
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
        </NavMenu>
        <div class="toggle-menu">
                <input type="checkbox" id="check" />
                <label class="button" for="check">
                    <div class="top"></div>
                    <div class="mid"></div>
                    <div class="bot"></div>
                </label>

                <div class="menu">
                    <a href="#">Home</a>
                    <a href="#">About Us</a>
                    <a href="#">Library</a>
                    <a href="#">Locations</a>
                    <a href="#">For Companies</a>
                    <a href="#">Find your dream job</a>
                </div>
            </div>
      </Nav>
    </>
  );
};

export default Navbar;
