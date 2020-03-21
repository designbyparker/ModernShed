import HamburgerNav from '../components/global/hamburger-nav';
import ProcessCard from '../components/process/process-card';
import ContactCTA from '../components/global/contact-cta';
import ProcessHero from '../components/global/page-hero';
import Footer from '../components/global/footer';
import FeaturedShedsCarousel from '../components/process/featured-sheds-carousel';
import fetch from 'isomorphic-unfetch';
import '../styles/theme.css';

const Process = (props) => {
  return (
    <section >
      <Head>
        <title>Modern Shed | Process</title>
      </Head>
      <HamburgerNav/>
      <ProcessHero id="process-hero" page="PROCESS" copy="We understand every customer has their own use for our Sheds. Each Shed is tailored specifically to our customers’ unique needs."/>

      <section id="process-layout">
        <ProcessCard
          step="Step 01"
          subheader="Introduction"
          image="https://dummyimage.com/570x458/000/fff"
          alt="Lorem Ipsum"
          copy="Contact one of our design professionals who will listen and design all the elements you desire into your Modern Shed. Permit plans and engineering are available for projects requring a building permit."
        /> 

        <ProcessCard
        step="Step 02"
        subheader="Design & Assessment"
        image="https://dummyimage.com/375x457/000/fff"
        alt="Lorem Ipsum"
        timeframe="4 to 6 Weeks"
        copy="Once you have approved the design your shed will be scheduled for production."/>   
        
        <ProcessCard
        step="Step 03"
        subheader="Fulfillment"
        image="https://dummyimage.com/570x458/000/fff"
        alt="Lorem Ipsum"
        copy="The components are either loaded into one  of our enclosed trailers for delivery up and down the west coast, or forklifted onto a commercial truck/trailer for shipment"/>   

        <ProcessCard
        step="Step 04"
        subheader="Construction"
        image="https://dummyimage.com/375x457/000/fff"
        alt="Lorem Ipsum"
        timeframe="1 to 2 Weeks"
        copy="Either one of our authorized installers or a contractor of your choosing will install your new Modern-Shed. The time frame depends on several factors."
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