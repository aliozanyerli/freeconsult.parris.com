import React from "react";
import "../sections/Sections.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import khailImage from "../../../assets/khail-parris-attorney.webp";

const InfoSection3 = () => {
  return (
    <section className="container d-flex justify-content-center flex-mobile">
      <div className="info-section-3 mt-3">
        <h4>Complex Claims Require Experienced Attorneys</h4>
        <hr />
        <p>
          A car accident lawyer doesn't merely offer legal representation. They
          offer comprehensive support, including arranging medical treatment,
          securing crucial evidence, handling pushy insurance companies, and
          accurately estimating the worth of your claim. This breadth of service
          means they are adept at understanding the whole picture, allowing you
          to focus on what matters most—your recovery.
        </p>
        <p>
          Moreover, they bring a level playing field. Insurance companies employ
          experienced adjusters and attorneys to work in their favor. A car
          accident lawyer ensures that you have a competent, knowledgeable
          advocate fighting for you, working tirelessly to get you the
          compensation you deserve.
        </p>
        <p>
          In essence, a car accident lawyer is not just an attorney; they are
          your ally, your confidant, and your advocate in your journey towards
          justice and recovery.
        </p>
      </div>
      <div className="info-section-3-img d-flex justify-content-center">
        <LazyLoadImage
          src={khailImage}
          effect="opacity"
          className="d-flex mt-4"
          width="385"
          height="480"
          alt="Khail Parris, a PARRIS personal injury attorney."
        />
      </div>
    </section>
  );
};

export default InfoSection3;
