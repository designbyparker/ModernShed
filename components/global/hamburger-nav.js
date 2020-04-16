import React, {useState, useEffect} from 'react';

const HamburgerNav = (props) => {
  const [menuToggle, setMenuToggle] = useState(false);
  
  const handleMenuToggle = (e) =>{
    e.preventDefault();
    menuToggle ? setMenuToggle(false) : setMenuToggle(true);
  }

  return(
   <section id="menu"> 
    <section id="hamburger-nav-bar" className={props.navClass}>
      <a href="/index" id="brandmark"><img src="/graphics/small-brandmark.svg" alt="Modern Shed Brandmark" /></a>
      <img src="./graphics/MS_Menu_Black.svg" alt="Hamburger Menu" onClick={handleMenuToggle}/>
    </section>
  
    <section id="hamburger-menu"   className={menuToggle ? "openMenu" : "closeMenu"} >
      <div id="menu-col-1">
       <a id="wordmark" href="/index"> <img src="/graphics/small-wordmark.svg" alt="Modern Shed Wordmark" /></a>
        <p>(c) Modern Shed, Inc All Rights Reserved. Privacy Policy. Terms of Use.</p>
        <img className="mobile-exit" src="./graphics/MS_X_Black.svg" alt="Menu Exit" onClick={handleMenuToggle}/>

      </div>


      <div id="menu-col-2">
        <div id="primary-page-links">
            <a href="/sheds"> Sheds </a>      
            <a href="/story"> Our Story </a>      
            <a href="/process"> Process </a>      
            <a href="/contact"> Contact </a>      
        </div>

        <div id="secondary-page-links">
           <a href="https://modernshedblog.com" target="_blank"> Blog </a>   
           <a href="/legal"> Legal </a>    
           <a href="/faq"> Faq </a> 
           <a href="/press"> Press </a> 
        </div>
      </div>

      <div id="menu-col-3">
        <img className="desktop-exit" src="./graphics/MS_X_Black.svg" alt="Menu Exit" onClick={handleMenuToggle}/>

        <div id="social-links">
            <a href="https://www.instagram.com/modern_shed" target="_blank">Instagram</a>
            <a href="https://www.facebook.com/ModernShedInc" target="_blank">Facebook</a>
            <a href="https://www.houzz.com/professionals/decks-patios-and-outdoor-enclosures/modern-shed-pfvwus-pf~1670352110" target="_blank">Houzz</a>
            <a href="/find-a-dealer" className="find-dealer-link-menu">Find A Dealer →</a>
        </div>
      </div>  


      <div id="menu-col-3"></div>

  
      </section>
    </section>
  )
}

export default HamburgerNav;