import HamburgerNav from '../components/global/hamburger-nav';
import ProcessCard from '../components/process/process-card';
import MobileProcessCard from '../components/process/mobile-process-card';
import ContactCTA from '../components/global/contact-cta';
import ProcessHero from '../components/global/page-hero';
import Footer from '../components/global/footer';
import Head from 'next/head'
import FeaturedShedsCarousel from '../components/process/featured-sheds-carousel';
import fetch from 'isomorphic-unfetch';
import '../styles/theme.css';

const Process = (props) => {
  return (
    <section>
      <Head>
        <title>Modern Shed | Process</title>
      </Head>
      <HamburgerNav/>
      <ProcessHero id="process-hero" page="PROCESS" copy="We understand you have a plan, and we’re here to turn potential into reality. Each shed is crafted intentionally to give your imagination a little room."/>

      <section id="process-layout">
        <ProcessCard
          step="Step 01"
          subheader="Introduction"
          image="https://dummyimage.com/570x458/000/fff"
          alt="Lorem Ipsum"
          copy="Let’s chat. Our design professionals are at your service—eager to hear your story and come up with a course of action. Permit plans and engineering are available for projects that require a building permit."
        /> 

        <MobileProcessCard
          step="Step 01"
          subheader="Introduction"
          image="https://dummyimage.com/570x458/000/fff"
          alt="Lorem Ipsum"
          copy="Let’s chat. Our design professionals are at your service—eager to hear your story and come up with a course of action. Permit plans and engineering are available for projects that require a building permit."
          id="border"
        /> 

        <ProcessCard
        step="Step 02"
        subheader="Design & Assessment"
        image="https://dummyimage.com/375x457/000/fff"
        alt="Lorem Ipsum"
        timeframe="4 to 6 Weeks"
        copy="Once you’ve approved the design and we’ve fit it perfectly to your needs, your shed will be scheduled for production. Here we go!"/>   

        <MobileProcessCard
        step="Step 02"
        subheader="Design & Assessment"
        image="https://dummyimage.com/375x457/000/fff"
        alt="Lorem Ipsum"
        timeframe="4 to 6 Weeks"
        copy="Once you’ve approved the design and we’ve fit it perfectly to your needs, your shed will be scheduled for production. Here we go!"
        id="border"
        />   
        
        <ProcessCard
        step="Step 03"
        subheader="Fulfillment"
        image="https://dummyimage.com/570x458/000/fff"
        alt="Lorem Ipsum"
        copy="The components for your shed are either loaded into one of our enclosed trailers for west coast delivery, or forklifted onto a commercial truck for shipment."/>  

        <MobileProcessCard
        step="Step 03"
        subheader="Fulfillment"
        image="https://dummyimage.com/570x458/000/fff"
        alt="Lorem Ipsum"
        copy="The components for your shed are either loaded into one of our enclosed trailers for west coast delivery, or forklifted onto a commercial truck for shipment."
        id="border"
        />    

        <ProcessCard
        step="Step 04"
        subheader="Construction"
        image="https://dummyimage.com/375x457/000/fff"
        alt="Lorem Ipsum"
        timeframe="1 to 2 Weeks"
        copy="It’s really up to you: one of our authorized installers or a contractor of your choosing will install your new Modern-Shed. The time frame is reliant on several factors we’ll be able to communicate depending on your specific vision."
        />  

        <MobileProcessCard
        step="Step 04"
        subheader="Construction"
        image="https://dummyimage.com/375x457/000/fff"
        alt="Lorem Ipsum"
        timeframe="1 to 2 Weeks"
        copy="It’s really up to you: one of our authorized installers or a contractor of your choosing will install your new Modern-Shed. The time frame is reliant on several factors we’ll be able to communicate depending on your specific vision."
        />  

      </section>
      <FeaturedShedsCarousel featured={props.sheds} /> 
      <ContactCTA buttontext="Inquire →"/>
      <Footer/>
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