
// Desktop Size Card Component
const SizeCard = (props) => {

  const handleMouseOver = (e) => {
    let ele = e.target;
    return ele.src = props.image.gif_src;
  } 

  const handleMouseLeave = (e) => {
    let ele = e.target;
    return ele.src = props.image.src;
  }

  return(
    <section id="size-card" className={props.border_class}>
      <div id="headline">
        <h2>{props.size}</h2>
        <ul>
          {props.uses.map(item => {
            return <li>{item}</li>
          })}
        </ul>
      </div>
      <div id="size-img">
        <img src={props.image.src} alt={props.image.alt} id={props.image.key} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}/>
      </div>
      <div>
        <p>{props.desc}</p>
      </div>
      <a href="/contact">Inquire →</a>
    </section>
  );
}

// Mobile Size Card Component
const MobileSizeCard = (props) => {
  return(
    <section id="mobile-size-card">
      <h2>{props.size}</h2>
      <h3>{props.mobile_uses}</h3>
      <div id="mobile-size-img-container">
        <img src={props.image.gif_src} alt={props.image.gif_alt} id={props.image.key}/>
      </div>
      <p>{props.desc}</p>
      <p>{props.permitting}</p>
    </section>
  )
}


// Car Data
const sUses = ["Home Office", "Storage", "Shed"];
const sImages = {
                  src: "./images/sheds/Small-ShedStill.jpg",
                  alt: "Home Office, Storage, Shed",
                  key: "0",
                  gif_src: "./images/sheds/small.gif",
                  gif_alt: "Home Office, Storage, Shed"
                };


const mUses = ["Home Office", "Guest Space", "Gym"];                
const mImages = {
                  src: "./images/sheds/Medium-ShedStill.jpg",
                  alt: "Home Office Guest Space Gym",
                  key: "1",
                  gif_src:"./images/sheds/medium.gif",
                  gif_alt: "Home Office Guest Space Gym",
                  mobile_uses: "Home Office, Guest Space, Gym"
                };

const lUses = ["Rental Unit", "Guest Space", "Dwelling"];        
const lImages = {
                  src: "./images/sheds/Large-ShedStill.jpg",
                  alt: "Rental Unit Guest Space Dwelling",
                  key: "2",
                  gif_src: "./images/sheds/large.gif",
                  gif_alt: "Rental Unit Guest Space Dwelling",
                  mobile_uses: "Rental Unit, Guest Space, Dwelling"
                };





// Size Deck
const Sizes = () => {
  return(
    <section id="shed-size-section">
      <h2 id="section-headline">Sizes</h2>  

      <div id="size-deck">
        <SizeCard
          size="S"
          uses={sUses}
          image={sImages}
          desc="Sheds made to serve as storage or other small but mighty uses. This option is popular for home offices, art studios, or playrooms."
          border_class="no-left"
        />
       <SizeCard
          size="M"
          uses={mUses}
          image={mImages}
          desc="A shed to spend some quality time in. We suggest this layout for secondary guestrooms, workout spaces, or as your primary, often-frequented office."
        />
        <SizeCard
          size="L*"
          uses={lUses}
          image={lImages}
          desc="Living large requires a bit more stretching room, so here's a shed full of opportunity."
          permitting="* May require local permitting"
        />


        <MobileSizeCard
          size="Small"
          image={sImages}
          desc="Sheds made to serve as storage or other small but mighty uses. This option is popular for home offices, art studios, or playrooms."
          mobile_uses="Home Office, Storage, Shed"
        />
       <MobileSizeCard
          size="Medium"
          image={mImages}
          desc="A shed to spend some quality time in. We suggest this layout for secondary guestrooms, workout spaces, or as your primary, often-frequented office."
          mobile_uses="Home Office, Guest Space, Gym"
        />
        <MobileSizeCard
          size="Large *"
          image={lImages}
          desc="Living large requires a bit more stretching room, so here's a shed full of opportunity."
          mobile_uses="Rental Unit, Guest Space, Dwelling" 
          permitting="* May require local permitting"
        />

      </div>
    </section>
  );
}

export default Sizes;
