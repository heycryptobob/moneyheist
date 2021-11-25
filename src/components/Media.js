import { Container, Row, Col } from "react-bootstrap";
import WatcherGuru from '../images/watcher_guru.png';
import Coinsniper from '../images/coinsniper.png';
import Coinhunt from '../images/coinhunt.png';
import CMC from '../images/cmc.png';
import Crypto from '../images/crypto.png';

const items = [
  {
    href: "https://coinmarketcap.com/currencies/money-heist",
    src: CMC,
    alt: "CoinMarketCap",
  },
  {
    href: "https://crypto.com/price/money-heist",
    src: Crypto,
    alt: "Crypto.com",
  },
  {
    href: "https://watcher.guru/coin/money-heist-token",
    src: WatcherGuru,
    alt: "Watcher.guru",
  },
  {
    href: "https://coinsniper.net/coin/19844",
    src: Coinsniper,
    alt: "Coinsniper.net",
  },
  {
    href: "https://coinhunt.cc/coin/2066059692",
    src: Coinhunt,
    alt: "Coinhunt.cc",
  },
];

function MediaItem({ media }) {
  return (
    <Col className="text-center">
      <a href={media.href} target="_blank" rel="noreferrer">
        <img src={media.src} alt={media.alt} className="grayscale" width="128" height="64" />
      </a>
    </Col>
  );
}

export function Media() {
  return (
    <section className="bg-white">
      <Container className="pt-3 pb-3">
        <Row className="justify-content-center">
          {items.map((item, key) => (
            <MediaItem media={item} key={key} />
          ))}
        </Row>
      </Container>
    </section>
  );
}
