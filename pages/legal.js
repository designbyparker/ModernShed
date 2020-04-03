import Footer from '../components/global/footer';
import MobileFooter from '../components/global/mobile-footer';
import Nav from '../components/global/hamburger-nav';
import MobileHamburgerNav from '../components/global/mobile-hamburger-nav';
import Head from 'next/head';
import '../styles/theme.css';



const Legal = () => {
  return(
  <>
    <Head>
      <title>Modern Shed | Legal</title>
    </Head>
    <section id="legal-page" className="aux-page">
    <h1>LEGAL</h1>
    <Nav/>
    <MobileHamburgerNav/>
    <section className="aux-section">
      <div className="aux-deck">
        <div>
          <h4>Modern Shed takes your privacy seriously. We do NOT sell or give your information away to anyone outside the Modern Shed umbrella. The information we collect; your name, phone #, city and email address are necessary components in order to direct the correct person(s) to contact you. This information is required as you have chosen to be contacted or have chosen to download our catalog expressing interest to purchase our product. Your information is passed from the corporation to the appropriate design professional for your convenience. It is the policy of Modern Shed to contact its interested potential clients within 24 hours of submitting a request form. If at any time you wish to be removed from our email / mail list please email us at info@modern-shed.com and type “remove me” in the subject line. Be sure to include your email address from which you were originally contacted or we will not be able to identify you in our database. We will never ask you for banking or account information in an email. We do not offer prizes or gifts in exchange for your information.</h4>
        </div>
      </div>
    </section>
  <Footer/>
  <MobileFooter/>
  </section>
</>
  );
}

export default Legal;
