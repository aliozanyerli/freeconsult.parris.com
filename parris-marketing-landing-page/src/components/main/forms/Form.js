import React, { useState, useEffect, Suspense } from "react";
import "./Form.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    message: "",
    gclid: "",
    ip_address: "",
  });
  const [gclid, setGclid] = useState("");
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [apiError, setApiError] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleFetchIP = async () => {
    try {
      const ipResponse = await fetch("https://api.ipify.org?format=json");
      const ipData = await ipResponse.json();
      setFormData((prevState) => ({
        ...prevState,
        ip_address: ipData.ip,
      }));
    } catch (error) {
      console.error("Error fetching IP:", error);
      setApiError(true);
    }
  };

  useEffect(() => {
    handleFetchIP();
  }, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const gclidParam = urlParams.get("gclid");

    if (gclidParam) {
      setGclid(gclidParam);
    }
  }, []);

  const formatPhoneNumber = (value) => {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, "");
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
      3,
      6,
    )}-${phoneNumber.slice(6, 10)}`;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === "phone_number") {
      const formattedPhoneNumber = formatPhoneNumber(value);
      setFormData({
        ...formData,
        [name]: formattedPhoneNumber,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const isPhoneNumberValid = (phoneNumber) => {
    return /^\(\d{3}\) \d{3}-\d{4}$/.test(phoneNumber);
  };

  const handleSubmit = async (event) => {
    setValidated(true);
    const form = event.currentTarget;
    event.preventDefault();

    if (
      !isPhoneNumberValid(formData.phone_number) ||
      form.checkValidity() === false
    ) {
      event.stopPropagation();
      return;
    }

    setFormSubmitted(true);
    setTimeout(() => {
      setShowSpinner(true);
    }, 500);

    setTimeout(() => {
      setShowSpinner(false);
    }, 2500); //2500

    setTimeout(() => {
      setShowSuccessMessage(true);
    }, 3000);

    try {
      const ipResponse = await fetch("https://api.ipify.org?format=json");
      const ipData = await ipResponse.json();
      const userIP = ipData.ip;
      setFormData({
        ...formData,
        ip_address: userIP,
      });
    } catch (error) {
      console.error("Error fetching IP:", error);
      setApiError(true);
    }

    try {
      const zappierWebhookProxyURL = `https://hooks.zapier.com/hooks/catch/3796793/38z21pr/`;
      console.log(formData);
      const response = await fetch(zappierWebhookProxyURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const jsonResponse = await response.json();
        console.log("Data sent successfully to the webhook:", jsonResponse);
      } else {
        console.error(
          "Failed to send data Zappier. Status code:",
          response.statusText,
        );
        setApiError(true);
      }
      console.log("Form data submitted:", formData);
    } catch (error) {
      console.log("Error Posting to Zapier:", error);
      setApiError(true);
    }
  };

  return (
    <div className="form-section">
      {showSpinner && (
        <div className="spinner-container d-flex">
          <Spinner animation="border" />
        </div>
      )}

      {showSuccessMessage && (
        <aside className="success-message">
          <h5>Thank You!</h5>
          <p>
            We appreciate your form submission, someone from our team will reach
            out to you soon!
          </p>
        </aside>
      )}

      <Suspense fallback={<div>Loading...</div>}>
        {!showSuccessMessage && (
          <Card className={`text-center ${formSubmitted ? "fade-out" : ""}`}>
            <Form
              noValidate
              validated={validated}
              className={`row g-3 form-section shadow-sm bg-dark bg-gradient ${
                formSubmitted ? "fade-out" : ""
              }`}
              onSubmit={handleSubmit}
            >
              <Card.Header>
                <div className="col-md-12 text-center">
                  <h4>Contact Us</h4>
                  <h5 id="form">Free Case Evaluation</h5>
                </div>
              </Card.Header>
              <Card.Body>
                <Row className="g-3">
                  <Col md={6}>
                    <FloatingLabel controlId="first_name" label="First Name">
                      <Form.Control
                        name="first_name"
                        type="text"
                        required
                        onChange={handleInputChange}
                        pattern="[A-Za-z\s]*"
                        isInvalid={validated && formData.first_name === ""}
                        placeholder="First Name"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a first name.
                      </Form.Control.Feedback>
                    </FloatingLabel>
                  </Col>

                  <Col md={6}>
                    <FloatingLabel controlId="last_name" label="Last Name">
                      <Form.Control
                        name="last_name"
                        type="text"
                        required
                        onChange={handleInputChange}
                        pattern="[A-Za-z\s]*"
                        isInvalid={validated && formData.last_name === ""}
                        placeholder="Last Name"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a last name.
                      </Form.Control.Feedback>
                    </FloatingLabel>
                  </Col>

                  <Col md={6}>
                    <FloatingLabel controlId="email" label="Email">
                      <Form.Control
                        name="email"
                        type="email"
                        required
                        pattern="^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9_\-]+[.]+[a-zA-Z0-9\-.]{2,61}$"
                        onChange={handleInputChange}
                        isInvalid={validated && formData.email === ""}
                        placeholder="Email"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide an email address.
                      </Form.Control.Feedback>
                    </FloatingLabel>
                  </Col>

                  <Col md={6}>
                    <FloatingLabel
                      controlId="phone_number"
                      label="Phone Number"
                    >
                      <Form.Control
                        name="phone_number"
                        type="tel"
                        required
                        onChange={handleInputChange}
                        value={formData.phone_number}
                        isInvalid={
                          validated &&
                          !isPhoneNumberValid(formData.phone_number)
                        }
                        placeholder="Phone Number"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a phone number.
                      </Form.Control.Feedback>
                    </FloatingLabel>
                  </Col>

                  <Col md={12}>
                    <FloatingLabel
                      controlId="message"
                      label="Tell Us About Your Case"
                      className="mb-3"
                    >
                      <Form.Control
                        as="textarea"
                        name="message"
                        placeholder="Your Message"
                        style={{ height: "100px" }}
                        required
                        onChange={handleInputChange}
                        isInvalid={validated && formData.message === ""}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please tell us about your case.
                      </Form.Control.Feedback>
                    </FloatingLabel>
                  </Col>
                </Row>

                <Form.Control
                  type="hidden"
                  id="gclid"
                  name="gclid"
                  value={gclid}
                  onChange={handleInputChange}
                />
              </Card.Body>
              <Card.Footer>
                <div className="col-12">
                  <Button type="submit" variant="secondary" disabled={apiError}>
                    Submit
                  </Button>
                </div>
              </Card.Footer>
            </Form>
          </Card>
        )}
      </Suspense>
    </div>
  );
};

export default ContactForm;
