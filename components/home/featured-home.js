
import When from '../global/conditionals';
import React, {useState} from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';


const FeaturedHome = (props) => {
  const [modal, setModal] = useState(null)
  const [cnt, setCnt] = useState(0)

const handleModalOpen = (e) => {
  console.log('open modal');
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

console.log(cnt);
  return(
  
    <section id="featured-home-section">
      <h2>Featured Sheds</h2>

      <section id="featured-home-deck">
        {props.featured.map((shed,index) => {
          return(
            <>
            <div key={shed.content_id} className="shed-card" id="shed.content_id">
              <div className="image-container">
                <img src={shed.photos[0].url} alt={shed.photos[0].alt} onClick={handleModalOpen}/>
              </div>  
              <div className="shed-details-container">
                <p>{shed.photos[0].description1}</p>
                <p>{shed.photos[0].description2}</p>
                <p>{shed.photos[0].description3}</p>
              </div>
            </div>   


            <When condition={modal}>
            <div className="modal">
                <img className="slide" 
                     src="./graphics/MS_X_White.svg" 
                     alt="close modal" 
                     className="close-modal" 
                     onClick={handleCloseModal}/>

                <div className="home-featured-carousel">
                <button className="carousel-button" 
                          onClick={handleBackClick} >
                            <img src="./images/cursors/MS_Arrow_Left.png" 
                                  alt={shed.photos.length}/>
                  </button>
                  <div className="modal-img-container">
                    <img src={shed.photos[cnt].url} alt={shed.photos[cnt].alt}/>
                  </div>
                  <button className="carousel-button" 
                          onClick={handleNextClick} >
                            <img src="./images/cursors/MS_Arrow_Right.png" 
                                 alt={shed.photos.length} />
                  </button>

                </div>
            </div>
            </When>
          </>
          )
        })}  
      </section> 
    </section>
  ) 
}



export default FeaturedHome;