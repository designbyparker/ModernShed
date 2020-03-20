import Footer from '../components/global/footer';
import Nav from '../components/global/hamburger-nav';
import Head from 'next/head'
import '../styles/theme.css';



const Press = () => {
  return(
   <> 
    <Head>
      <title>Modern Shed | Press</title>
    </Head> 
    <section id="press-page" className="aux-page">
    <h1>LEGAL</h1>
    <Nav/>
    <section className="aux-page">
      <div className="aux-deck">
      </div>
    </section>
    <Footer/>
    </section>
  </> 
  );
}

export default Press;
