import { Container, Row, Col } from "react-bootstrap";
import Image from '../images/nft_collection.png';

export function NFTCollection() {
  return (
    <section id="nft" className="border-bottom border-secondary bg-secondary">
      <Container className="pt-5 pb-5">
        <Row className="pt-5 pb-5">
          <Col className="d-flex justify-content-center align-items-center">
            <img src={Image} alt="NFT Collection" width="256" height="256" />
          </Col>
          <Col>
            <h2><span className="text-primary">NFT</span> Collection.</h2>
            <p>Within two weeks of launch, a NFT Collection centered around the Money Heist theme will be released.</p>
            <p>Every NFT will have a set of traits such as:</p>
            <ul className="list-unstyled">
              <li>Gender</li>
              <li>Body Type</li>
              <li>Skin Color</li>
              <li>Hair Style</li>
              <li>Facial Hair</li>
              <li>Glasses</li>
              <li>Weapons</li>
              <li>Background</li>
            </ul>
            <p>Different traits will cause the NFT to be more unique and rare.</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}