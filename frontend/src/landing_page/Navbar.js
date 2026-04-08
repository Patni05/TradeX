import React, { useState, useEffect } from "react";
import "./Navbar.css";

import {Link} from 'react-router-dom'

function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-theme", dark);
  }, [dark]);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="nav-logo">
    <img src="media/images/logo2.png" style={{width:"140"}} alt="logo" />
        {/* <span className="logo-text">ProjeX</span> */}
      </div>

      {/* Links */}
      <ul className="nav-links">
        <li>
          <Link to="/home">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
        <li>
          <Link to="/product">Product</Link>
        </li>
         <li>
          <Link to="/support">Support</Link>
        </li>


      </ul>

      {/* Actions */}
      <div className="nav-actions">
        {/* Theme Toggle */}
        <button onClick={() => setDark(!dark)} className="theme-toggle">
          <span className="toggle-circle">{dark ? "🌙" : "☀️"}</span>
        </button>

        {/* Login */}
        <Link  to="/login">
<button className={`btn ${dark ? "btn-outline-light" : "btn-outline-dark"}`}>Login</button>
</Link>
        {/* Signup */}

        <Link to="/signup">
        <button className="btn signup m-2">Sign Up</button>
</Link>
      </div>


    </nav>
  );
}

export default Navbar;
