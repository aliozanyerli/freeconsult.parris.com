import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import parrisLogo from "../../assets/parris-law-firm-logo.svg";
import "./Header.css";
import CallNowButton from "../button/CallNowButton";

const Header = () => {
  return (
    <header className="App-header">
      <div className="d-flex no-show-desktop banner-cta-container shadow-lg">
        <div>
          <span className="free-consult-text">FREE CONSULTATION</span>
          <br className="br-element" />
          <span className="free-consult-text pos-rel">AVAILABLE 24/7</span>
        </div>
        <div>
          <button className="banner-cta" href="tel:(661) 341-3169">
            (661) 341-3169
          </button>
        </div>
      </div>

      <div className="container d-flex justify-content-center main-logo">
        <div className="d-flex">
          <LazyLoadImage
            effect="opacity"
            src={parrisLogo}
            className="App-logo"
            width="300"
            height="150"
            alt="PARRIS Law Firm logo"
          />
        </div>
        <div className="mt-4 ms-auto no-show-mobile">
          <CallNowButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
