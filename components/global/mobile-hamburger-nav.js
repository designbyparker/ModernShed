import React, {useState, useEffect} from 'react';

const MobileHamburgerNav = (props) => {
  const [menuToggle, setMenuToggle] = useState(false);
  
  const handleMenuToggle = (e) =>{
    e.preventDefault();
    menuToggle ? setMenuToggle(false) : setMenuToggle(true);
  }

  return(
   <section id="mobile-menu"> 
    <section id="mobile-hamburger-nav-bar" >
      <a href="/index" id="mobile-brandmark"><img src="/graphics/small-brandmark.svg" alt="Modern Shed Brandmark" /></a>
      <img src="./graphics/MS_Menu_Black.svg" alt="Open Menu Icon" onClick={handleMenuToggle}/>
    </section>

    <section id="mobile-hamburger-menu"  className={menuToggle ? "openMobileMenu" : "closeMobileMenu"} >
      <div id="mobile-menu-col-1">
        <a id="mobile-wordmark" href="/index"> <img src="/graphics/small-wordmark.svg" alt="Modern Shed Wordmark" /></a>
        <img className="mobile-exit" src="./graphics/MS_X_Black.svg" alt="Menu Exit" onClick={handleMenuToggle}/>
      </div>


        <div id="mobile-primary-page-links">
            <a href="/sheds"> Sheds </a>      
            <a href="/story"> Our Story </a>      
            <a href="/process"> Process </a>      
            <a href="/contact"> Contact </a>   
        </div>
        <section id="add-mobile-links">
          <div id="mobile-secondary-page-links">
            <a href="https://modernshedblog.com" target="_blank"> Blog </a>   
            <a href="/legal"> Legal </a>    
            <a href="/faq"> Faq </a> 
            <a href="/press"> Press </a> 
          </div>

          <div id="mobile-social-links">
          <a href="https://www.instagram.com/modern_shed" target="_blank">Instagram</a>
          <a href="https://www.facebook.com/ModernShedInc" target="_blank">Facebook</a>
          <a href="https://www.houzz.com/professionals/decks-patios-and-outdoor-enclosures/modern-shed-pfvwus-pf~1670352110" target="_blank">Houzz</a>
          <a href="/find-a-dealer" className="find-dealer-link-menu">Find A Dealer</a>
          </div>
        </section>
  
      </section>
    </section>
  )
}

export default MobileHamburgerNav;