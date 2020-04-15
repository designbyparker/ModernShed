import articles from '../copy/articles.json';
import PageHero from '../components/global/page-hero';
import Footer from '../components/global/footer';
import MobileFooter from '../components/global/mobile-footer';
import Nav from '../components/global/hamburger-nav';
import MobileHamburgerNav from '../components/global/mobile-hamburger-nav';
import PageTransistion from '../components/global/page-transistion';
import Head from 'next/head'
import {useState, useEffect} from 'react';
import '../styles/theme.css';



const Press = () => {
  const [transistionClass, setTransistion] = useState('show');
  
  useEffect(() => {
    setTimeout(() => {
      return setTransistion('hide');
    }, 2000);
  })


  return(
   <> 
    <Head>
      <title>Modern Shed | Press</title>
    </Head> 
    <section id="press-page" className="aux-page">
    <Nav navClass="aux-nav"/>
    <MobileHamburgerNav/>
    <PageTransistion page="Press" show={transistionClass}/>
      <h1>PRESS</h1>

        <h4>Modern-Shed has been featured or mentioned in numerous publications and blogs. Check out the listings below.</h4>

      <div className="press-deck">
        <ul>
          {articles.map((article, index) => {
            return(
            <li key={article.article_id}>
              <a href={article.url} target="_blank">{article.article}</a>
            </li>
            )
          }) }
        </ul>
      </div>
    </section>
    <Footer/>
    <MobileFooter/>

  </> 
  );
}

export default Press;
