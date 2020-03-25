import HamburgerNav from '../components/global/hamburger-nav';
import PageHero from '../components/global/page-hero';
import When from '../components/global/conditionals';
import Footer from '../components/global/footer';
import Head from 'next/head'
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




  const addBackgroundColor = (e, type) => {
    let boxes = document.getElementsByClassName(`${type}-radio`);
    for(let i = 0; i < 3; i++){
      boxes[i].classList.add('check-off');
    }

    let ele = document.getElementById(`radio-${e.target.id}`);
    ele.classList.remove('check-off');
    ele.classList.add('check-on');
    return
  }

  const handleInterestChange = (e) => {
    let images = document.getElementsByClassName('interest-radio');
    for(let i = 0; i <3; i++){
      images[i].src = './graphics/MS_Radio_Off.svg';
    }

    let int = e.target.value;
    let imageid = `radio-${e.target.id}`;
    let image = document.getElementById(imageid);
    image.src = './graphics/MS_Radio_On.svg';
    
    int === "not interested" ? setConnect(false) : setConnect(true);
    
    return setInterest(int);

  }

  const handleSizeChange = (e) => {
    addBackgroundColor(e, 'size');
    let size = e.target.value;
    return setSize(size);
  }


  const handleTimeChange = (e) => {
    addBackgroundColor(e, 'length');
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
      <Head>
        <title>Modern Shed | Contact Us</title>
      </Head>
      <HamburgerNav/>
      <PageHero page="CONTACT" copy="What could you do with a little more space to move? We're at the ready to engineer a Modern-Shed for any ambition. " id="contact-hero"/>
      <section id="contact-page">
        <section id="contact-left-col">
          <div></div>
          <div></div>
        </section>


        <section id="contact-right-col">
        <p className="form-headline">INTEREST LEVEL</p>
        <form className="form" id="interest-form">
             <div className="interest-box">
                  <input type="radio" id="not" value="not interested" name="interest" onChange={handleInterestChange} />
                  <label htmlFor="not" className="desktop-label"> Not yet interested.</label>
                  <label htmlFor="not" className="mobile-label">Just Browsing.</label> 
                  <img src='./graphics/MS_Radio_Off.svg' alt="radio button off" className="interest-radio" id="radio-not"/>
             </div>

            <div className="interest-box">  
                <input type="radio" id="maybe" value="general information" name="interest" onChange=  {handleInterestChange}/>
                <label htmlFor="maybe" className="desktop-label">I'm considering a Shed.</label>
                <label htmlFor="maybe" className="mobile-label">Considering.</label> 
                <img src='./graphics/MS_Radio_Off.svg' alt="radio button off" className="interest-radio" id="radio-maybe"/>

            </div>

            <div className="interest-box">
                <input type="radio" id="yes" value="contact me" name="interest" onChange={handleInterestChange}/>
                <label htmlFor="yes" className="desktop-label">I'm ready for a Shed.</label>
                <label htmlFor="yes" className="mobile-label">I'm Ready!</label>
                <img src='./graphics/MS_Radio_Off.svg' alt="radio button off" className="interest-radio" id="radio-yes"/>

            </div>
          </form>


          <p className="form-headline" id="gen-head">GENERAL INFORMATION</p>
          <form className="form" id="contact-form" onSubmit={handleSubmit} >
            <div id="label-margin">
              <label>FIRST NAME</label>
              <input placeholder="First Name" type="text" id="FirstName" required={true} />
            </div>

            <div id="label-margin">
              <label>LAST NAME (OPTIONAL)</label>
              <input placeholder="Last Name" type="text" id="LastName" />
            </div>

            <div id="label-margin">
              <label>EMAIL ADDRESS</label>
            <input placeholder="Email" type="text" id="Email" required={true} />
            </div>

            <div id="label-margin">
              <label>ZIP CODE</label>
              <input placeholder="00000" type="text" id="ZipCode" required={true}/>
            </div>


            <p className="form-headline" id="details-head">DETAILS</p>
           <section id="contact-details-container"> 

            <div id="label-margin">
              <label>PHONE NUMBER (OPTIONAL)</label>
              <input placeholder="(206) 663-7433" type="text" id="Phone" />
            </div>


      {/* <When condition={connect}>  */}

            <section id="contact-details">
 
               <p className="details-radio-label">EST. SHED SIZE</p>
               <div className="radio-btn-container" >
                <div className="radio-box border-bottom border-left border-top size-radio" id="radio-small">
                  <input type="radio" id="small" name="shed-size" onChange={handleSizeChange} />
                  <label htmlFor="small">Small</label>
                </div>

                <div className="radio-box border-bottom border-top size-radio" id="radio-medium">
                  <input type="radio" id="medium" name="shed-size" onChange={handleSizeChange}/>
                  <label htmlFor="medium">Medium</label>
                </div>

                <div className="radio-box border-bottom border-top size-radio" id="radio-large" >
                  <input type="radio" id="large" name="shed-size" onChange={handleSizeChange}/>
                  <label htmlFor="large">Large</label>
                </div>
              
              </div>



              <p className="details-radio-label">APPROX. COMPLETION DATE</p>
              <div className="radio-btn-container">
                
                <div className="radio-box border-left length-radio" id="radio-short">
                  <input type="radio" id="short" name="comp-date" onChange={handleTimeChange} />
                  <label htmlFor="short"> 1-3 </label>
                </div>

                <div className="radio-box length-radio" id="radio-med">
                  <input type="radio" id="med" name="comp-date" onChange={handleTimeChange}/>
                  <label htmlFor="med">3-6</label>
                </div>

                <div className="radio-box length-radio" id="radio-long" >
                  <input type="radio" id="long" name="comp-date" onChange={handleTimeChange}/>
                  <label htmlFor="long"> 6-12 </label>
                </div>

              </div>


              {/* <div id="details-row-3">

                <label>HOW DID YOU HEAR ABOUT US?</label>
                <select name="hear-about-us" id="hearAboutUs" onChange={handleHeard}>
                  {options.map(item => {
                    cnt = cnt+1;
                    return (
                    <option key={cnt} value={item}>{item}</option>
                    )
                  })}             
                </select>

              </div>  */}


          </section>

       {/* </When>  */}

          </section>


          <div id="label-margin">
            <label >ADDITIONAL COMMENTS (OPTIONAL) </label>
            <textarea placeholder="Is there anything else you'd like us to know?" id="AddComm"></textarea>
          </div>
            
          <button type="submit" className="primary-button" >Get in Contact →</button>
          <button onClick={handlePdfDownload} className="secondary-button" id="pdf-button">Download PDF ↓ </button>

          </form>
        </section>
    </section>
    <Footer/>
    </>
  )
}


export default Contact;