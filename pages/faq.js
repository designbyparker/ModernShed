import copy from '../copy/faq.json';
import Footer from '../components/global/footer';
import Nav from '../components/global/hamburger-nav';
import '../styles/theme.css';

const Faq = () => {
  return (
    <section id="faq-page" className="aux-page">
      <h1>FAQ</h1>
      <Nav/>
      <section className="aux-section">
        <div className="aux-deck">
          {copy.map(item => {
            console.log(item.question);
          return(
            <div key={item.question_id}>
              <h4>{item.question}</h4>
              <p>{item.answer}</p>
            </div>
          )
          })}
        </div>
      </section>
    <Footer/>
    </section>
  )
}




export default Faq;
