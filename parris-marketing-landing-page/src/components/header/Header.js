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
            alt="PARRIS Law Firm logo"
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
