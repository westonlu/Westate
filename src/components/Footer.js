import React from "react";
import LinkedIn from '@mui/icons-material/LinkedIn';
import GitHub from '@mui/icons-material/GitHub';
import { Link, useLocation } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.linkedin.com/in/westonytlu/">
          <LinkedIn />
        </a>
        <a href="https://github.com/westonlu">
          <GitHub />
        </a>
      </div>
      <p> &copy; 2022 Weston Lu | westonlu@utexas.edu | Austin, TX 78705 | 469.514.4170</p>
    </div>
  );
}

export default Footer;