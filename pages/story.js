import HamburgerNav from '../components/global/hamburger-nav';
import Head from 'next/head'
import '../styles/theme.css';

const Story = () => {
  return(
    <>
      <Head>
        <title>Modern Shed | Story</title>
      </Head>
      <HamburgerNav />
      <p>Our Story 😎</p>
    </>
  )
}

export default Story;