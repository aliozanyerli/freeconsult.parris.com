import React from "react";
import parrisLogo from "../../assets/parris-law-firm-logo.svg";
import "./Header.css";
import Button from "../button/Button";

const Header = () => {
  return (
    <header className="App-header p-2">
      <div className="container d-flex justify-content-center">
        <div className="d-flex">
          <img
            src={parrisLogo}
            className="App-logo"
            width="300"
            height="150"
            alt="PARRIS Law Firm logo"
            loading="lazy"
          />
        </div>
        <div className="mt-4 ms-auto no-show-mobile">
          <Button />
        </div>
      </div>
    </header>
  );
};

export default Header;
