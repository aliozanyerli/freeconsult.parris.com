import React, { useState, useEffect, Suspense } from "react";
import "./Form.css";
import "cleave.js/dist/addons/cleave-phone.us";
import Cleave from "cleave.js/react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Modal = React.lazy(() => import("react-bootstrap/Modal"));

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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    let isValid = true;

    if (name === "phone_number") {
      isValid = /^\+?(\d.*){3,}$/.test(value); // Adjust regex as per your requirement
    } else {
      isValid = /^[a-zA-Z\s]*$/.test(value);
    }

    if (isValid || value === "") {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (event) => {
    setValidated(true);
    const form = event.currentTarget;
    event.preventDefault();

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      setFormSubmitted(true);
      setTimeout(() => {
        handleShow();
      }, 500);
    }

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
          "Failed to send datat to the webhook. Status code:",
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
    <Suspense fallback={<div>Loading...</div>}>
      <Form
        noValidate
        validated={validated}
        className={`row g-3 form-section shadow-sm bg-dark bg-gradient ${
          formSubmitted ? "fade-out" : ""
        }`}
        onSubmit={handleSubmit}
      >
        <div className="col-md-12 text-center">
          <h4>Contact Us</h4>
          <h5 id="form">Free Case Evaluation</h5>
        </div>
        <div className="col-md-6">
          <Form.Label htmlFor="first_name" className="form-label">
            First Name
          </Form.Label>
          <Form.Control
            name="first_name"
            type="text"
            required
            onChange={handleInputChange}
            pattern="[A-Za-z\s]*"
            isInvalid={validated && formData.first_name === ""}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a first name.
          </Form.Control.Feedback>
        </div>
        <div className="col-md-6">
          <Form.Label htmlFor="last_name" className="form-label">
            Last Name
          </Form.Label>
          <Form.Control
            name="last_name"
            type="text"
            required
            onChange={handleInputChange}
            pattern="[A-Za-z\s]*"
            isInvalid={validated && formData.last_name === ""}
          />
          <Form.Control.Feedback type="invalid">
            Please proved a last name.
          </Form.Control.Feedback>
        </div>
        <div className="col-md-6">
          <Form.Label htmlFor="email" className="form-label">
            Email
          </Form.Label>
          <Form.Control
            name="email"
            type="email"
            required
            pattern="^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9_\-]+[.]+[a-zA-Z0-9\-.]{2,61}$"
            onChange={handleInputChange}
            isInvalid={validated && formData.email === ""}
          />
          <Form.Control.Feedback type="invalid">
            Please provide an email address.
          </Form.Control.Feedback>
        </div>
        <div className="col-md-6">
          <Form.Label htmlFor="phone_number" className="form-label">
            Phone Number
          </Form.Label>
          <Cleave
            name="phone_number"
            type="tel"
            className="form-control"
            id="phone_number"
            options={{ phone: true, phoneRegionCode: "US" }}
            pattern="^\+?( ?[\(]?[\-]?[0-9][\)]?){6,13}$"
            required
            onChange={handleInputChange}
            isInvalid={validated && formData.phone_number === ""}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a phone number.
          </Form.Control.Feedback>
        </div>
        <div className="col-12">
          <Form.Label htmlFor="message" className="form-label">
            Tell Us About Your Case
          </Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            style={{ height: "100px" }}
            required
            onChange={handleInputChange}
            isInvalid={validated && formData.message === ""}
          />
          <Form.Control.Feedback type="invalid">
            Please tell use about your case.
          </Form.Control.Feedback>
        </div>
        <Form.Control
          type="hidden"
          id="gclid"
          name="gclid"
          value={gclid}
          onChange={handleInputChange}
        />
        <div className="col-12">
          <Button type="submit" variant="secondary" disabled={apiError}>
            Submit
          </Button>

          <Modal show={show} onHide={handleClose} animation={true}>
            <Modal.Header closeButton>
              <Modal.Title>Thank you!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              We appreciate your submission, someone from our team will reach
              out soon!
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-center">
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </Form>
    </Suspense>
  );
};

export default ContactForm;
