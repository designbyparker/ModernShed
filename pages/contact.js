import HamburgerNav from '../components/global/hamburger-nav';
import MobileHamburgerNav from '../components/global/mobile-hamburger-nav';
import PageTransistion from '../components/global/page-transistion';
import PageHero from '../components/global/page-hero';
import When from '../components/global/conditionals';
import MobileFooter from '../components/global/mobile-footer';
import Footer from '../components/global/footer';
import Head from 'next/head'
import superagent from 'superagent';
import {useState, useEffect} from 'react';
import '../styles/theme.css';


const Contact = (props) => {

  const [interest, setInterest] = useState();
  const [connect, setConnect] = useState(null);
  const [size, setSize] = useState(null);
  const [time, setTime] = useState(null);
  const [heard, setHeard] = useState(null);
  const [name, setName] = useState(false);
  const [zip, setZip] = useState(false);
  const [email, setEmail] = useState(false);
  const [contactClass, setContactClass] = useState('disabled');
  const [downloadClass, setDownloadClass] = useState('disabled-download');
  const [contactState, setContactState] = useState('disabled');
  const [contactBtnTxt, setContactBtnTxt] = useState('Get in Contact →')
  const [error, setError] = useState('no-error');
  const [emailError, setEmailError] = useState('no-email-error');
  const [zipError, setZipError] = useState('no-zip-error');
  const [transistionClass, setTransistion] = useState('show');
  
  useEffect(() => {
    setTimeout(() => {
      return setTransistion('hide');
    }, 2000);
  })

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

  const handleHeard = (e) => {
    setHeard(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    let zipcode = checkZip(e.target.ZipCode.value);
    let emailadd = checkEmail(e.target.Email.value);

    const fields = {
        Interest: interest || null,
        FirstName: e.target.FirstName.value,
        LastName: e.target.LastName.value || null,
        Email: e.target.Email.value,
        ZipCode: e.target.ZipCode.value || null,
        Phone: e.target.Phone.value || null,
        AdditionalComments: e.target.AddComm.value || null,
        HeardAboutUs: heard || null,
        ProjectSize: size || null,
        Timeframe: time || null,
      }

      zipcode ? setZipError('no-zip-error') : setZipError('zip-error')
      emailadd ? setEmailError('no-email-error') : setEmailError('email-error');
      zipcode && emailadd ? postContact(fields)  : setError('error');
  }

  const checkEmail = (email) => {
    let reg = /^(?:(?:[\w\.\-_]+@[\w\d]+(?:\.[\w]{2,6})+)[,;]?\s?)+$/;
    return email.match(reg);
  }
  const checkZip = (zip) => {
    let reg = /^(\d{5}((|-)-\d{4})?)|([A-Za-z]\d[A-Za-z][\s\.\-]?(|-)\d[A-Za-z]\d)|[A-Za-z]{1,2}\d{1,2}[A-Za-z]? \d[A-Za-z]{2}$/
    return zip.match(reg);
  }

  const postContact = (c) => {
    c = JSON.stringify(c);
    setError('no-error');
    let url = 'https://www.modern-shed.com/api/contact';

    superagent.post(url)
    .send(c)
    .set('Access-Control-Allow-Origin', '*')
    .set('Content-Type', 'application/json')
    .then(result => {
      if(result.statusText === "OK"){
       return enableDownload()
      }
    })
    .catch(error => {
      console.log(error);
    })
  }

  const enableDownload = () => {
    setContactBtnTxt('Sent!');
    setDownloadClass('enabled-download');
  }

  const handleZipChange = (e) => {
    e.preventDefault();
    e.target.value.length > 0 ? setZip(true) : setZip(false);
    return checkState();
  }

  const handleNameChange = (e) => {
    e.preventDefault();
    e.target.value.length > 0 ? setName(true) : setName(false);
    return checkState();
  }

  const handleEmailChange = (e) => {
    e.preventDefault();
    e.target.value.length > 0 ? setEmail(true) : setEmail(false);
    return checkState();
  }

  const checkState = () => {
    if(name && email && zip){
      setContactState(false);
      setContactClass('enabled');
      }else{
      setContactState('disabled');
      setContactClass('disabled');
    }
  }

  const options = ["","Alaska Airlines", "Bainbridge Islander", "Bing", "Country Club Directory Eastside", "Country Club Directory Seattle", "DesignGuide", "Dwell Magazine", "Dwell On Design", "Everyday Home Magazine", "Facebook", "Facebook Ad", "Gig Harbor Life", "Google", "Houzz.com", "Internet Ad", "Instagram", "Kitsap Home and Garden Show", "KPBJ", "Local Ad", "Modern Shed Blog", "Other Publication", "Oregon Home Magazine", "Pintrest", "Seattle Magazine", "Seattle Times", "WestSound Home & Garden", "Word of Mouth", "Youtube"];

  let cnt=0;

  return(
    <>
      <Head>
        <title>Modern Shed | Contact Us</title>
      </Head>
      <HamburgerNav navClass="contact-nav"/>
      <MobileHamburgerNav/>
      <PageHero page="CONTACT" copy="What would you do with more space to live? We're at the ready to design a Modern-Shed for any ambition. " id="contact-hero"/>
      <PageTransistion page="Contact" show={transistionClass}/> 

      <section id="contact-page">

        <section id="contact-left-col">
          <div className="contact-image" id="contact-image-a">
            <img src="./images/contact/A_Contact.jpg" alt="Placeholder text"/>
          </div>
          <div className="empty-div"></div> 
          <div className="contact-image" id="contact-image-b">
            <img src="./images/contact/B_Contact.jpg" alt="Placeholder text"/>
          </div>

        </section>


        <section id="contact-right-col">

        <p className="form-headline">INTEREST LEVEL</p>

        <form className="form" id="interest-form">
             <div className="interest-box">
                  <input type="radio" id="not" value="not interested" name="interest" onChange={handleInterestChange} />
                  <label htmlFor="not" className="interest-label"> Just Browsing.</label>
                  <img src='./graphics/MS_Radio_Off.svg' alt="Just Browsing Button" className="interest-radio" id="radio-not"/>
             </div>

            <div className="interest-box">  
                <input type="radio" id="maybe" value="general information" name="interest" onChange=  {handleInterestChange}/>
                <label htmlFor="maybe" className="interest-label">Considering.</label>
                <img src='./graphics/MS_Radio_Off.svg' alt="Considering Button" className="interest-radio" id="radio-maybe"/>

            </div>

            <div className="interest-box">
                <input type="radio" id="yes" value="contact me" name="interest" onChange={handleInterestChange}/>
                <label htmlFor="yes" className="interest-label">I'm Ready!</label>
                <img src='./graphics/MS_Radio_Off.svg' alt="Ready button" className="interest-radio" id="radio-yes"/>

            </div>
          </form>


          <p className="form-headline" id="gen-head">GENERAL INFORMATION</p>
          <form className="form" id="contact-form" onSubmit={handleSubmit} >
            <div id="label-margin">
              <label>FIRST NAME (REQUIRED)</label>
              <input placeholder="First Name" type="text" id="FirstName" required={true} onChange={handleNameChange} />
            </div>

            <div id="label-margin">
              <label>LAST NAME </label>
              <input placeholder="Last Name" type="text" id="LastName" />
            </div>

            <div id="label-margin">
              <label id={emailError}>EMAIL ADDRESS (REQUIRED)</label>
            <input placeholder="Email" type="text" id="Email" required={true} onChange={handleEmailChange}/>
            </div>

            <div id="label-margin">
              <label id={zipError}>ZIP CODE (REQUIRED)</label>
              <input placeholder="00000" type="text" id="ZipCode" required={true} onChange={handleZipChange}/>
            </div>


            <p className="form-headline" id="details-head">DETAILS</p>
           <section id="contact-details-container"> 

            <div id="label-margin">
              <label>PHONE NUMBER </label>
              <input placeholder="(866) 279 5121" type="text" id="Phone" />
            </div>


    <When condition={connect}> 

            <section id="contact-details">
 
               <p className="details-radio-label">EST. SHED SIZE</p>
               <div className="radio-btn-container" >
                <div className="radio-box border-bottom border-left border-top size-radio" id="radio-small">
                  <input type="radio" id="small" name="shed-size" onChange={handleSizeChange} />
                  <label htmlFor="small">SM</label>
                </div>

                <div className="radio-box border-bottom border-top size-radio" id="radio-medium">
                  <input type="radio" id="medium" name="shed-size" onChange={handleSizeChange}/>
                  <label htmlFor="medium">MED</label>
                </div>

                <div className="radio-box border-bottom border-top size-radio" id="radio-large" >
                  <input type="radio" id="large" name="shed-size" onChange={handleSizeChange}/>
                  <label htmlFor="large">LG</label>
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


          <div id="label-margin" className="add-comments-section" >
            <label >ADDITIONAL COMMENTS </label>
            <textarea placeholder="Is there anything else you'd like us to know?" id="AddComm" maxLength="250"></textarea>
          </div>
            <button type="submit" id="contact-submit" className={contactClass} disabled={contactState}>{contactBtnTxt}</button>
            <div  className={downloadClass} >
             <a href="./catalog/ModernShed_Catalog.pdf" download>Download PDF ↓</a>
            </div>
            <p className={error}>* Either the zip code or email address provided was invalid.</p>

          </form>

           <div id="contact-info">

              <div id="contact-phone" className="contact-info-columns">
                <h5>PHONE</h5>
                <p>866 279 5121</p>
              </div>

              <div id="contact-mailing" className="contact-info-columns">
                <h5>MAILING</h5>
                <p>4616 25TH AVE NE</p>
                <p>PMB 364</p>
                <p>SEATTLE, WA 98105</p>
              </div>

          </div>
        </section>
    </section>
    <Footer/>
    <MobileFooter/>
   </>
  )
}


export default Contact;