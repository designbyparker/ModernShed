import superagent from 'superagent';
import {useState, useEffect} from 'react';


const Newsletter = () => {
  const [zip, setZip] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    console.log('in submit', e.target.zip.value);
    e.preventDefault();
    
    let payload = {
      ZipCode: e.target.zip.value,
      Email: e.target.email.value
    }
    payload = JSON.stringify(payload);
    return callNewsletter(payload)


  }

  const callNewsletter = async (payload) => {
    console.log(payload);
    return await superagent.post('https://www.modern-shed.com/api/newsletter')
    .set('Access-Control-Allow-Origin', '*')
    .set('Content-Type', 'application/json')
    .send(payload)
    .then(result => {
      console.log(result.body);
    })
    .catch(error => {
      console.log(error);
    })
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