import { Container, Row, Col, Button } from "react-bootstrap";

export function Audit() {
  return (
    <section id="audit" className="border-bottom border-secondary bg-secondary">
      <Container className="pt-5 pb-5">
        <Row className="pt-5 pb-5">
          <Col>
            <h2>
              <span className="text-primary">A</span>udit.
            </h2>
            <p>
              The contract has been audited by{" "}
              <a
                className="text-primary"
                href="https://www.interfi.network/"
                target="_blank"
                rel="noreferrer"
              >
                InterFi Network
              </a>
              .
            </p>
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <Button
              variant="outline-primary"
              size="lg"
              href="https://github.com/interfinetwork/smart-contract-audits/blob/main/MoneyHeist_AuditReport_InterFi.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Audit Report
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
