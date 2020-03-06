import React from 'react';
import Nav from '../components/home/nav';
// import HamburgerNav from '../components/global/hamburger-nav';
import DesktopCarousel from '../components/home/carousel';
import MobileCarousel from '../components/home/mobile-carousel';
import WhatWeDo from '../components/home/what-we-do';
import Tailored from '../components/home/tailored';
import TheDifference from '../components/home/thedifference';
import ContactCTA from '../components/global/contact-cta';
import Newsletter from '../components/global/newsletter';
import Footer from '../components/global/footer';
import '../styles/theme.css';

const Index = () => {

  return(
    <div>
      <Nav className="desktop-query"/>
      {/* <HamburgerNav className="mobile-query"/> */}
      <DesktopCarousel className="desktop-query"/>
      <MobileCarousel className="mobile-query"/>
      <WhatWeDo/>
      <Tailored/>
      <TheDifference/>
      <ContactCTA buttontext="Inquire →"/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default Index;