import React from "react";
import logo from './../../logo.png';
import './Navbar.scss';
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav className="navigation">
        <NavLink to="/">
          <img src={logo} alt="logo" width="200px"/>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/" activeStyle>
            About Us
          </NavLink>
          <NavLink to="/" activeStyle>
            Library
          </NavLink>
          <NavLink to="/" activeStyle>
            Locations
          </NavLink>
          <NavLink to="/" activeStyle>
            For Companies
          </NavLink>
          <NavLink to="/" activeStyle>
            Find your dream job
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
