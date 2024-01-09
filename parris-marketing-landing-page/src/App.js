import React, { Suspense, lazy, useEffect } from "react";
import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import HeroBanner from "./components/header/hero-banner/HeroBanner";
import Main from "./components/main/Main";
import AccoladesSection from "./components/main/side-sections/AccoladesSection";
import CTASection from "./components/main/side-sections/CTASection";
import Footer from "./components/footer/Footer";
import IndividualIntervalsCarousel from "./components/carousel/Carousel";
import CookiesConsent from "./components/modal/disclosure-banner/PrivacyPolicyDisclosureBanner.js";

// Lazy loaded components
const InfoSection2 = lazy(
  () => import("./components/main/sections/InfoSection2"),
);
const InfoSection3 = lazy(
  () => import("./components/main/sections/InfoSection3"),
);
const ResultsSection = lazy(
  () => import("./components/main/sections/ResultsSection"),
);
const TestimonialsSection = lazy(
  () => import("./components/main/side-sections/TestimonialsSection"),
);

const client = new ApolloClient({
  uri: "https://mig.parris.com/graphql",
  cache: new InMemoryCache(),
});

function App() {
  useEffect(() => {
    window.onload = () => {
      const script = document.createElement("script");
      script.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-NDDGNKK');
      `;
      document.head.appendChild(script);
    };
  }, []);

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <HeroBanner />
        <IndividualIntervalsCarousel />
        <Main />
        <AccoladesSection />
        <CTASection />
        <Suspense fallback={<div>Loading...</div>}>
          <InfoSection2 />
          <InfoSection3 />
          <ResultsSection />
          <TestimonialsSection />
        </Suspense>
        <CookiesConsent />
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
