import { Container, Row, Col } from "react-bootstrap";

export function Roadmap() {
  return (
    <section id="roadmap" className="border-bottom border-secondary">
      <Container className="pt-5 pb-5">
        <Row>
          <Col className="text-center">
            <h2>
              <span className="text-primary">Roadmap.</span>
            </h2>
          </Col>
        </Row>
        <Row xs={1} md={2} lg={4}>
          <Col className="pt-5">
            <h3>
              Phase <span className="text-primary">1.</span>
            </h3>
            <ul className="list-unstyled">
              <li>
                <strike className="text-primary">
                  40 BNB Private Sale
                </strike>
              </li>
              <li>
                <strike className="text-primary">
                  Website
                </strike>
              </li>
              <li>
                <strike className="text-primary">
                  Twitter Socials
                </strike>
              </li>
              <li>
                <strike className="text-primary">
                  Telegram Socials
                </strike>
              </li>
              <li>
                <strike className="text-primary">
                  Dox Video
                </strike>
              </li>
              <li>
                <strike className="text-primary">
                  KYC with Pinksale
                </strike>
              </li>
              <li>
                <strike className="text-primary">
                  NFT Conception
                </strike>
              </li>
              <li>
                <strike className="text-primary">
                  6x Telegram AMA
                </strike>
              </li>
              <li>
                <strike className="text-primary">
                  
                    Telegram Callgroup Marketing
                  
                </strike>
              </li>
              <li>
                <strike className="text-primary">
                  250 BNB Presale
                </strike>
              </li>
              <li>
                <strike className="text-primary">
                  Launch
                </strike>
              </li>
            </ul>
          </Col>
          <Col className="pt-5">
            <h3>
              Phase <span className="text-primary">2.</span>
            </h3>
            <ul className="list-unstyled">
              <li><strike className="text-primary">CoinMarketingCap Application</strike></li>
              <li><strike className="text-primary">CoinGecko Application</strike></li>
              <li><strike className="text-primary">Twitter Influencer Marketing</strike></li>
              <li><strike className="text-primary">Telegram Callgroup Marketing</strike></li>
              <li><strike className="text-primary">Reddit Top 3 Trending</strike></li>
              <li><strike className="text-primary">DEX Trending</strike></li>
              <li>Press Release Submissions</li>
              <li>Poocoin Marketing</li>
              <li>YouTube Marketing</li>
              <li>NFT Design Iteration</li>
              <li>Stage 1 Exchange Application</li>
            </ul>
          </Col>
          <Col className="pt-5">
            <h3>
              Phase <span className="text-primary">3.</span>
            </h3>
            <ul className="list-unstyled">
              <li><strike className="text-primary">CoinMarketingCap Listing</strike></li>
              <li>CoinGecko Application</li>
              <li>Press Releases Published</li>
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
              Phase <span className="text-primary">4.</span>
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
