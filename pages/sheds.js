import ShedsHero from '../components/global/page-hero';
import ContactCTA from '../components/global/contact-cta';
import HamburgerNav from '../components/global/hamburger-nav';
import Uses from '../components/sheds/uses';
import Sizes from '../components/sheds/sizes';
import Materials from '../components/sheds/materials';
import Doors from '../components/sheds/doors';
import Newsletter from '../components/global/newsletter';
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