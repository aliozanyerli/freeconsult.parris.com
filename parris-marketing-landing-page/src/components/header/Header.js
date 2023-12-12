import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import parrisLogo from "../../assets/parris-law-firm-logo.svg";
import "./Header.css";
import CallNowButton from "../button/CallNowButton";

const Header = () => {
  return (
    <header className="App-header p-2">
      <div className="container d-flex justify-content-center">
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
