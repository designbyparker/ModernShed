import HamburgerNav from '../components/global/hamburger-nav';
import Head from 'next/head'
import '../styles/theme.css';
import MobileHamburgerNav from '../components/global/mobile-hamburger-nav';

const Story = () => {
  return(
    <>
      <Head>
        <title>Modern Shed | Story</title>
      </Head>
      <HamburgerNav />
      <MobileHamburgerNav/>
      <p>Our Story 😎</p>
    </>
  )
}

export default Story;