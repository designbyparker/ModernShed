import HamburgerNav from '../components/global/hamburger-nav';
import MobileHamburgerNav from '../components/global/mobile-hamburger-nav';
import PageTransistion from '../components/global/page-transistion';
import ProcessCard from '../components/process/process-card';
import MobileProcessCard from '../components/process/mobile-process-card';
import ContactCTA from '../components/global/contact-cta';
import MobileContactCTA from '../components/global/mobile-contact-cta';
import ProcessHero from '../components/global/page-hero';
import Newsletter from '../components/global/newsletter';
import Footer from '../components/global/footer';
import MobileFooter from '../components/global/mobile-footer';
import Head from 'next/head'
import FeaturedShedsCarousel from '../components/process/featured-sheds-carousel';
import fetch from 'isomorphic-unfetch';
import {useEffect, useState} from 'react';
import '../styles/theme.css';

const Process = (props) => {
  const [transistionClass, setTransistion] = useState('show');
  
  useEffect(() => {
    setTimeout(() => {
      return setTransistion('hide');
    }, 2000);
  })

  return (
    <section>
      <Head>
        <title>Modern Shed | Process</title>
      </Head>

      <MobileHamburgerNav/>
      <ProcessHero id="process-hero" page="PROCESS" copy="We understand you have a plan, and we’re here to turn potential into reality. Each shed is crafted intentionally to give your imagination a little room."/>
      <HamburgerNav navClass="process-nav"/>
      <PageTransistion show={transistionClass} page="Process" />
      <section id="process-layout">
        <ProcessCard
          step="Step 01"
          subheader="Design"
          image="/images/process/A_Process_Design.jpg"
          alt="Modern Shed design pro"
          copy="Our design professionals are ready to be at your service — eager to hear your story and come up with a course of action."
        /> 

        <MobileProcessCard
          step="Step 01"
          subheader="Design"
          image="/images/process/A_Process_Design.jpg"
          alt="Modern Shed design pro"
          copy="Our design professionals are ready to be at your service — eager to hear your story and come up with a course of action.."
          id="border"
        /> 

        <ProcessCard
        step="Step 02"
        subheader="Order"
        image="/images/process/B_Process_Order.jpg"
        alt="Order a shed"
        timeframe="5-7 Days"
        timeframeNote="* Timelines are approximate and dependant on the size of the structure"
        copy="Once you’ve approved the design and we’ve fit it perfectly to your vision, your shed will be scheduled for production. Here we go!"/>   

        <MobileProcessCard
        step="Step 02"
        subheader="Order"
        image="/images/process/B_Process_Order.jpg"
        alt="Order a shed"
        timeframe="5-7 Days"
        timeframeNote="* Timelines are approximate and dependant on the size of the structure"
        copy="Once you’ve approved the design and we’ve fit it perfectly to your vision, your shed will be scheduled for production. Here we go!"
        id="border"
        />   
        
        <ProcessCard
        step="Step 03"
        subheader="Fabricate"
        image="/images/process/C_Process_Fabricate.jpg"
        alt="pre-fabrication"
        copy="The high-quality materials of your shed are constructed in our factory by our expert team. We create in panels to make on-site assembly easy on you."/>  

        <MobileProcessCard
        step="Step 03"
        subheader="Fabricate"
        image="/images/process/C_Process_Fabricate.jpg"
        alt="pre-fabrication"
        copy="The high-quality materials of your shed are constructed in our factory by our expert team. We create in panels to make on-site assembly easy on you."
        id="border"
        />    

        <ProcessCard
        step="Step 04"
        subheader="Install"
        image="/images/process/D_Process_Install.jpg"
        alt="pre-fabricated shed installation"
        timeframe="3-7 Days"
        timeframeNote="* Timelines are approximate and dependant on the size of the structure"
        id="last-desktop-card"
        copy="One of our authorized installers or a contractor of your choosing will install your new Modern-Shed. Whichever you choose, we’re a phone call away to help with any part of the installation process."
        />  

        <MobileProcessCard
        step="Step 04"
        subheader="Install"
        image="/images/process/D_Process_Install.jpg"
        alt="pre-fabricated shed installation"
        timeframe="3-7 Days"
        timeframeNote="* Timelines are approximate and dependant on the size of the structure"
        copy="One of our authorized installers or a contractor of your choosing will install your new Modern-Shed. Whichever you choose, we’re a phone call away to help with any part of the installation process."
        />  

      </section>
     <FeaturedShedsCarousel featured={props.sheds} /> 
      <ContactCTA buttontext="Inquire →"/>
      <MobileContactCTA buttontext="Inquire →"/>
      <Newsletter/>
      <Footer/>
      <MobileFooter/>
    </section>
  );
}



Process.getInitialProps = async function(){
  const res = await fetch('https://modern-shed.com/services/shedfeatured');
  const sheds = await res.json();

  return{
    sheds: sheds
  }
}

export default Process;