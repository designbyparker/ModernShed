import React from 'react';
import Nav from '../components/nav';
import Carousel from '../components/carousel';
import MobileCarousel from '../components/mobileCarousel';
import '../styles/theme.css';

function Index(){
  return(
    <div>
      <Nav/>
      {/* <Carousel /> */}
      <MobileCarousel/>
    </div>
  );
}

export default Index;