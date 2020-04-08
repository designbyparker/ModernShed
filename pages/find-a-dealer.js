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
    console.log(typeof e.target.ZipCode.value);
    superagent.get('https://modern-shed.com/contactus/getdealers')
    .query({zipcode: e.target.ZipCode.value})
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error);
    })
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
        <form  onSubmit={handleSubmit}>
          <label>ZIP CODE</label>
          <input type="text" id="ZipCode" placeholder="Zip Code" required={true}/>
          <button type="submit" className="primary-button" >Search Dealers →</button>
        </form>

{/* 
      <div id="results-deck">

        <div className="results-card">
          <p>DEALER INFORMATION</p>
          <div className="dealer-info" id="dealer-name">
            <p>NAME</p>
            <h2>Mike Probach</h2>
          </div>
          <div className="dealer-info" id="dealer-company">
            <p>COMPANY</p>
            <h2>Modern Shed, Inc</h2>
          </div>
          <div className="dealer-info" id="dealer-phone">
            <p>PHONE NUMBER</p>
            <h2>(206) 449-9808</h2>
          </div>
          <div className="dealer-info" id="dealer-email">
            <p>EMAIL</p>
            <h2>mike@modern-shed.com</h2>
          </div>
        </div>

      </div> */}

      </section>
    </section>

    <Footer/>
    <MobileFooter/>
  </>
  )
}

export default FindADealer;

