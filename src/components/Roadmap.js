import { Container, Row, Col } from "react-bootstrap";

export function Roadmap() {
  return (
    <section id="roadmap" className="border-bottom border-secondary">
      <Container className="pt-5 pb-5">
        <Row>
          <Col className="text-center">
            <h2>
              <span className="text-primary">Road</span>map.
            </h2>
          </Col>
        </Row>
        <Row xs={1} md={2} lg={4}>
          <Col className="pt-5">
            <h3>
              Phase <span className="text-primary">1</span>.
            </h3>
            <ul className="list-unstyled">
              <li>
                <strike className="text-primary">
                  <span className="text-body">40 BNB Private Sale</span>
                </strike>
              </li>
              <li>
                <strike className="text-primary">
                  <span className="text-body">Website</span>
                </strike>
              </li>
              <li>
                <strike className="text-primary">
                  <span className="text-body">Twitter Socials</span>
                </strike>
              </li>
              <li>
                <strike className="text-primary">
                  <span className="text-body">Telegram Socials</span>
                </strike>
              </li>
              <li>
                <strike className="text-primary">
                  <span className="text-body">Dox Video</span>
                </strike>
              </li>
              <li>
                <strike className="text-primary">
                  <span className="text-body">KYC with Pinksale</span>
                </strike>
              </li>
              <li>
                <strike className="text-primary">
                  <span className="text-body">NFT Conception</span>
                </strike>
              </li>
              <li>
                <strike className="text-primary">
                  <span className="text-body">6x Telegram AMA</span>
                </strike>
              </li>
              <li>
                <strike className="text-primary">
                  <span className="text-body">
                    Telegram Callgroup Marketing
                  </span>
                </strike>
              </li>
              <li>
                <strike className="text-primary">
                  <span className="text-body">250 BNB Presale</span>
                </strike>
              </li>
              <li>
                <strike className="text-primary">
                  <span className="text-body">Launch</span>
                </strike>
              </li>
            </ul>
          </Col>
          <Col className="pt-5">
            <h3>
              Phase <span className="text-primary">2</span>.
            </h3>
            <ul className="list-unstyled">
              <li><strike className="text-primary">CoinMarketingCap Application</strike></li>
              <li><strike className="text-primary">CoinGecko Application</strike></li>
              <li><strike className="text-primary">Twitter Influencer Marketing</strike></li>
              <li><strike className="text-primary">Telegram Callgroup Marketing</strike></li>
              <li><strike className="text-primary">Reddit Top 3 Trending</strike></li>
              <li><strike className="text-primary">DEX Trending</strike></li>
              <li>Press Releases</li>
              <li>Poocoin Marketing</li>
              <li>YouTube Marketing</li>
              <li>NFT Design Iteration</li>
              <li>Stage 1 Exchange Application</li>
            </ul>
          </Col>
          <Col className="pt-5">
            <h3>
              Phase <span className="text-primary">3</span>.
            </h3>
            <ul className="list-unstyled">
              <li><strike className="text-primary">CoinMarketingCap Listing</strike></li>
              <li>CoinGecko Application</li>
              <li>NFT Collection Release</li>
              <li>Twitter Trending</li>
              <li>CoinMarketingCap Trending</li>
              <li>DEX Trending</li>
              <li>Poocoin Marketing</li>
              <li>Piggy-Back on Season Launch (3rd Dec)</li>
            </ul>
          </Col>
          <Col className="pt-5">
            <h3>
              Phase <span className="text-primary">4</span>.
            </h3>
            <ul className="list-unstyled">
              <li>Stage 1 Exchange Listing</li>
              <li>Stage 2 Exchange Application</li>
              <li>P2E Game Development</li>
              <li>ETH Bridge Development</li>
              <li>Ongoing Marketing</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
