import React from "react";
import "../Header.css";
import { ButtonFreeConsultationCall } from "../../button/Button";
import CallNowButton from "../../button/CallNowButton";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import accoladesLogos from "../../../assets/network-logo-strip-accolades.svg";
import IndividualIntervalsCarouselDesktopWrapped from "../../carousel/CarouselDesktopCards";
import Header from "../Header";

const HeroBanner = () => {
  return (
    <div className="card hero-banner-background text-white hero-banner">
      <Header></Header>
      <div className="container d-flex">
        <div className="d-flex flex-column hero-banner-text mt-5">
          <div className="d-flex no-show-desktop banner-cta-container">
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

          <h1>
            You Deserve The <span style={{ color: "#D88E4C" }}>Best</span>{" "}
            Personal Injury Attorneys.
          </h1>
          <p>
            With Billions{" "}
            <span style={{ color: "#D88E4C", fontWeight: "700" }}>Won</span> for
            clients since 1985, our attorneys have the track record and
            resources to handle the most complex cases.
          </p>
          <div className="no-show-mobile">
            <ButtonFreeConsultationCall />
          </div>
          <div className="no-show-desktop">
            <CallNowButton />
          </div>
          <div className="hero-banner-accolades">
            <LazyLoadImage
              effect="opacity"
              src={accoladesLogos}
              className="img-fluid hero-banner-accolades-img"
              width="550"
              height="122"
              alt="PARRIS Law Firm Award Accolades"
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
