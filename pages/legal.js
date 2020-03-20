import Footer from '../components/global/footer';
import Nav from '../components/global/hamburger-nav';
import Head from 'next/head';
import '../styles/theme.css';



const Legal = () => {
  return(
    <Head>
      <title>Modern Shed | Legal</title>
    </Head>
    <section id="legal-page" className="aux-page">
    <h1>LEGAL</h1>
    <Nav/>
    <section className="aux-section">
      <div className="aux-deck">
      </div>
    </section>
  <Footer/>
  </section>
  );
}

export default Legal;
