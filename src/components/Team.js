import { Container, Row, Col, Image } from "react-bootstrap";
import CryptoNikisha from "../images/CryptoNikisha.jpeg";
import HeyCryptoBob from "../images/HeyCryptoBob.jpeg";
import ModeLTU from "../images/ModeLTU.jpeg";

const members = [
  {
    avatar: ModeLTU,
    username: "Mode",
    href: "https://t.me/ModeLTU",
    role: "Project Owner",
  },
  {
    avatar: CryptoNikisha,
    username: "Nikisha",
    href: "https://t.me/CryptoNikisha",
    role: "Contract Dev",
  },
  {
    avatar: HeyCryptoBob,
    username: "Spaceman Bob",
    href: "https://t.me/heycryptobob",
    role: "Comms / Web Dev",
  },
];

function Member({ member }) {
  return (
    <Col className="text-center pt-5">
      <a href={member.href} target="_blank" rel="noreferrer" className="text-decoration-none">
        <Image
          src={member.avatar}
          width="128"
          height="128"
          roundedCircle
          className="mb-3"
        />
        <h5>{member.username}</h5>
        <p className="text-monospace">{member.role}</p>
      </a>
    </Col>
  );
}

export function Team() {
  return (
    <section id="team" className="border-bottom border-secondary">
      <Container className="pb-5">
        <Row className="pt-5">
          <Col className="text-center">
            <h2>
              The <span className="text-primary">Team</span>
            </h2>
          </Col>
        </Row>
        <Row>
          {members.map((member, key) => (
            <Member member={member} key={key} />
          ))}
        </Row>
      </Container>
    </section>
  );
}
