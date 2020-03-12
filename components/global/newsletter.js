const Newsletter = () => {

  return(
  <section id="newsletter">
    <div id="newsletter-copy">
      <h2>Newsletter</h2>
      <p>Sign up for our Quartly Newsletter and keep up to date with all things related to Modern Shed.</p>
    </div>

    <div id="newsletter-form">
      <h5>SIGN UP</h5>
      <form>
        <input placeholder="Name@EmailAddress.com"/>
        <input placeholder="Zip Code"/>
        <button type="submit">Sign Up →</button>
      </form>
    </div>
  </section>
  )
}

export default Newsletter;