const Footer = () => {
  return(
    <section id="footer">
      <div className="footer-col-1">
        <img src="/branding/small-wordmark.svg" alt="Modern Shed Wordmark"/>
        <p>Copy Rights</p>
      </div>
      <div className="footer-col-2">
        <p className="section-header">SITE</p>
        <a href='/sheds'>Sheds</a>
        <a href='/story'>About</a>
        <a href='/process'>Process</a>
        <a href='/contact'>Contact</a>
      </div>

      <div className="footer-col-3">
        <p className="section-header">CONTENT</p>
        <a href='https://modernshedblog.com/'>Blog</a>
        <a href='/legal'>Legal</a>
        <a href='/faq'>Faq</a>
        <a href='/press'>Press</a>
      </div>

      <div className="footer-col-4">
        <p className="section-header">FOLLOW</p>
        <a href="https://www.instagram.com/modern_shed/">Instagram</a>
        <a href="https://www.facebook.com/ModernShedInc/">Facebook</a>
      </div>

    </section>
  );
}