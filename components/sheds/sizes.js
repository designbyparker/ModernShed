
// Desktop Size Card Component
const SizeCard = (props) => {
  return(
    <section id="size-card">
      <div id="headline">
        <h2>{props.size}</h2>
        <ul>
          {props.uses.map(item => {
            return <li>{item}</li>
          })}
        </ul>
      </div>
      <div id="size-img">
        <img src={props.image.src} alt={props.image.alt} id={props.image.key}/>
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
        <img src={props.image.src} alt={props.image.alt} id={props.image.key}/>
      </div>
      <p>{props.desc}</p>
      <p>{props.permitting}</p>
    </section>
  )
}


// Car Data
const sUses = ["Home Office", "Storage", "Shed"];
const sImages = {
                  src: "https://dummyimage.com/375x500/000/fff",
                  alt: "Placeholder Text",
                  key: "gif-1",
                  gif_src: "./images/sheds/medium.gif",
                  gif_alt: "Placeholder Text"
                };


const mUses = ["Home Office", "Guest Space", "Gym"];                
const mImages = {
                  src: "https://dummyimage.com/375x500/000/fff",
                  alt: "Placeholder Text",
                  key: "gif-2",
                  gif_src:"./images/sheds/medium.gif",
                  gif_alt: "Placeholder Text",
                  mobile_uses: "Home Office, Guest Space, Gym"
                };

const lUses = ["Rental Unit", "Guest Space", "Dwelling"];        
const lImages = {
                  src: "https://dummyimage.com/375x500/000/fff",
                  alt: "Placeholder Text",
                  key: "gif-3",
                  gif_src: "./images/sheds/large.gif",
                  gif_alt: "Placeholder Text",
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
          desc="Living large requires a bit more stretching room--here's the shed full of opportunity. The sky's the limit: a music studio, multi-person office, home gym, recreation room, or a spacious guest studio."
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
          desc="Living large requires a bit more stretching room--here's the shed full of opportunity. The sky's the limit: a music studio, multi-person office, home gym, recreation room, or a spacious guest studio."
          mobile_uses="Rental Unit, Guest Space, Dwelling" 
          permitting="* May require local permitting"
        />

      </div>
    </section>
  );
}

export default Sizes;
