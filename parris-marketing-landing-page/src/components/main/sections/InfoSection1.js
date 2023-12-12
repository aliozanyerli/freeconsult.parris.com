import React from "react";
import "./Sections.css";

const InfoSection1 = () => {
  return (
    <section id="InfoSection1" className="d-flex flex-mobile container">
      <div className="info-section">
        <h2>
          Pay No Fees Until <br /> We Win
        </h2>
        <hr />
        <p>
          PARRIS Law Firm is home to some of the nation’s most experienced and
          compelling trial lawyers. To get the help you need after a car
          accident, it takes the best team of trial attorneys fighting by your
          side.
        </p>
      </div>
      <div className="cards-section d-flex flex-mobile justify-content-center align-items-center">
        <div
          className="card pi-card text-white bg-dark mb-3 shadow-sm"
          style={{ maxWidth: "20rem" }}
        >
          <div className="card-header d-flex justify-content-start">
            <i className="bi bi-car-front"></i>
          </div>
          <div className="card-body">
            <h3 className="card-title">Car Accidents</h3>
            <p className="card-text">
              Depending on the severity of your injuries, you may be entitled to
              compensation for medical bills, lost wages, future income, and
              more.
            </p>
          </div>
        </div>
        <div
          className="card pi-card text-white bg-dark mb-3 shadow-sm"
          style={{ maxWidth: "20rem" }}
        >
          <div className="card-header d-flex justify-content-start">
            <i className="bi bi-truck"></i>
          </div>
          <div className="card-body">
            <h3 className="card-title">Semi-Truck Collisions</h3>
            <p className="card-text">
              Crashes with big rigs often result in severe injuries for
              occupants of smaller cars. Insurance companies know this and will
              do everything they can to pay you as little as possible. Don’t let
              them. Hire a lawyer.
            </p>
          </div>
        </div>
        <div
          className="card pi-card text-white bg-dark mb-3 shadow-sm"
          style={{ maxWidth: "20rem" }}
        >
          <div className="card-header d-flex justify-content-start">
            <i className="bi bi-heart-pulse"></i>
          </div>
          <div className="card-body">
            <h3 className="card-title">Motorcycle Accidents</h3>
            <p className="card-text">
              Injuries from motorcycle crashes are some of the worst out there.
              Get help fighting for every dollar it’ll take to make you whole
              again.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection1;
