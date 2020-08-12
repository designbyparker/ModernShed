const MobileContactCTA = (props) => {
  return(
   <section id="mobile-contact-cta">
    <h2>Interested in a shed?</h2>
    <h3>Get in contact with our team.</h3>
    <div id="mobile-contact-image">
       <img src="/images/contact-cta/I_ModernShed_GetAShed.jpg"/>
    </div>
    <div className="mobile-button-container"><a className="mobile-button-anchor" href="/contact">{props.buttontext}</a></div>
    
    </section>
  );
}

export default MobileContactCTA;