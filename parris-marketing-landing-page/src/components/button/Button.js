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
    <Button variant="secondary" href="tel:866-714-1750">
      Free Case Review
    </Button>
  );
}

export { ButtonFreeConsultation, ButtonFreeConsultationCall };
