import ShedsHero from '../components/global/page-hero';
import ContactCTA from '../components/global/contact-cta';
import HamburgerNav from '../components/global/hamburger-nav';
import Uses from '../components/sheds/uses';
import Sizes from '../components/sheds/sizes';
import Materials from '../components/sheds/materials';
import Doors from '../components/sheds/doors';
import Newsletter from '../components/global/newsletter';
import Footer from '../components/global/footer';
import '../styles/theme.css';

const Sheds = () => {
  return(
    <section>
      <HamburgerNav />
      <ShedsHero id="sheds-hero" page="SHEDS" copy="Modern Shed provides solutions for both limited living as well as permanent dwellings. "/>
      <Uses/>
      <Sizes />
      <ContactCTA buttontext="Inquire →"/>
      <Materials/>
      <Doors/>
      <Newsletter/>
      <Footer/>
    </section>
  )
}

export default Sheds;