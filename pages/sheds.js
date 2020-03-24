import ShedsHero from '../components/global/page-hero';
import ContactCTA from '../components/global/contact-cta';
import MobileContactCTA from '../components/global/mobile-contact-cta'; 
import HamburgerNav from '../components/global/hamburger-nav';
import Uses from '../components/sheds/uses';
import MobileUses from '../components/sheds/mobile-uses';
import Sizes from '../components/sheds/sizes';
import Materials from '../components/sheds/materials';
import Doors from '../components/sheds/doors';
import Newsletter from '../components/global/newsletter';
import MobileFooter from '../components/global/mobile-footer'
import Footer from '../components/global/footer';
import Head from 'next/head'
import '../styles/theme.css';

const Sheds = () => {
  return(
    <section>
      <Head>
        <title>Modern Shed | Sheds</title>
      </Head>
      <HamburgerNav />
      <ShedsHero id="sheds-hero" page="SHEDS" copy="Let’s revise your living space with abundance in mind. "/>
      <Uses/>
      <MobileUses/>
      {/* <Sizes />
      <ContactCTA buttontext="Inquire →"/>
      <MobileContactCTA buttontext="Inquire →"/>
      <Materials/>
      <Doors/>
      <Newsletter/>
      <MobileFooter/>
      <Footer/> */}
    </section>
  )
}

export default Sheds;