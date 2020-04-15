import {CarouselProvider, Slider, Slide, ButtonNext} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


const FeaturedShedsCarousel = (props) => {
  return(
    <section id="featured-shed-carousel">
      <h2>Featured Sheds</h2>

      <section id="featured-carousel" >
        <CarouselProvider
          naturalSlideWidth={220}
          naturalSlideHeight={120}
          totalSlides={props.featured[0].photos.length}
          touchEnabled={true}
          visibleSlides={1.50}
          infinite={true}
          >
            <Slider>
              {
                props.featured[0].photos.map((shed, ind) => {
                  return(
                      <Slide className="slide" index={ind}><img src={shed.url} alt={shed.alt}/></Slide>
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