import React from 'react';
import Nav from '../components/nav';
import DesktopCarousel from '../components/carousel';
import MobileCarousel from '../components/mobileCarousel';
import WhatWeDo from '../components/whatwedo';
import '../styles/theme.css';

function Index(){

  return(
    <div>
      <Nav/>
      <DesktopCarousel className="desktop-query"/>
      <MobileCarousel className="mobile-query"/>
      <WhatWeDo/>
    </div>
  );
}

export default Index;