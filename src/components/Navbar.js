import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import Reorder from '@mui/icons-material/Reorder';
import styled, { css } from "styled-components/macro";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <Reorder />
        </button>
      </div>
        
      <Link to="/"><h1>Westate</h1></Link>
      <ul>
        <li><Link to="/" class="active"> HOME </Link></li>
        <li><Link to="/projects"> PORTFOLIO </Link></li>
        <li><Link to="/about"> ABOUT</Link></li>
        <li><Link to="/contact"> CONTACT</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;