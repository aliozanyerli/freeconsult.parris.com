import React from "react";
import "../sections/Sections.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import fiveStarReview from "../../../assets/5-star-review-for-personal-injury-attorney-law-firm.webp";
import lisaH from "../../../assets/lisa-parris-law-firm-client-testimonial.webp";
import armandoA from "../../../assets/armando-parris-law-firm-client-testimonial.webp";
import aspenB from "../../../assets/aspen-parris-law-firm-client-testimonial.webp";

const TestimonialsSection = () => {
  return (
    <section className="testimonial-section bg-dark bg-gradient">
      <div className="container d-flex justify-content-center flex-column">
        <div className="testimonial-section-info text-center">
          <strong>Testimonials</strong>
          <h4 id="testiominials">
            What Clients Say
            <br /> About Us
          </h4>
        </div>
        <div className="testimonial-section-cards d-flex justify-content-center flex-mobile">
          <div
            className="card text-dark bg-white mb-3 shadow-sm"
            style={{ maxWidth: "18rem" }}
          >
            <div className="card-body text-center">
              <LazyLoadImage
                effect="opacity"
                src={lisaH}
                className="round mx-auto d-block"
                width="90"
                height="90"
                alt="PARRIS Law Firm client, Lisa H."
              />
              <h5 className="card-title">Lisa H.</h5>
              <h6>Car Accident Client</h6>
              <blockquote className="blockquote">
                <p className="card-text">
                  "PARRIS is the BEST law firm out there. They treated me like
                  family and were always so supportive. They always made me feel
                  comfortable and took the stress out of the entire situation."
                </p>
              </blockquote>
              <LazyLoadImage
                effect="opacity"
                src={fiveStarReview}
                className="rounded mx-auto d-block"
                width="155"
                height="35"
                alt="Lisa H. Client's 5 star review"
              />
            </div>
          </div>
          <div
            className="card text-dark bg-white mb-3 shadow-sm"
            style={{ maxWidth: "18rem" }}
          >
            <div className="card-body text-center">
              <LazyLoadImage
                effect="opacity"
                src={aspenB}
                className="round mx-auto d-block"
                width="90"
                height="90"
                alt="PARRIS Law Firm client, Aspen B."
              />
              <h5 className="card-title">Aspen B.</h5>
              <h6>Car Accident Client</h6>
              <blockquote className="blockquote">
                <p className="card-text">
                  "What I loved most about my team was their compassion and
                  patience with me. When you choose PARRIS to represent you,
                  expect to be a part of the family."
                </p>
              </blockquote>
              <LazyLoadImage
                effect="opacity"
                src={fiveStarReview}
                className="rounded mx-auto d-block aspen-five-star-review"
                width="155"
                height="35"
                alt="Aspen B. Client's 5 star review"
              />
            </div>
          </div>
          <div
            className="card text-dark bg-white mb-3 shadow-sm"
            style={{ maxWidth: "18rem" }}
          >
            <div className="card-body text-center">
              <LazyLoadImage
                effect="opacity"
                src={armandoA}
                className="round mx-auto d-block"
                width="90"
                height="90"
                alt="PARRIS Law Firm client, Armando A."
              />
              <h5 className="card-title">Armando A.</h5>
              <h6>Car Accident Client</h6>
              <blockquote className="blockquote">
                <p className="card-text">
                  "They became my second family after my car accident. I can't
                  thank them enough for changing mine and my family's lives for
                  the better."
                </p>
              </blockquote>
              <LazyLoadImage
                effect="opacity"
                src={fiveStarReview}
                className="rounded mx-auto d-block armando-five-star-review"
                width="155"
                height="35"
                alt="Armando A. Client's 5 star review"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
