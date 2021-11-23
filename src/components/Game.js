import { Container, Row, Col } from "react-bootstrap";
import Image from "../images/p2e_game.png";

export function Game() {
  return (
    <section id="game" className="border-bottom border-secondary">
      <Container className="pt-5 pb-5">
        <Row className="pt-5 pb-5">
          <Col className="d-flex align-items-center">
            <div>
              <h2>
                <span className="text-primary">P2E</span> Game.
              </h2>
              <p>
                In Q1 2022, the project plans to deliver a play-to-earn game
                centered around the theme of robbing cryptocurrencies. An
                integration with the NFTs is planned.
              </p>
            </div>
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <img src={Image} alt="P2E Game" width="256" height="256" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
