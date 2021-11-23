import { Container, Row, Col } from "react-bootstrap";
import Image from "../images/eth_bridge.png";

export function Bridge() {
  return (
    <section id="bridge" className="border-bottom border-secondary bg-secondary">
      <Container className="pt-5 pb-5">
        <Row className="pt-5 pb-5" xs={1} md={2}>
          <Col className="d-flex justify-content-center align-items-center">
            <img src={Image} alt="ETH Bridge" width="256" height="256" />
          </Col>
          <Col className="d-flex align-items-center">
            <div>
              <h2><span className="text-primary">ETH</span> Bridge.</h2>
              <p>
                In Q2 2022, the project plans to deliver an ETH Bridge
                connecting directly to your wallet for fast, cheap, & secure
                transfers of assets to and from the BSC and Ethereum Networks.
                Allowing you to convert your assets (ERC20, ERC711, ERC1155)
                with 100% proof of value.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
