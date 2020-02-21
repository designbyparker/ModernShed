import React from 'react';
import Nav from '../components/nav';
import DesktopCarousel from '../components/carousel';
import MobileCarousel from '../components/mobileCarousel';
import { Max, Min } from '../components/mediaquery';
import '../styles/theme.css';

function Index(){
  return(
    <div>
      <Nav/>
      <Min media={600}>
        <DesktopCarousel />
      </Min>
     
      <Max media={599}>
        <MobileCarousel/>
      </Max>
    </div>
  );
}

export default Index;