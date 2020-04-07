import superagent from 'superagent';
import {useState, useEffect} from 'react';


const Newsletter = () => {
  const [zip, setZip] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let emailreg = /^(?:(?:[\w\.\-_]+@[\w\d]+(?:\.[\w]{2,6})+)[,;]?\s?)+$/;
    let email = e.target.email.value;

    let zipreg = /^(\d{5}((|-)-\d{4})?)|([A-Za-z]\d[A-Za-z][\s\.\-]?(|-)\d[A-Za-z]\d)|[A-Za-z]{1,2}\d{1,2}[A-Za-z]? \d[A-Za-z]{2}$/
    let zip = e.target.zip.value


    let payload = {
      ZipCode: zip,
      Email: email
    }
    payload = JSON.stringify(payload);
    email.match(emailreg) && zip.match(zipreg) ? callNewsletter(payload) : notAMatch();
  }

  const notAMatch = () => {
    alert('Either the Email or Zip Code provided was invalid');
  }
  

  const handleEmailChange = (e) => {
    e.preventDefault();
    let email = e.target.value;
    let reg = /^(?:(?:[\w\.\-_]+@[\w\d]+(?:\.[\w]{2,6})+)[,;]?\s?)+$/;
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
        <input placeholder="Email" name="email" id="email" required={true} onChange={handleEmailChange}/>
        <input placeholder="Zip Code" name="zip" id="zip" required={true}/>
        <button type="submit" className="primary-button">Sign Up →</button>
      </form>
    </div>
  </section>
  )
}

export default Newsletter;