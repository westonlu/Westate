import React from 'react'
import Weston from "../images/Weston.jpg"
import "../styles/Home.css";

const About = () => {
  return (
    <div className="skills">
        <h1> About</h1>
        <img src={Weston} alt="Logo" width="20%" height="20%"/>
        <ol className="list">
          <li className="item">
            <h2><u>Who?</u></h2>
            <span>
              My name is Weston Lu, and I am a real estate photographer based in Dallas, Texas. I am currently a student at the University of Texas at Austin studying electrical 
              and computer engineering, and planning on minoring in business. I have always had a passion for photography and decided to explore that by creating my own passion projects, whether
              portrait or landscape photography. Going into my senior year, I picked up real estate photography after seeing how creative the field could be, whether it was framing the perfect
              shot or arranging the props.
            </span>
          </li>
          <li className="item">
            <h2><u>What?</u></h2>
            <span>
              Skilled in capturing exteriors and interiors of residential homes in the Dallas-Fort Worth Area. <br />
              <u>Equipment:</u>
                <ul>
                    <li>Nikon D7000 DSLR Camera</li>
                    <li>Canon EOS M50 Mark I Mirrorless Camera</li>
                    <li>Sigma 12-24mm Wide Angle Lens</li>
                    <li>Nikon 18-200mm Lens</li>
                    <li>Canon 15-45mm Lens</li>
                </ul>
            </span>
          </li>
        </ol>
      </div>
  )
}

export default About
