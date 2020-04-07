import {CarouselProvider, Slider, Slide, ButtonNext} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


const FeaturedShedsCarousel = (props) => {

  return(
    <section id="featured-shed-carousel">
      <h2>Featured Sheds</h2>

      <section id="featured-carousel" >
        <CarouselProvider
          naturalSlideWidth={300}
          naturalSlideHeight={200}
          totalSlides={props.featured.length}
          touchEnabled={true}
          visibleSlides={1.75}
          infinite={true}
          >
            <Slider>
              {
                props.featured.map((shed, ind) => {
                  return(
                      <Slide className="slide" index={ind}><img src={shed.photos[0].url} alt={shed.photos[0].alt}/></Slide>
                  )
                })
              }
            </Slider>
            <ButtonNext className="next-button"><img src={'./images/cursors/MS_Arrow_Right.png'}/></ButtonNext>

        </CarouselProvider>
      </section>

    </section>

  )
}

export default FeaturedShedsCarousel;