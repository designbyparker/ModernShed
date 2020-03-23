import React from 'react';
import Head from 'next/head';
import Nav from '../components/home/nav';
import HamburgerNav from '../components/global/hamburger-nav';
import DesktopCarousel from '../components/home/carousel';
import MobileCarousel from '../components/home/mobile-carousel';
import WhatWeDo from '../components/home/what-we-do';
import WhatWeDoMobile from '../components/home/what-we-do-mobile';
import FeaturedHome from '../components/home/featured-home';
import Tailored from '../components/home/tailored';
import TheDifference from '../components/home/thedifference';
import ContactCTA from '../components/global/contact-cta';
import Newsletter from '../components/global/newsletter';
import Footer from '../components/global/footer';

import fetch from 'isomorphic-unfetch';

const Index = (props) => {

  return(
    <div>
      <Head>
        <title>Modern Shed</title>
      </Head>
      <Nav className="desktop-query"/>
      <HamburgerNav className="mobile-query"/>
      <DesktopCarousel className="desktop-query"/>
      <MobileCarousel className="mobile-query"/>
      <WhatWeDo/>
      <WhatWeDoMobile/>
      <FeaturedHome featured={props.sheds}/>
       {/*<Tailored/>
      <TheDifference/>
      <ContactCTA buttontext="Inquire →"/>
      <Newsletter/> 
      <Footer/> */}
    </div>
  );
}


Index.getInitialProps = async function() {
  const res = await fetch('https://modern-shed.com/services/homefeatured');
  const sheds = await res.json();

  return {
    sheds: sheds
  }
}


export default Index;