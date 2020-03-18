import Footer from '../components/global/footer';
import Nav from '../components/global/hamburger-nav';
import '../styles/theme.css';



const Legal = () => {
  return(
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
