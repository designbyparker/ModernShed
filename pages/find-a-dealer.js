import Footer from '../components/global/footer';
import MobileFooter from '../components/global/mobile-footer';
import Nav from '../components/global/hamburger-nav';
import Hero from '../components/global/page-hero';
import MobileHamburgerNav from '../components/global/mobile-hamburger-nav';
import Head from 'next/head';
import superagent from 'superagent';

import '../styles/theme.css';

const FindADealer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

  }

  return(
   <> 
    <Head>
      <title>Modern Shed | Find A Dealer</title>
    </Head>
    <Nav/>
    <MobileHamburgerNav/>
    <Hero id="dealer-hero" page="FIND A DEALER" copy="Connect with a dealer in your area."/>

    <section id="dealer-body">
      <section id="dealer-left-col">
        <div className="image-container">
          <img src="https://dummyimage.com/570x450/000/fff" alt="some placeholder text"/>
        </div>
      </section>

      <section id="dealer-right-col">
      <p className="form-headline" id="dealer-headline">LOCATION</p>
        <form>
          <label>ZIP CODE</label>
          <input type="text" placeholder="Zip Code" required={true}/>
          <button type="submit" className="primary-button" onClick={handleSubmit}>Find A Dealer →</button>
        </form>
      </section>
    </section>

    <Footer/>
    <MobileFooter/>
  </>
  )
}

export default FindADealer;
