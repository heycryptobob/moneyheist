import { Container, Row, Col } from "react-bootstrap";
import { Timeline } from "react-twitter-widgets";

export function Twitter() {
  return (
    <section>
      <Container className="pt-5 pb-5">
        <Row className="align-items-center">
          <Col className="d-flex justify-content-center">
            <Timeline
              dataSource={{
                sourceType: "Mention",
                screenName: "MoneyHeistoken",
              }}
              options={{
                height: "400",
                width: "400",
              }}
            />
          </Col>
          <Col>
            <h2>
              <span className="text-primary">Impact</span> Marketing.
            </h2>
            <p>
              The goal is to make sure that $MHT is visible to everyone active
              in the <span className="text-primary">BSC</span> space. In order
              to do that we will be <span className="text-primary">continuously</span> pushing out marketing
              activities. To succeed, we will need the support of the community. We will be using tools such as:
            </p>
            <ul className="list-unstyled">
              <li><span className="text-primary">DEX</span> Trending</li>
              <li><span className="text-primary">Press</span> Releases</li>
              <li><span className="text-primary">Poocoin</span> Marketing</li>
              <li><span className="text-primary">YouTube</span> Marketing</li>
              <li><span className="text-primary">Twitter</span> Marketing</li>
              <li><span className="text-primary">Telegram</span> Marketing</li>
              <li><span className="text-primary">CoinMarketingCap</span> Trending</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
