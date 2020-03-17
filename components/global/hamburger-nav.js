import React, {useState, useEffect} from 'react';
import Link from 'next/link';

const HamburgerNav = (props) => {
  const [menuToggle, setMenuToggle] = useState(false);
  
  const handleMenuToggle = (e) =>{
    e.preventDefault();
    console.log('clicked');
    menuToggle ? setMenuToggle(false) : setMenuToggle(true);
    console.log(menuToggle)
  }

  return(
   <> 
    <section id="hamburger-nav-bar" >
      <a href="/index" id="brandmark"><img src="/branding/small-brandmark.svg" alt="Modern Shed Brandmark" /></a>
      <img src="https://dummyimage.com/100x100/000/fff" alt="Hamburger Menu" onClick={handleMenuToggle}/>
    </section>

    <section id="hamburger-menu"  className={menuToggle ? "openMenu" : "closeMenu"} >
      <div id="menu-col-1">
       <a id="wordmark" href="/index"> <img src="/branding/small-wordmark.svg" alt="Modern Shed Wordmark" /></a>
        <p>(c) Modern Shed, LLC All Rights Reserved. Privacy Policy. Terms of Use.</p>
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
        <img src="https://dummyimage.com/100x100/000/fff" alt="Menu Exit" onClick={handleMenuToggle}/>

        <div id="social-links">
         <a href="https://www.instagram.com/modern_shed" target="_blank">Instagram</a>
         <a href="https://twitter.com/YourModernShed" target="_blank">Twitter</a>
         <a href="https://www.facebook.com/ModernShedInc" target="_blank">Facebook</a>
        </div>
      </div>  


      <div id="menu-col-3"></div>

  
      </section>
    </>
  )
}

export default HamburgerNav;