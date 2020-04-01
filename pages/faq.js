import copy from '../copy/faq.json';
import Footer from '../components/global/footer';
import MobileFooter from '../components/global/mobile-footer';
import Nav from '../components/global/hamburger-nav';
import MobileHamburgerNav from '../components/global/mobile-hamburger-nav';
import Head from 'next/head';
import '../styles/theme.css';

const Faq = () => {
  return (
  <>
    <Head>
      <title>Modern Shed | FAQ</title>
    </Head>
    <section id="faq-page" className="aux-page">
      <h1>FAQ</h1>
      <Nav/>
      <MobileHamburgerNav/>
      <section className="aux-section">
        <div className="aux-deck">
          {copy.map(item => {
          return(
            <div key={item.question_id}>
              <h4>{item.question}</h4>
              <p>{item.answer}</p>
            </div>
          )
          })}
        </div>
      </section>
    <MobileFooter/>
    <Footer/>
    </section>
  </>
  )
}




export default Faq;
