import Button from "react-bootstrap/Button";

function ButtonFreeConsultation() {
  return (
    <>
      <Button variant="secondary" href="#form">
        Free Case Evaluation
      </Button>
    </>
  );
}

function ButtonFreeConsultationCall() {
  return (
    <Button variant="secondary" href="tel:(310) 824-5600">
      Free Case Review
    </Button>
  );
}

export { ButtonFreeConsultation, ButtonFreeConsultationCall };
