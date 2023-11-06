import React from "react";
import "../sections/Sections.css";
import accoladesLogos from "../../../assets/parris-law-firm-accolades.svg";

const AccoladesSection = () => {
  return (
    <div className="cover">
      <section className="accolades-section d-flex justify-content-center">
        <figure className="container d-flex justify-content-center">
          <img
            src={accoladesLogos}
            className="accolades-logo img-fluid"
            alt="..."
          />
        </figure>
      </section>
    </div>
  );
};

export default AccoladesSection;
