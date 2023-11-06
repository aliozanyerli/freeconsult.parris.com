import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import HeroBanner from "./components/header/hero-banner/HeroBanner";
import Main from "./components/main/Main";
import AccoladesSection from "./components/main/side-sections/AccoladesSection";
import InfoSection2 from "./components/main/sections/InfoSection2";
import CTASection from "./components/main/side-sections/CTASection";
import InfoSection3 from "./components/main/sections/InfoSection3";
import ResultsSection from "./components/main/sections/ResultsSection";
import TestimonialsSection from "./components/main/side-sections/TestimonialsSection";
import FormSection from "./components/main/sections/FormSection";
import Footer from "./components/footer/Footer";
import IndividualIntervalsCarousel from "./components/carousel/Carousel";
import { useEffect } from "react";

const client = new ApolloClient({
  uri: "https://mig.parris.com/graphql",
  cache: new InMemoryCache(),
});

function App() {
  useEffect(() => {
    const delayGTMInitialization = () => {
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

    // Delay GTM initialization by 10 seconds
    setTimeout(delayGTMInitialization, 10000);
  }, []);

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <HeroBanner></HeroBanner>
        <IndividualIntervalsCarousel></IndividualIntervalsCarousel>
        <Main></Main>
        <AccoladesSection></AccoladesSection>
        <InfoSection2></InfoSection2>
        <CTASection></CTASection>
        <InfoSection3></InfoSection3>
        <ResultsSection></ResultsSection>
        <TestimonialsSection></TestimonialsSection>
        <FormSection></FormSection>
        <Footer></Footer>
      </div>
    </ApolloProvider>
  );
}

export default App;
