import ProcessCard from '../components/process-card';
import ContactCTA from '../components/contact-cta';
import ProcessHero from '../components/process-hero';
import '../styles/theme.css';

const Process = () => {
  return (
    <section >
      <ProcessHero/>
      <section id="process-layout">
      <ProcessCard
        step="Step 01"
        subheader="Introduction"
        image="https://via.placeholder.com/570x458"
        alt="Lorem Ipsum"
        copy="Contact one of our design professionals who will listen and design all the elements you desire into your Modern Shed. Permit plans and engineering are available for projects requring a building permit."
      /> 

      <ProcessCard
      step="Step 02"
      subheader="Design & Assessment"
      image="https://via.placeholder.com/375x457"
      alt="Lorem Ipsum"
      timeframe="4 to 6 Weeks"
      copy="Once you have approved the design your shed will be scheduled for production."/>   
      
      <ProcessCard
      step="Step 03"
      subheader="Fulfillment"
      image="https://via.placeholder.com/570x458"
      alt="Lorem Ipsum"
      copy="The components are either loaded into one  of our enclosed trailers for delivery up and down the west coast, or forklifted onto a commercial truck/trailer for shipment"/>   

      <ProcessCard
       step="Step 04"
       subheader="Construction"
       image="https://via.placeholder.com/375x457"
       alt="Lorem Ipsum"
       timeframe="1 to 2 Weeks"
       copy="Either one of our authorized installers or a contractor of your choosing will install your new Modern-Shed. The time frame depends on several factors."
      />  
      </section>
      <ContactCTA/>
    </section>
  );
}

export default Process;