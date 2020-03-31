import HamburgerNav from '../components/global/hamburger-nav';
import MobileHamburgerNav from '../components/global/mobile-hamburger-nav';
import PageHero from '../components/global/page-hero';
import Head from 'next/head'
import ContactCTA from '../components/global/contact-cta';
import OurTeam from '../components/our-story/our-team';
import Footer from '../components/global/footer';
import MobileFooter from '../components/global/mobile-footer';
import '../styles/theme.css';
import fetch from 'isomorphic-unfetch';

const Story = (props) => {
  console.log(props.staff);
  return(
    <>
      <Head>
        <title>Modern Shed | Story</title>
      </Head>
      <PageHero 
        copy="We empathize with the problem of a limited living space. Modern-Shed was born from experience, re-envisioning how we design a home to purposely reflect our natural rhythms."
        page="OUR STORY"
        id="our-story-hero"
        />
      <HamburgerNav />
      <MobileHamburgerNav/>
      <OurTeam staff={props.staff}/>
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