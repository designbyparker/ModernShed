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
    
  
    let payload = {
      zip: zip,
      email: email
    }
    payload = JSON.stringify(payload);

    let data = await superagent.post('https://modern-shed.com/ContactUs/addNewsletter')
    .set('Access-Control-Allow-Origin', '*')
    .send(payload)
    .then(result => {
      console.log(result);
    });

  }


  return(
  <section id="newsletter">
    <div id="newsletter-copy">
      <h2>Newsletter.</h2>
      <p>Sign up for our Quarterly Newsletter and keep up to date with all things Modern-Shed.</p>
    </div>

    <div id="newsletter-form">
      <h5>SIGN UP</h5>
      <form onSubmit={handleSubmit}>
        <input placeholder="Email" name="email" id="email" required={true}/>
        <input placeholder="Zip Code" name="zip" id="zip" required={true}/>
        <button type="submit" className="primary-button">Sign Up →</button>
      </form>
    </div>
  </section>
  )
}

export default Newsletter;