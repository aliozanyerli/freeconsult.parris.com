// AccoladesSection.js
import React from "react";
import "../sections/Sections.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import accoladesLogos from "../../../assets/parris-law-firm-accolades.svg";

const AccoladesSection = () => {
  return (
    <div className="parallax-container no-show-mobile">
      <section className="accolades-section d-flex justify-content-center">
        <figure className="container d-flex justify-content-center">
          <LazyLoadImage
            src={accoladesLogos}
            className="accolades-logo d-flex"
            alt="PARRIS Law Firm Accolades"
            width="1056"
            height="83"
            effect="opacity"
          />
        </figure>
      </section>
    </div>
  );
};

export default AccoladesSection;
