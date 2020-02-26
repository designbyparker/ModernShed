
const ContactCTA = (props) => {
  return(
    <section id="contact-cta">
      <div id="contact-left-column">
        <img src="/images/contact-cta/contact-image.jpeg"/>
      </div>

      <div id="contact-right-column">
        <div>
          <h2>Get a Shed</h2>
          <h3>Interested in a Shed? Get in contact with our team, or browse more Sheds.</h3>
        </div>
        <a href="/contact">{props.buttontext}</a>
      </div>
    </section>
  );
}

export default ContactCTA;