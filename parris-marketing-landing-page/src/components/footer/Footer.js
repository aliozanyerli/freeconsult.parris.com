import React from "react";
import "../main/sections/Sections.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import parrisLogo from "../../assets/parris-law-firm-logo.svg";

const Footer = () => {
  return (
    <div className="cover">
      <footer className="d-flex justify-content-center">
        <figure className="container d-flex justify-content-center flex-column align-items-center">
          <LazyLoadImage
            src={parrisLogo}
            width="270"
            height="65"
            className="d-flex row justify-content-center"
            effect="opacity"
            alt="PARRIS Personal Injury Law Firm Logo"
          />
          <caption className="row justify-content-center">
            2024 © PARRIS Law Firm. All rights reserved.
          </caption>
        </figure>
      </footer>
    </div>
  );
};

export default Footer;
