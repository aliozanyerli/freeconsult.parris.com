import React from "react";
import "../Header.css";
import Button from "../../button/Button";
import CallNowButton from "../../button/CallNowButton";
import accoladesLogos from "../../../assets/network-logo-strip-accolades.svg";
import IndividualIntervalsCarouselDesktopWrapped from "../../carousel/CarouselDesktopCards";
import Header from "../Header";

const HeroBanner = () => {
  return (
    <div className="card hero-banner-background text-white hero-banner">
      <Header></Header>
      <div className="container d-flex">
        <div className="d-flex flex-column hero-banner-text mt-5">
          <h1>
            You Deserve The <span style={{ color: "#D88E4C" }}>Best</span>{" "}
            Personal Injury Attorneys.
          </h1>
          <p>
            With Billions{" "}
            <span style={{ color: "#D88E4C", fontWeight: "700" }}>Won</span> for
            clients since 1985, our attorneys have track record and resources to
            handle the most complex cases.
          </p>
          <div className="no-show-mobile">
            <Button />
          </div>
          <div className="no-show-desktop">
            <CallNowButton />
          </div>
          <div className="hero-banner-accolades">
            <img
              src={accoladesLogos}
              class="img-fluid hero-banner-accolades-img"
              width="550"
              height="122"
              alt="PARRIS Law Firm Award Accolades"
              loading="lazy"
            />
          </div>
        </div>
        <div className="d-flex no-show-mobile">
          <IndividualIntervalsCarouselDesktopWrapped></IndividualIntervalsCarouselDesktopWrapped>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
