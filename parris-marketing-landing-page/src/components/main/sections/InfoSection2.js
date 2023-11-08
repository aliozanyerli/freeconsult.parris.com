import React from "react";
import "./Sections.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import rexImage from "../../../assets/r-rex-parris-feature_image.webp";

const InfoSection2 = () => {
  return (
    <section className="container d-flex justify-content-center flex-mobile">
      <div className="img-section">
        <LazyLoadImage
          src={rexImage}
          className="d-flex rex-image"
          effect="opacity"
          alt="Rex Parris, Attorney at PARRIS Law Firm."
          width="506"
          height="521"
        />
      </div>
      <div className="info-section2 mt-5">
        <h3>Prepared For Anything</h3>
        <hr />
        <p>
          For clients to achieve success in the courtroom, it takes an
          experienced team of car accident attorneys to litigate every aspect of
          your case.
        </p>
        <p>
          Founded in 1985 by world-renowned trial attorney, R. Rex Parris, the
          PARRIS Law Firm utilizes the latest audio-visual technology in trial,
          teaches jury persuasion tactics, and prepares every case for trial.
        </p>
        <p>
          We know the laws, we know the insurance industry, and we will not
          settle for anything less than the best results for you and your
          family.
        </p>
      </div>
    </section>
  );
};

export default InfoSection2;
