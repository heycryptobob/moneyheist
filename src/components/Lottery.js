import { Container, Row, Col } from "react-bootstrap";
import Image from '../images/mht_logo.png';

export function Lottery() {
  return (
    <section id="lottery" className="border-bottom border-secondary">
      <Container className="pt-5 pb-5">
        <Row className="pt-5 pb-5" xs={1} md={2}>
          <Col>
            <h2><span className="text-primary">Rob</span> The Bank.</h2>
            <p>Every week, a heist will take place. The the bank vault will contain 1% of the total volume transacted.</p>
            <p>Eight randomly selected holders will be for the heist and will split the loot.</p>
            <p>To be eligible, you must be a diamondhand, fulfilling two conditions:</p>
            <ul className="list-unstyled">
              <li>You must be holding since at least 5 days</li>
              <li>You must not have sold in the last 5 days</li>
            </ul>
            <p>Four (4) of the holders will be selected from the Top 100 holders.</p>
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <img src={Image} alt="$MHT Logo" width="256" height="256" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}