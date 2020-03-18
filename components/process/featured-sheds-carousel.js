

const FeaturedShedsCarousel = (props) => {
  let sheds = [];
  props.featured.forEach(shed=> {
    sheds.push({url: shed.photos[0].url, alt: shed.photos[0].alt});
  });

  const handleClick = (e) => {
    console.log('click');
  }

  console.log(sheds);
  
  return(
    <section id="featured-shed-carousel">

      <h2>Featured Sheds</h2>

      <section id="featured-carousel">
        <div>
          <img  src={sheds[0].url} alt={sheds[0].alt} />
        </div>  

        <div>
          <img id="image-cut" src={sheds[1].url} alt={sheds[1].alt}/>
        </div>
      </section>  
    <img onClick={handleClick} src="./images/cursors/MS_Arrow_Right.png"/>

    </section>

  )
}

export default FeaturedShedsCarousel;