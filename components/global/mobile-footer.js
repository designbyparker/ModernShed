

const MobileFooter = () => {
  return(
    <section id="mobile-footer">
      <img src="/graphics/small-wordmark-white.svg" alt="Modern Shed Wordmark"/>
      <section id="mobile-footer-columns">
        <div className="mobile-footer-row-1">
            <div className="mf-col-1">
              <p className="mobile-section-header">SITE</p>
              <div className="links-container">
                <a href='/sheds'>Sheds</a>
                <a href='/story'>Our Story</a>
                <a href='/process'>Process</a>
                <a href='/contact'>Contact</a>
              </div>
            </div>  

            <div className="mf-col-2">
              <p className="mobile-section-header">CONTENT</p>
              <div className="links-container">
                <a href='https://modernshedblog.com' target="_blank">Blog</a>
                <a href='/legal'>Legal</a>
                <a href='/faq'>Faq</a>
                <a href='/press'>Press</a>
              </div>
            </div>

        </div>


        <div className="mobile-footer-row-2">
            <div className="mf-col-1">
                  <p className="mobile-section-header">FOLLOW</p>
                  <div className="links-container">
                    <a href="https://www.instagram.com/modern_shed" target="_blank">Instagram</a>
                    <a href="https://www.facebook.com/ModernShedInc" target="_blank">Facebook</a>
                    <a href="https://www.houzz.com/professionals/decks-patios-and-outdoor-enclosures/modern-shed-pfvwus-pf~1670352110" target="_blank">Houzz</a>
                    <a href="/find-a-dealer" className="find-dealer-link">Find A Dealer</a>
                  </div>  
                </div>  

            <div>
            </div>

        </div>

    </section>


      <p id="copyrights">(c) Modern Shed, Inc All Rights Reserved. <br/>Privacy Policy. Terms of Use.</p>
    </section>
  );
} 

export default MobileFooter;