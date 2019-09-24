import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../resources/img/logo.png';

const NavBar = () => {
  return (
    <nav>
      <div className="nav-wrapper">  
        <ul className="main-nav js--main-nav">
          <li className="link">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="link">  
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/">
              <img className="logo" alt="logo" src={logo} />
            </NavLink>
          </li>
          <li className="link">  
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li className="link">  
            <NavLink to="/services">Services</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
