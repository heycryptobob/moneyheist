import { Container, Button, Row, Col } from "react-bootstrap";
import { Swap } from "./Swap";

export function Hero() {
  return (
    <section id="hero" className="border-bottom border-secondary">
      <Container className="d-flex justify-content-center align-items-center p-5">
        <Row>
          <Col className="text-center m-5 pt-5 pb-5">
            <h1>
              Ever fantasized about{" "}
              <strong className="text-primary">robbing a bank?</strong>
            </h1>
            <h5 className="mt-3">
              With <span className="text-primary">$MHT</span> you will get a
              chance every week.
            </h5>
            <div className="mt-5">
              <Button
                variant="outline-primary"
                size="lg"
                href="https://poocoin.app/tokens/0x71a0aecc1f92b942ac1a5e7fd297429495838345"
                target="_blank"
                rel="noreferrer"
              >
                The Chart
              </Button>
              <Button
                variant="outline-primary"
                size="lg"
                className="ms-2"
                href="https://t.me/moneyheistoken"
                target="_blank"
                rel="noreferrer"
              >
                Join Telegram
              </Button>
            </div>
            <div className="mt-5">
              <a
                href="https://bscscan.com/token/0x71A0aEcC1f92b942aC1a5e7fD297429495838345"
                target="_blank"
                rel="noreferrer"
              >
                Token Contract
              </a>
              {" | "}
              <a
                href="https://www.pinksale.finance/#/pinklock/record/3202?chain=BSC"
                target="_blank"
                rel="noreferrer"
              >
                Liquidity Lock
              </a>
            </div>
            <div className="mt-3">
              <code>0x71a0aecc1f92b942ac1a5e7fd297429495838345</code>
            </div>
          </Col>
          <Col>
            <Swap />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
