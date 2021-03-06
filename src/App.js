import './App.scss';
import { Audit } from './components/Audit';
import { Bridge } from './components/Bridge';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Game } from './components/Game';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Legal } from './components/Legal';
import { Lottery } from './components/Lottery';
import { NFTCollection } from './components/NFTCollection';
import { Roadmap } from './components/Roadmap';
import { Tokenomics } from './components/Tokenomics';
import ReactGA from "react-ga4";
import { Media } from './components/Media';
import { Twitter } from './components/Twitter';
import { Team } from './components/Team';

ReactGA.initialize("G-8M507FWXLW");
ReactGA.send("pageview");

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Media />
      <Lottery />
      <Twitter />
      <NFTCollection />
      <Game />
      <Bridge />
      <Tokenomics />
      <Audit />
      <Roadmap />
      <Team />
      <Contact />
      <Legal />
      <Footer />
    </>
  );
}

export default App;
