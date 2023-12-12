import React from "react";
import "../sections/Sections.css";
import CallNowButton from "../../button/CallNowButton.js";

const CTASection = () => {
  return (
    <section className="cta-section d-flex justify-content-center">
      <aside className="d-flex align-items-center flex-mobile">
        <h3>Have Questions? We Can Help!</h3>
        <div className="btn-container free-case-btn">
          <CallNowButton />
        </div>
      </aside>
    </section>
  );
};

export default CTASection;
