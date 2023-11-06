import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./ResultsSliderModal.css";

const OffCanvasResultsSliderModal = ({ result, ...props }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(result);

  return (
    <>
      <Button variant="secondary" onClick={handleShow} className="me-2">
        Read More
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <section className="container">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              {result ? (
                <section>
                  <h3>{result.title}</h3>
                  <p>
                    Case Resolved:{" "}
                    {result?.resultsSettings?.hasVerdict
                      ? "Verdict"
                      : "Settlement"}
                  </p>
                  <p>
                    Case Category:{" "}
                    {result.categories || "No categories available"}
                  </p>
                </section>
              ) : (
                <p>Loading or no data available</p>
              )}
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <h4>{result.excerpt}</h4>
            <p>{result.content}</p>
          </Offcanvas.Body>
        </section>
      </Offcanvas>
    </>
  );
};

const ResultsSliderModal = ({ result }) => {
  return (
    <>
      {["bottom"].map((placement, idx) => (
        <OffCanvasResultsSliderModal
          key={idx}
          placement={placement}
          result={result}
        />
      ))}
    </>
  );
};

export default ResultsSliderModal;
