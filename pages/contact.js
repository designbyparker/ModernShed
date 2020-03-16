import HamburgerNav from '../components/global/hamburger-nav';
import PageHero from '../components/global/page-hero';
import When from '../components/global/conditionals';
import Footer from '../components/global/footer';

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

  const handlePdfDownload = (e) => {
    console.log('click')
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


  const options = ["","Alaska Airlines", "Bainbridge Islander", "Bing", "Country Club Directory Eastside", "Country Club Directory Seattle", "Country Club Directory Eastside", "DesignGuide", "Dwell Magazine", "Dwell On Design", "Everyday Home Magazine", "Facebook", "Facebook Ad", "Gig Harbor Life", "Google", "Houzz.com", "Internet Ad", "Instagram", "Kitsap Home and Garden Show", "KPBJ", "Local Ad", "Modern Shed Blog", "Other Publication", "Oregon Home Magazine", "Pintrest", "Seattle Magazine", "Seattle Times", "WestSound Home & Garden", "Word of Mouth", "Youtube"];

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
            <div id="label-margin">
              <label>FIRST NAME</label>
              <input type="text" id="FirstName" required="true" />
            </div>

            <div id="label-margin">
              <label>LAST NAME</label>
              <input type="text" id="LastName" />
            </div>

            <div id="label-margin">
              <label>EMAIL ADDRESS</label>
            <input type="text" id="Email" required="true" />
            </div>

            <div id="label-margin">
              <label>ZIP CODE</label>
              <input type="text" id="ZipCode" />
            </div>


            <p className="form-headline" id="details-head">DETAILS</p>
           <section id="contact-details-container"> 

            <div id="label-margin">
              <label>PHONE NUMBER (OPTIONAL)</label>
              <input type="text" id="Phone" />
            </div>


          {/* <When condition={connect}> */}

            <section id="contact-details">


              <div className="radio-btn-container" >

                <div className="radio-box border-bottom border-left border-top">
                  <input type="radio" id="small" name="shed-size"  />
                  <label>Small</label>
                </div>

                <div className="radio-box border-bottom border-top">
                  <input type="radio" id="medium" name="shed-size" />
                  <label>Medium</label>
                </div>

                <div className="radio-box border-bottom border-top">
                  <input type="radio" id="large" name="shed-size" />
                  <label>Large</label>
                </div>
              
              </div>




              <div className="radio-btn-container">
                
                <div className="radio-box border-left">
                  <input type="radio" id="short" name="comp-date" />
                  <label> 1-3 </label>
                </div>

                <div className="radio-box">
                  <input type="radio" id="med" name="comp-date" />
                  <label>3-6</label>
                </div>

                <div className="radio-box " >
                  <input type="radio" id="large" name="comp-date" />
                  <label> 6-12 </label>
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
          {/* </When> */}
          </section>


          <div id="label-margin">
            <label>ADDITIONAL COMMENTS (OPTIONAL) </label>
            <textarea id="AddComm"></textarea>
          </div>
            
          <button type="submit" className="primary-button">Get In Contact →</button>
          <button onClick={handlePdfDownload} className="secondary-button" id="pdf-button">Download PDF</button>

          </form>
        </section>
    </section>
    <Footer/>
    </>
  )
}


export default Contact;