import superagent from 'superagent';
import {useState, useEffect} from 'react';


const Newsletter = () => {
  const [zip, setZip] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    console.log('in submit');
    e.preventDefault();
    setZip(e.target.zip.value);
    setEmail(e.target.email.value);
    
    let url = 'http://localhost:8000';
    let payload = {
      zip: zip,
      email: email
    }

    let data = await superagent.get(`${url}/newsletter`).query(payload);
    console.log(data.body);

  }


  return(
  <section id="newsletter">
    <div id="newsletter-copy">
      <h2>Newsletter</h2>
      <p>Sign up for our Quarterly Newsletter and keep up to date with all things Modern-Shed.</p>
    </div>

    <div id="newsletter-form">
      <h5>SIGN UP</h5>
      <form onSubmit={handleSubmit}>
        <input placeholder="Email Address" name="email" id="email"/>
        <input placeholder="Zip Code" name="zip" id="zip"/>
        <button type="submit" className="primary-button">Sign Up →</button>
      </form>
    </div>
  </section>
  )
}

export default Newsletter;