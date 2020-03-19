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
  const [size, setSize] = useState(null);
  const [time, setTime] = useState(null);
  const [heard, setHeard] = useState(null);


  const handleInterestChange = (e) => {
    let int = e.target.value;
    int === "not interested" ? setConnect(false) : setConnect(true);
    return setInterest(int);
  }

  const handleSizeChange = (e) => {
    let size = e.target.value;
    return setSize(size);
  }

  const handleTimeChange = (e) => {
    let time = e.target.value;
    return setTime(time);
  }

  const handlePdfDownload = (e) => {
    console.log('click')
  }

  const handleHeard = (e) => {
    setHeard(e.target.value);
  }



  const handleSubmit = async (e) => {
    e.preventDefault();

    let url = 'https://modern-shed.com/contactus/contact';

    const fields = {
        Interest: interest,
        FirstName: e.target.FirstName.value,
        LastName: e.target.LastName.value || null,
        Email: e.target.Email.value,
        ZipCode: e.target.ZipCode.value || null,
        PhoneNumber: e.target.Phone.value || null,
        AdditionalComments: e.target.AddComm.value || null,
        HeardAboutUs: heard,
        ProjectSize: size,
        Timeframe: time,
        ContactID: null,
        ContactByEmail: null,
        ContactByPhone: null,
        StartContactTime: null,
        EndContactTime: null,
        TimeStamp: null,
        Outcome: null,
        Dealer: null,
        Country: "US",
        County:"King",
        City: "Seattle",
        State: "WA"

      }


    let c = JSON.stringify(fields);
    console.log(c)
    let data = await superagent.post(url)
    .set('Access-Control-Allow-Origin', '*')
    .send(c)
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.error(err);
    })
  }

  const options = ["","Alaska Airlines", "Bainbridge Islander", "Bing", "Country Club Directory Eastside", "Country Club Directory Seattle", "Country Club Directory Eastside", "DesignGuide", "Dwell Magazine", "Dwell On Design", "Everyday Home Magazine", "Facebook", "Facebook Ad", "Gig Harbor Life", "Google", "Houzz.com", "Internet Ad", "Instagram", "Kitsap Home and Garden Show", "KPBJ", "Local Ad", "Modern Shed Blog", "Other Publication", "Oregon Home Magazine", "Pintrest", "Seattle Magazine", "Seattle Times", "WestSound Home & Garden", "Word of Mouth", "Youtube"];

  let cnt=0;

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
              <input placeholder="First Name" type="text" id="FirstName" required="true" />
            </div>

            <div id="label-margin">
              <label>LAST NAME</label>
              <input placeholder="Last Name" type="text" id="LastName" />
            </div>

            <div id="label-margin">
              <label>EMAIL ADDRESS</label>
            <input placeholder="Email" type="text" id="Email" required="true" />
            </div>

            <div id="label-margin">
              <label>ZIP CODE</label>
              <input placeholder="00000" type="text" id="ZipCode" />
            </div>


            <p className="form-headline" id="details-head">DETAILS</p>
           <section id="contact-details-container"> 

            <div id="label-margin">
              <label>PHONE NUMBER (OPTIONAL)</label>
              <input placeholder="000 000-0000" type="text" id="Phone" />
            </div>


          <When condition={connect}>

            <section id="contact-details">
 

               <div className="radio-btn-container" >

                <div className="radio-box border-bottom border-left border-top">
                  <input type="radio" id="small" name="shed-size" onChange={handleSizeChange} />
                  <label>Small</label>
                </div>

                <div className="radio-box border-bottom border-top">
                  <input type="radio" id="medium" name="shed-size" onChange={handleSizeChange}/>
                  <label>Medium</label>
                </div>

                <div className="radio-box border-bottom border-top">
                  <input type="radio" id="large" name="shed-size" onChange={handleSizeChange}/>
                  <label>Large</label>
                </div>
              
              </div>




              <div className="radio-btn-container">
                
                <div className="radio-box border-left">
                  <input type="radio" id="short" name="comp-date" onChange={handleTimeChange}/>
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
                <select name="hear-about-us" id="hearAboutUs" onChange={handleHeard}>
                  {options.map(item => {
                    cnt = cnt+1;
                    return (
                    <option key={cnt} value={item}>{item}</option>
                    )
                  })}             
                </select>

              </div> 


          </section>

          </When>

          </section>


          <div id="label-margin">
            <label >ADDITIONAL COMMENTS (OPTIONAL) </label>
            <textarea placeholder="Is there anything else you'd like us to know?" id="AddComm"></textarea>
          </div>
            
          <button type="submit" className="primary-button" >Get In Contact →</button>
          <button onClick={handlePdfDownload} className="secondary-button" id="pdf-button">Download PDF ↓ </button>

          </form>
        </section>
    </section>
    <Footer/>
    </>
  )
}


export default Contact;