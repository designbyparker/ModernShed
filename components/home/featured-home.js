
import When from '../global/conditionals';
import React, {useState} from 'react';


const FeaturedHome = (props) => {
  const [modal, setModal] = useState(null)
  const [cnt, setCnt] = useState(0)
  const [index, setIndex] = useState(0);

const handleModalOpen = (e) => {
  e.preventDefault();
  setIndex(e.target.attributes.getNamedItem('data-img').value);
  setCnt(0);
  setModal(true);
}

const handleCloseModal = (e) => {
  setModal(null);
}

const handleBackClick = (e) => {
  e.preventDefault();
  let length = e.target.alt;
  length = parseInt(length, 10);
   let ind = (cnt - 1 + length) % length;
  setCnt(ind);
}

const handleNextClick = (e) => {
  e.preventDefault();
  let length = e.target.alt;
  length = parseInt(length, 10);
  let ind = (cnt + 1) % length;
  setCnt(ind);
}

  return(
  
    <section id="featured-home-section">
      <h2>Featured Sheds</h2>

      <section id="featured-home-deck">
        { props.featured.map((shed,index) => {


          return(
            
            <div key={shed.content_id} className="shed-card" id="shed.content_id">
              <div className="image-container">
                <img src={shed.photos[0].url} alt={shed.photos[0].alt} onClick={handleModalOpen} data-img={index} />
              </div>  
              <div className="shed-details-container">
                <p>{shed.photos[0].description1}</p>
                <p>{shed.photos[0].description2}</p>
                <p>{shed.photos[0].description3}</p>
              </div>
            </div>   

          )})} 
            <When condition={modal}>
              <div className="modal">
                  <img className="slide close-modal" 
                      src="./graphics/MS_X_White.svg" 
                      alt="close modal" 
                      onClick={handleCloseModal}/>

                  <div className="home-featured-carousel">
                  <button className="carousel-button" 
                            onClick={handleBackClick} >
                              <img src="./images/cursors/MS_Arrow_Left.png" 
                                    alt={props.featured[index].photos.length}/>
                    </button>
                    <div className="modal-img-container">
                      <img src={props.featured[index].photos[cnt].url} alt={props.featured[index].photos[cnt].alt}/>
                    </div>
                    <button className="carousel-button" 
                            onClick={handleNextClick} >
                              <img src="./images/cursors/MS_Arrow_Right.png" 
                                  alt={props.featured[index].photos.length} />
                    </button>

                  </div>
              </div>
            </When>
         
          
     
      </section> 
    </section>
  ) 
}



export default FeaturedHome;