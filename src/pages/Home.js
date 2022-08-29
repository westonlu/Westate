import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Home.css";
import ELiving from "../images/ELiving.jpg";
import MFront2 from "../images/MFront2.jpg";

function Home() {
  return (
    <div className="home">
      <div className="about" style={{ backgroundImage: `url(${MFront2})` }}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@200;400;600&display=swap" rel="stylesheet" />
        <h2>Westate Real Estate Photography</h2>
        <div className="prompt"> 
          <p>Beautiful. Professional. Made Simple.</p>
        </div>
        <div className="aboutbutton">
          <Link to="/projects"> <b>Explore></b></Link> {"      "} <Link to="/contact"> <b>Book Now> </b></Link>
        </div>
      </div> 
      <div className="skills">
        <h1> About</h1>
        <ol className="list">
          <li className="item">
            <h2><u>Who?</u></h2>
            <span>
              Real estate photographer based in Dallas, Texas. Currently a student at the University of Texas at Austin studying electrical and computer engineering.
            </span>
            <div className="learn">
              <Link to="/about"> Learn More ></Link>
            </div>
          </li>
          <li className="item">
            <h2><u>What?</u></h2>
            <span>
              Skilled in capturing exteriors and interiors of residential homes using various types of cameras and lenses.
              <img src={ELiving} alt="Logo" width="98%" height="98%"/>
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;