import { Container, Row, Col } from "react-bootstrap";
import Image from '../images/mht_logo.png';

export function Legal() {
  return (
    <section>
      <Container className="pt-5 pb-5">
        <Row>
          <Col>
            <div>
              <h4>Legal Disclaimer.</h4>
              <p>None of the information on this website should be construed as providing legal or financial advice. Please note there are always risks associated with smart contracts. Please use at your own risk. MoneyHeistToken is not a registered broker, analyst or investment advisor. If you have purchased $MHT, you agree that you are not purchasing a security or investment. The MoneyHeistToken team can not be held liable for any losses or taxes you may incur. Do conduct your own due diligence and consult your financial advisor before making any investment decision.</p>
            </div>
          </Col>
          <Col className="d-flex justify-content-end">
            <img src={Image} alt="$MHT Logo" width="128" height="128" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}