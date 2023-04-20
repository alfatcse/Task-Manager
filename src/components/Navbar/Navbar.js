import React from 'react';
import "../../styles/main.css";
import logo from "../../images/logo.svg";
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className="container relative py-3">
        <div className="flex items-center justify-between">
          <Link to={'/'}>
            <img src={logo} alt="Logo"/>
          </Link>
          <div className="flex-1 max-w-xs search-field group">
            <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
            <input type="text" placeholder="Search Task" className="search-input" id="lws-searchTask" />
          </div>
        </div>
      </nav>
    );
};

export default Navbar;