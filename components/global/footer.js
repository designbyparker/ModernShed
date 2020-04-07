const Footer = () => {
  return(
    <section id="footer">
      <div className="footer-col-1">
        <img src="/graphics/small-wordmark-white.svg" alt="Modern Shed Wordmark"/>
        <p>(c) Modern Shed, LLC All Rights Reserved. <br/>Privacy Policy. Terms of Use.</p>
      </div>
      <div className="footer-col-2 small-footer-col">
        <p className="section-header">SITE</p>
        <div id="internal-pages">
          <a href='/sheds'>Sheds</a>
          <a href='/story'>About</a>
          <a href='/process'>Process</a>
          <a href='/contact'>Contact</a>
        </div>
      </div>

      <div className="footer-col-3 small-footer-col">
        <p className="section-header">CONTENT</p>
        <div id="informational-pages">
          <a href='https://modernshedblog.com' target="_blank">Blog</a>
          <a href='/legal'>Legal</a>
          <a href='/faq'>Faq</a>
          <a href='/press'>Press</a>
        </div>
      </div>

      <div className="footer-col-4 small-footer-col">
        <p className="section-header">FOLLOW</p>
        <div id="social-pages">
          <a href="https://www.instagram.com/modern_shed" target="_blank">Instagram</a>
          <a href="https://www.facebook.com/ModernShedInc" target="_blank">Facebook</a>
          <a href="https://www.houzz.com/professionals/decks-patios-and-outdoor-enclosures/modern-shed-pfvwus-pf~1670352110" target="_blank">Houzz</a>
          <a href="/find-a-dealer" className="find-dealer-link">Find A Dealer →</a>
        </div>  
      </div>

    </section>
  );
} 

export default Footer;