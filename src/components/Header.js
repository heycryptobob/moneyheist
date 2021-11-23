import { Navbar, Container, Nav } from "react-bootstrap";
import Image from '../images/mht_logo.png';

export function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">
        <img src={Image} alt="$MHT Logo" width="64" height="64" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="me-auto">
            <Nav.Link href="#lottery">Lottery</Nav.Link>
            <Nav.Link href="#nft">NFT Collection</Nav.Link>
            <Nav.Link href="#game">P2E Game</Nav.Link>
            <Nav.Link href="#bridge">ETH Bridge</Nav.Link>
            <Nav.Link href="#tokenomics">Tokenomics</Nav.Link>
            <Nav.Link href="#audit">Audit</Nav.Link>
            <Nav.Link href="#roadmap">Roadmap</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
