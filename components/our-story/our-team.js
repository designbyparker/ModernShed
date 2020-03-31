import {CarouselProvider, Slider, Slide, ButtonNext} from 'pure-react-carousel';
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
          visibleSlides={3.25}
          infinite={true}
          >
          <Slider>
            {
              props.staff[1].photos.map((staff, index) => {
                return(
                  <Slide id="staff-slide" index={index}>
                    <img className="staff-img" src={staff.url} alt={staff.alt}/>
                    <p>{staff.description1}</p>
                    <p>{staff.description2}</p>
                    </Slide>
                )
              })
            }
          </Slider>
          <ButtonNext className="next-button"><img src={'./images/cursors/MS_Arrow_Right.png'}/></ButtonNext>

      </CarouselProvider>
    </section>
  )
}

export default OurTeam;