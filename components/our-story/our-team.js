import {CarouselProvider, Slider, Slide, ButtonNext, ButtonBack} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';




const OurTeam = (props) => {
  return(
    <section id="our-team-body">
      <h2>Our Team</h2>

      <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={150}
          totalSlides={props.staff[1].photos.length}
          touchEnabled={true}
          visibleSlides={3.15}
          infinite={true}
          className="staff-carousel"
          >
          <Slider>
            {
              props.staff[1].photos.map((staff, index) => {
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
            <ButtonNext className="carousel-button"><img src="./graphics/MS_Arrow_Right.svg" alt="Next Image"/></ButtonNext>
          </div>
      </CarouselProvider>
    </section>
  )
}

export default OurTeam;