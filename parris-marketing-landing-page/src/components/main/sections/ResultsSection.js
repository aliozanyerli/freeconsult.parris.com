import React from "react";
import "./Sections.css";

const ResultsSection = () => {
  return (
    <section className="container">
      <div className="results-info-section text-center d-flex justify-content-center flex-column">
        <hr />
        <h4 id="results">Top Results From Our Award-Winning Legal Team</h4>
        <p>
          Get the most money for your car accident claim. With Billions won for
          clients, we know what it takes to win, and we won't settle for
          anything less than the best possible result for you.
        </p>
      </div>
      <div className="results-card-section d-flex cards-section justify-content-center flex-mobile">
        <div
          className="card text-black bg-white mb-3 shadow-sm"
          style={{ maxWidth: "18rem" }}
        >
          <div className="card-header d-flex justify-content-start">
            <strong>$120M</strong>
          </div>
          <div className="card-body">
            <h3 className="card-title">T-Bone Accident Verdict</h3>
            <p className="card-text">
              Our client was driving home on Valentine’s Day when a distracted
              driver ran a stop sign directly in front of him, causing a T-bone
              crash that flipped his truck several times. When the PARRIS team
              took his case to trial, the jury awarded our client and his wife a
              record $120 million.
            </p>
          </div>
        </div>
        <div
          className="card text-black bg-white mb-3 shadow-sm"
          style={{ maxWidth: "18rem" }}
        >
          <div className="card-header d-flex justify-content-start">
            <strong>$56.5M</strong>
          </div>
          <div className="card-body">
            <h3 className="card-title">
              Truck Accident Verdict Against CRST, Inc.
            </h3>
            <p className="card-text">
              While two brothers were on their way to their annual fishing trip
              in Mammoth, a CRST big rig drifted into their lane and hit them
              head-on. After an intense legal battle and a 16-day trial, the
              PARRIS team obtained a $56.5 million verdict for the brothers.
            </p>
          </div>
        </div>
        <div
          className="card text-black bg-white mb-3 shadow-sm"
          style={{ maxWidth: "18rem" }}
        >
          <div className="card-header d-flex justify-content-start">
            <strong>$41.6M</strong>
          </div>
          <div className="card-body">
            <h3 className="card-title">
              Distracted Driver Car Accident Verdict - Palmdale, California
            </h3>
            <p className="card-text">
              A 27-year-old man in Palmdale was a passenger in a distracted
              driver T-bone crash. After the insurance company's lowball offer,
              PARRIS team took his case to trial and secured a $41.6 million
              verdict for him and his family.
            </p>
          </div>
        </div>
      </div>
      <div className="results-card-section d-flex cards-section justify-content-center flex-mobile">
        <div
          className="card text-black bg-white mb-3 shadow-sm"
          style={{ maxWidth: "18rem" }}
        >
          <div className="card-header d-flex justify-content-start">
            <strong>$23M</strong>
          </div>
          <div className="card-body">
            <h3 className="card-title">Rollover Car Accident Settlement</h3>
            <p className="card-text">
              While riding as a passenger, the driver made a sharp turn and lost
              control of his vehicle, rolling over two fences into a cement
              storm drain. Following the crash, the passenger hired PARRIS and
              filed a claim against the driver's insurance. As a result, the
              PARRIS team secured a $23 million settlement to help our client's
              long-term recovery.
            </p>
          </div>
        </div>
        <div
          className="card text-black bg-white mb-3 shadow-sm"
          style={{ maxWidth: "18rem" }}
        >
          <div className="card-header d-flex justify-content-start">
            <strong>$17.5M</strong>
          </div>
          <div className="card-body">
            <h3 className="card-title">Truck Work Accident Settlement</h3>
            <p className="card-text">
              Our client, a truck driver, was securing a load for transportation
              when the load fell on top of him, pinning him to the ground. He
              was trapped for an hour before being discovered. After a legal
              battle that lasted for three years, the PARRIS team secured a
              $17.5 million settlement for our client.
            </p>
          </div>
        </div>
        <div
          className="card text-black bg-white mb-3 shadow-sm"
          style={{ maxWidth: "18rem" }}
        >
          <div className="card-header d-flex justify-content-start">
            <strong>$14.8M</strong>
          </div>
          <div className="card-body">
            <h3 className="card-title">Pedestrian Accident Settlement</h3>
            <p className="card-text">
              A teenage girl was crossing the street in Bakersfield when a car
              struck her without warning. PARRIS attorneys fought relentlessly
              for her rights, eventually negotiating a $14.8 million settlement
              on her behalf.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
