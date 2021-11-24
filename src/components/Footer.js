import { Container, Row, Col, Nav } from "react-bootstrap";

export function Footer() {
  return (
    <section className="border-top border-light bg-secondary">
      <Container className="pt-3 pb-1">
        <Row>
          <Col>
            <Nav className="footer-nav">
              <Nav.Link href="#lottery">Lottery</Nav.Link>
              <Nav.Link href="#nft">NFT Collection</Nav.Link>
              <Nav.Link href="#game">P2E Game</Nav.Link>
              <Nav.Link href="#bridge">ETH Bridge</Nav.Link>
              <Nav.Link href="#tokenomics">Tokenomics</Nav.Link>
              <Nav.Link href="#audit">Audit</Nav.Link>
              <Nav.Link href="#roadmap">Roadmap</Nav.Link>
              <Nav.Link href="#team">Team</Nav.Link>
            </Nav>
            <p>© Copyright MoneyHeistToken 2021. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
