import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <header>
    <h1>Bookstore CMS</h1>
    <nav id="navbar">
      <NavLink className="link-button" to="/">
        BOOKS
      </NavLink>
      <NavLink className="link-button" to="/categories">
        CATEGORIES
      </NavLink>
    </nav>
  </header>
);

export default Navbar;
