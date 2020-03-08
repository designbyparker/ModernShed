import ShedsHero from '../components/global/page-hero';
import ContactCTA from '../components/global/contact-cta';
import HamburgerNav from '../components/global/hamburger-nav';
import Uses from '../components/sheds/uses';
import Sizes from '../components/sheds/sizes';
import '../styles/theme.css';

const Sheds = () => {
  return(
    <section>
      <HamburgerNav />
      <ShedsHero id="sheds-hero" page="SHEDS" copy="Modern Shed provides solutions for both limited living as well as permanent dwellings. "/>
      <Uses/>
      <Sizes />
      <ContactCTA buttontext="Inquire →"/>
    </section>
  )
}

export default Sheds;