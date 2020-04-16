const ContactCTA = (props) => {
  return(
    <section id="contact-cta">
      <div id="contact-left-column">
        <img src="/images/contact-cta/I_ModernShed_GetAShed.jpg"/>
      </div>

      <div id="contact-right-column">
        <div>
          <h2>Interested in a shed?</h2>
          <h3>Get in contact with our team.</h3>
        </div>
        <a href="/contact">{props.buttontext}</a>
      </div>
    </section>
  );
}

export default ContactCTA;