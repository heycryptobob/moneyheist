import { Container, Row, Col } from "react-bootstrap";

export function Tokenomics() {
  return (
    <section id="tokenomics" className="border-bottom border-secondary">
      <Container className="pt-5 pb-5">
        <Row className="pt-5">
          <Col className="text-center">
            <h2><span className="text-primary">Token</span>omics.</h2>
          </Col>
        </Row>
        <Row className="pb-5" xs={1} md={2}>
          <Col className="pt-5">
            <h3>Taxation.</h3>
            <ul className="list-unstyled">
              <li><code>5%</code> Marketing</li>
              <li><code>3%</code> Liquidity</li>
              <li><code>2%</code> Buy-Back</li>
              <li><code>1%</code> Bank Vault</li>
            </ul>
          </Col>
          <Col className="pt-5">
            <h3>Initial Allocation.</h3>
            <ul className="list-unstyled">
              <li>Max Supply: <code>1,000,000,000,000</code> (1 Trillion)</li>
              <li>Private Sale: <code>10%</code></li>
              <li>Presale: <code>53%</code></li>
              <li>Liquidity: <code>37%</code></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  )
}