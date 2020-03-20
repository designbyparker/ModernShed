import Footer from '../components/global/footer';
import Nav from '../components/global/hamburger-nav';
import Head from 'next/head'
import '../styles/theme.css';



const Press = () => {
  return(
    <section id="press-page" className="aux-page">
    <Head>
        <title>Modern Shed | Press</title>
    </Head>
    <h1>LEGAL</h1>
    <Nav/>
    <section className="aux-page">
      <div className="aux-deck">
      </div>
    </section>
  <Footer/>
  </section>
  );
}

export default Press;
