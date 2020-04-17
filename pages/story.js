import HamburgerNav from '../components/global/hamburger-nav';
import MobileHamburgerNav from '../components/global/mobile-hamburger-nav';
import PageHero from '../components/global/page-hero';
import PageTransistion from '../components/global/page-transistion';
import Head from 'next/head'
import ContactCTA from '../components/global/contact-cta';
import Founders from '../components/our-story/founders';
import OurTeam from '../components/our-story/our-team';
import OurTeamCarousel from '../components/our-story/our-team-carousel';
import Footer from '../components/global/footer';
import MobileFooter from '../components/global/mobile-footer';
import {useEffect, useState} from 'react';
import '../styles/theme.css';
import fetch from 'isomorphic-unfetch';

const Story = (props) => {
  const [transistionClass, setTransistion] = useState('show');
  
  useEffect(() => {
    setTimeout(() => {
      return setTransistion('hide');
    }, 2000);
  })


  return(
    <>
      <Head>
        <title>Modern Shed | Our Story</title>
      </Head>
      <PageHero 
        copy="We empathize with the problem of a limited living space. Modern-Shed was born from experience, re-envisioning how we design studios to purposely reflect our natural rhythms."
        page="OUR STORY"
        id="our-story-hero"
        />
      <HamburgerNav navClass="story-nav"/>
      <MobileHamburgerNav/>
      <PageTransistion page="Our Story" show={transistionClass}/>
      <Founders/>
      <OurTeam staff={props.staff}/>
      <OurTeamCarousel staff={props.staff}/>
      <ContactCTA buttontext="Inquire →"/>
      <Footer/>
      <MobileFooter/>
    </>
  )
}

export default Story;


Story.getInitialProps = async function(){

  const res = await fetch('https://modern-shed.com/services/staff');
  const staff = await res.json();

  return {
    staff:staff
  }
}