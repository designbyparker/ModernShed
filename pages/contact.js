import HamburgerNav from '../components/global/hamburger-nav';
import PageHero from '../components/global/page-hero';
import When from '../components/global/conditionals';

import superagent from 'superagent';
import {useState, useEffect} from 'react';
import '../styles/theme.css';


const Contact = (props) => {

  const [interest, setInterest] = useState();
  const [connect, setConnect] = useState(null);
  const [fields, setFields] = useState({});


  const handleInterestChange = (e) => {
    let int = e.target.value;
    int === "not interested" ? setConnect(false) : setConnect(true);
    return setInterest(int);
  }

console.log(interest);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let url = 'http://localhost:8000';

    setFields(
      {
        FirstName: e.target.FirstName.value,
        LastName: e.target.LastName.value || null,
        Email: e.target.Email.value,
        ZipCode: e.target.ZipCode.value || null,
        PhoneNumber: e.target.Phone.value || null,
        AdditionalComments: e.target.AddComm.value || null
      }
    );

    let reqData = JSON.stringify(fields);
    console.log('request data',reqData)
    let data = await superagent.get(`${url}/contact`).query(reqData);
    console.log(data);
  }

  const handleSizeButton = (e) => {
    e.preventDefault();
  }

  const handleCompButton = (e) => {
    e.preventDefault();
  } 


  const options = ["Alaska Airlines", "Bainbridge Islander", "Bing", "Country Club Directory Eastside", "Country Club Directory Seattle", "Country Club Directory Eastside", "DesignGuide", "Dwell Magazine", "Dwell On Design", "Everyday Home Magazine", "Facebook", "Facebook Ad", "Gig Harbor Life", "Google", "Houzz.com", "Internet Ad", "Instagram", "Kitsap Home and Garden Show", "KPBJ", "Local Ad", "Modern Shed Blog", "Other Publication", "Oregon Home Magazine", "Pintrest", "Seattle Magazine", "Seattle Times", "WestSound Home & Garden", "Word of Mouth", "Youtube"];

  return(
<>
      <HamburgerNav/>
      <PageHero page="CONTACT" copy="Let’s get connected." copy2="Whether you’re ready for a shed now, or interested in more details" id="contact-hero"/>
      <section id="contact-page">
        <section id="contact-left-col">
          <div></div>
          <div></div>
        </section>


        <section id="contact-right-col">
        <p className="form-headline">INTEREST LEVEL</p>
        <form className="form" id="interest-form">
             <div>
               <label htmlFor="not"> Not yet interested.
                  <input type="radio" id="not" value="not interested" name="interest" onChange={handleInterestChange} />
                </label>
             </div>

            <div>
              <label htmlFor="maybe">I'm considering a Shed.
                <input type="radio" id="maybe" value="general information" name="interest" onChange=  {handleInterestChange}/>
              </label>
            </div>

            <div>
              <label htmlFor="yes">I'm ready for a Shed.
                <input type="radio" id="yes" value="contact me" name="interest" onChange={handleInterestChange}/>
              </label>
            </div>
          </form>


          <p className="form-headline" id="gen-head">GENERAL INFORMATION</p>
          <form className="form" id="contact-form" onSubmit={handleSubmit} >
            <div>
              <label>FIRST NAME</label>
              <input type="text" id="FirstName" required="true" />
            </div>

            <div>
              <label>LAST NAME</label>
              <input type="text" id="LastName" />
            </div>

            <div>
              <label>EMAIL ADDRESS</label>
            <input type="text" id="Email" required="true" />
            </div>

            <div>
              <label>ZIP CODE</label>
              <input type="text" id="ZipCode" />
            </div>

            <div>
              <label>PHONE NUMBER</label>
              <input type="text" id="Phone" />
            </div>


          <When condition={connect}>
            <section id="contact-details">


              <div className="radio-btn-container" >

                <div className="radio-box border-none">
                  <label>Small</label>
                  <input type="radio" id="small" name="shed-size"  />
                </div>

                <div className="radio-box border-none">
                  <label>Medium</label>
                  <input type="radio" id="medium" name="shed-size" />
                </div>

                <div className="radio-box border-none border-right">
                  <label>Large</label>
                  <input type="radio" id="large" name="shed-size" />
                </div>
              
              </div>




            <div className="radio-btn-container">
              
              <div className="radio-box">
                <label> 1-3 </label>
                <input type="radio" id="short" name="comp-date" />
              </div>

              <div className="radio-box">
                <label>3-6</label>
                <input type="radio" id="med" name="comp-date" />
              </div>

              <div className="radio-box border-right" >
                <label> 6-12 </label>
                <input type="radio" id="large" name="comp-date" />
              </div>
            </div>



            <div id="details-row-3">
              <label>HOW DID YOU HEAR ABOUT US?</label>
              <select>
                {options.map(item => {
                  return <option value={item}>{item}</option>
                })}             
              </select>
            </div>

          </section>
          </When>


          <div>
            <label>ADDITIONAL COMMENTS (OPTIONAL) </label>
            <textarea id="AddComm"></textarea>
          </div>
            
          <button type="submit" className="primary-button">Get In Contact →</button>
          </form>
        </section>
    </section>
    </>
  )
}


export default Contact;