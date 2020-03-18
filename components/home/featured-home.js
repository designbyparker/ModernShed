

const FeaturedHome = (props) => {
  console.log('props', props.featured);

  return(
    <section id="featured-home-section">
      <h2>Featured Sheds</h2>

      <section id="featured-home-deck">
        {props.featured.map(shed => {
          return(
            <div className="shed-card" id="shed.content_id">
              <div className="image-container">
                <img src={shed.photos[0].url} alt={shed.photos[0].alt}/>
              </div>  
              <div className="shed-details-container">
                <p>{shed.photos[0].description1}</p>
                <p>{shed.photos[0].description2}</p>
                <p>{shed.photos[0].description3}</p>
              </div>
            </div>    
          )
        })}  
      </section>
    </section>
  ) 
}



export default FeaturedHome;