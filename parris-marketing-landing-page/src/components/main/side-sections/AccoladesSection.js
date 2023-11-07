// AccoladesSection.js
import React from "react";
import "../sections/Sections.css";
import accoladesLogos from "../../../assets/parris-law-firm-accolades.svg";

const AccoladesSection = () => {
  return (
    <div className="parallax-container no-show-mobile">
      <section className="accolades-section d-flex justify-content-center">
        <figure className="container d-flex justify-content-center">
          <img
            src={accoladesLogos}
            className="accolades-logo"
            alt="PARRIS Law Firm Accolades"
          />
        </figure>
      </section>
    </div>
  );
};

export default AccoladesSection;
