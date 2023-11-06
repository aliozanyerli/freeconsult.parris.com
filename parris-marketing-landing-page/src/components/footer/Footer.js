import React from "react";
import "../main/sections/Sections.css";
import parrisLogo from "../../assets/parris-law-firm-logo.svg";

const Footer = () => {
  return (
    <div className="cover">
      <footer className="d-flex justify-content-center">
        <figure className="container d-flex justify-content-center flex-column align-items-center">
          <img
            src={parrisLogo}
            className="d-flex row justify-content-center"
            alt="..."
          />
          <caption className="row justify-content-center">
            2023 © PARRIS Law Firm. All rights reserved.
          </caption>
        </figure>
      </footer>
    </div>
  );
};

export default Footer;
