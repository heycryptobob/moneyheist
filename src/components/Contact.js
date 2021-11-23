import { Container, Row, Col, Button } from "react-bootstrap";

export function Contact() {
  return (
    <section id="contact" className="border-bottom border-secondary bg-secondary">
      <Container className="pt-5 pb-5">
        <Row className="pb-5" xs={1} md={2}>
          <Col className="pt-5">
            <div>
              <h2 className="text-primary">Contact.</h2>
              <p>For all business enquiries, to get in touch with us on telegram.</p>
              <Button variant="outline-primary" size="lg" href="https://t.me/moneyheistoken" target="_blank" rel="noreferrer">Contact Team</Button>
            </div>
          </Col>
          <Col className="pt-5">
            <h2>Community.</h2>
            <p>Connect with our community on Telegram.</p>
            <Button variant="outline-primary" size="lg" href="https://t.me/moneyheistoken" target="_blank" rel="noreferrer">Join Community</Button>
          </Col>
        </Row>
      </Container>
    </section>
  )
}