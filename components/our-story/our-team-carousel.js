import {CarouselProvider, Slider, Slide, ButtonNext, ButtonBack} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';




const OurTeamCarousel = (props) => {

  return(
    <section id="our-team-body-carousel">
      <h2>Our Team</h2>
 
      <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={170}
          totalSlides={props.staff[0].photos.length}
          touchEnabled={true}
          visibleSlides={4.5}
          className="staff-carousel"
          >
          <Slider>
            {
              props.staff[0].photos.map((staff, index) => {
                return(
                  <Slide id="staff-slide" index={index}>
                    <img className="staff-img" src={staff.url} alt={staff.alt}/>
                    <p className="primary-title">{staff.description1}</p>
                    <p className="secondary-title">{staff.description2}</p>
                    </Slide>
                )
              })
            }
          </Slider>
          <div id="staff-button-container">
            <ButtonBack className="carousel-button" ><img src="./graphics/MS_Arrow_Left.svg" alt="Previous Image"/></ButtonBack>
            <ButtonNext className="carousel-button"><img src="./graphics/MS_Arrow_Right.svg" alt="Next Image"/></ButtonNext>
          </div>
      </CarouselProvider> 
    </section>
  )
}

export default OurTeamCarousel;