import React from 'react';
import './navbar.scss';
import { NavLink } from 'react-router-dom';
import userImage from '../images/user.png';

const Navbar = () => (
  <header>
    <div className="nav-left">
      <h1>Bookstore CMS</h1>
      <nav id="navbar">
        <NavLink className="link-button" to="/">
          BOOKS
        </NavLink>
        <NavLink className="link-button" to="/categories">
          CATEGORIES
        </NavLink>
      </nav>
    </div>
    <img src={userImage} height="30px" alt="User Icon" />
  </header>
);

export default Navbar;
