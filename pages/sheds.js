import ShedsHero from '../components/global/page-hero';
import ContactCTA from '../components/global/contact-cta';
import HamburgerNav from '../components/global/hamburger-nav';
import '../styles/theme.css';

const Sheds = () => {
  return(
    <section>
      <HamburgerNav />
      <ShedsHero id="sheds-hero" page="SHEDS" copy="Modern Shed provides solutions for both limited living as well as permanent dwellings. "/>

      <ContactCTA buttontext="Inquire →"/>
    </section>
  )
}

export default Sheds;