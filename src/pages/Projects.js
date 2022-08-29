import React from "react";
import PhotoGallery from "../components/PhotoGallery";
import "../styles/Projects.css";
import EKitchen from "../images/EKitchen.jpg";
import ELiving from "../images/ELiving.jpg";
import EMaster from "../images/EMaster.jpg";
import MFront from "../images/MFront.jpg";
import MHall from "../images/MHall.jpg";
import MKitch from "../images/MKitch.jpg";
import M2 from "../images/M2.jpg";
import M3 from "../images/M3.jpg";
import M5 from "../images/M5.jpg";
import M6 from "../images/M6.jpg";
import M7 from "../images/M7.jpg";
import M8 from "../images/M8.jpg";
import M9 from "../images/M9.jpg";
import M10 from "../images/M10.jpg";
import M11 from "../images/M11.jpg";
import M13 from "../images/M13.jpg";
import M14 from "../images/M14.jpg";
import M15 from "../images/M15.jpg";
import M16 from "../images/M16.jpg";
import M17 from "../images/M17.jpg";
import E2 from "../images/E2.jpg";



const galleryImages = [
  {img: MFront},
  {img: EKitchen},
  {img: ELiving},
  {img: EMaster},
  {img: MHall},
  {img: MKitch},
  {img: M2},
  {img: M3},
  {img: M5},
  {img: M6},
  {img: M7},
  {img: M8},
  {img: M9},
  {img: M10},
  {img: M11},
  {img: M13},
  {img: M14},
  {img: M15},
  {img: M16},
  {img: M17},
  {img: E2}
]

function Projects() {

  return (
    <div className="port">
      <div className="portdesc">
        Stunning Images. Perfect for everyone.
      </div>
      <PhotoGallery 
        galleryImages={galleryImages}
      />
    </div>
  );
}

export default Projects;