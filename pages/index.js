import React from 'react';
import Nav from '../components/nav';
import DesktopCarousel from '../components/carousel';
import MobileCarousel from '../components/mobile-carousel';
import WhatWeDo from '../components/whatwedo';
import Tailored from '../components/tailored';
import TheDifference from '../components/thedifference';
import ContactCTA from '../components/contact-cta';
import Newsletter from '../components/newsletter';
import '../styles/theme.css';

const Index = () => {

  return(
    <div>
      <Nav/>
      <DesktopCarousel className="desktop-query"/>
      <MobileCarousel className="mobile-query"/>
      <WhatWeDo/>
      <Tailored/>
      <TheDifference/>
      <ContactCTA buttontext="Inquire →"/>
      <Newsletter/>
    </div>
  );
}

export default Index;