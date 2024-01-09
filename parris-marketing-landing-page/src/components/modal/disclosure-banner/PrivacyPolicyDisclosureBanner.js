import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "./PrivacyPolicyDisclosureBanner.css";

const CookiesConsent = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const isConsentGiven = localStorage.getItem("cookiesConsentGiven");
    if (!isConsentGiven) {
      const timer = setTimeout(() => {
        setShow(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = () => {
    localStorage.setItem("cookiesConsentGiven", "true");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="cookie-consent-banner shadow">
      <p>
        We use cookies to enhance your experience and track website usage. Read
        our Privacy Policy for more information.
      </p>
      <Button variant="secondary" onClick={handleConsent}>
        Acknowledge
      </Button>
    </div>
  );
};

export default CookiesConsent;
