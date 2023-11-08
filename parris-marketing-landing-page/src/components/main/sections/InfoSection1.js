import React from "react";
import "./Sections.css";

const InfoSection1 = () => {
  return (
    <section id="InfoSection1" className="d-flex flex-mobile container">
      <div className="info-section">
        <h2>Get the Help You Need After A Car Accident</h2>
        <p>
          PARRIS Law Firm is home to some of the nation’s most experienced and
          compelling trial lawyers. To get the help you need after a car
          accident, it takes the best team of trial attorneys fighting by your
          side.
        </p>
      </div>
      <div className="cards-section d-flex flex-mobile justify-content-center align-items-center">
        <div
          className="card text-white bg-dark mb-3 shadow-sm"
          style={{ maxWidth: "20rem" }}
        >
          <div className="card-header d-flex justify-content-start">
            <i className="bi bi-car-front"></i>
          </div>
          <div className="card-body">
            <h3 className="card-title">Car Accidents</h3>
            <p className="card-text">
              Unplanned mishaps involving sedans and compact cars, leading to
              physical injuries, financial hurdles, and emotional stress.
            </p>
          </div>
        </div>
        <div
          className="card text-white bg-dark mb-3 shadow-sm"
          style={{ maxWidth: "20rem" }}
        >
          <div className="card-header d-flex justify-content-start">
            <i className="bi bi-truck"></i>
          </div>
          <div className="card-body">
            <h3 className="card-title">Semi-Truck Collisions</h3>
            <p className="card-text">
              Unexpected encounters with big rigs and 18-wheelers, leading to
              severe physical injuries, financial setbacks, and emotional
              turmoil.
            </p>
          </div>
        </div>
        <div
          className="card text-white bg-dark mb-3 shadow-sm"
          style={{ maxWidth: "20rem" }}
        >
          <div className="card-header d-flex justify-content-start">
            <i className="bi bi-heart-pulse"></i>
          </div>
          <div className="card-body">
            <h3 className="card-title">Motorcycle Accidents</h3>
            <p className="card-text">
              Sudden misfortunes on the road involving motorcycles, resulting in
              physical trauma, financial burden, and emotional disarray.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection1;
