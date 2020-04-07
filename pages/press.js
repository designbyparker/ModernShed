import articles from '../copy/articles.json';
import PageHero from '../components/global/page-hero';
import Footer from '../components/global/footer';
import MobileFooter from '../components/global/mobile-footer';
import Nav from '../components/global/hamburger-nav';
import MobileHamburgerNav from '../components/global/mobile-hamburger-nav';
import Head from 'next/head'
import '../styles/theme.css';



const Press = () => {
  return(
   <> 
    <Head>
      <title>Modern Shed | Press</title>
    </Head> 
    <section id="press-page" className="aux-page">
    <Nav/>
    <MobileHamburgerNav/>

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
