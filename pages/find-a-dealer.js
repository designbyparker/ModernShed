import Footer from '../components/global/footer';
import MobileFooter from '../components/global/mobile-footer';
import Nav from '../components/global/hamburger-nav';
import Hero from '../components/global/page-hero';
import MobileHamburgerNav from '../components/global/mobile-hamburger-nav';
import Head from 'next/head';
import PageTransistion from '../components/global/page-transistion';
import superagent from 'superagent';
import When from '../components/global/conditionals';
import {useState, useEffect} from 'react';

import '../styles/theme.css';

const FindADealer = () => {

  const [dealers, setDealers] = useState(null);
  const [buttonText, setButtonText] = useState('Search Dealers →')
  const [transistionClass, setTransistion] = useState('show');
  
  useEffect(() => {
    setTimeout(() => {
      return setTransistion('hide');
    }, 2000);
  })


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(typeof e.target.ZipCode.value);
    superagent.get('https://modern-shed.com/api/dealer')
    .query({zipcode: e.target.ZipCode.value})
    .then(response => {
      let result = JSON.parse(response.body);
      setButtonText('Dealers ↓')
      return setDealers(result);
    })
    .catch(error => {
      console.log(error);
    })
  }

  console.log(dealers);
  return(
   <> 
    <Head>
      <title>Modern Shed | Find A Dealer</title>
    </Head>
    <Nav/>
    <MobileHamburgerNav/>
    <Hero id="dealer-hero" page="FIND A DEALER" copy="Connect with a dealer in your area."/>
    <PageTransistion page="Find A Dealer" show={PageTransistion}/>
    <section id="dealer-body">
      <section id="dealer-left-col">
        <div className="image-container">
          <img src="https://dummyimage.com/570x450/000/fff" alt="some placeholder text"/>
        </div>
      </section>

      <section id="dealer-right-col">
      <p className="form-headline" id="dealer-headline">LOCATION</p>
        <form  onSubmit={handleSubmit}>
          <label>ZIP CODE</label>
          <input type="text" id="ZipCode" placeholder="Zip Code" required={true}/>
          <button type="submit" className="primary-button" >{buttonText}</button>
        </form>

    <When condition={dealers}>
    <div id="results-deck">
      {dealers ? dealers.map(dealer => {
        let emails = dealer.email.split(',');
        console.log('emails', emails);
       return(
        <div className="results-card">
          <p>DEALER INFORMATION</p>
          <div className="dealer-info" id="dealer-name">
            <p>NAME</p>
            <h2>{dealer.first_name} {dealer.last_name}</h2>
          </div>
          <div className="dealer-info" id="dealer-company">
            <p>COMPANY</p>
            <h2>{dealer.company}</h2>
          </div>
          <div className="dealer-info" id="dealer-phone">
            <p>PHONE NUMBER</p>
            <h2>{dealer.phone}</h2>
          </div>
          <div className="dealer-info" id="dealer-email">
            <p>EMAIL</p>
            <h2>{emails[0]}</h2>
          </div>
        </div>
      );
 
       }) : console.log('no dealer')}
       </div> 
    </When>
      </section>
    </section>

    <Footer/>
    <MobileFooter/>
  </>
  )
}

export default FindADealer;

