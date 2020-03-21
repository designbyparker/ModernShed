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

const sUses = ["Home Office", "Storage", "Shed"];
const sImages = {
                  src: "https://dummyimage.com/375x500/000/fff",
                  alt: "Placeholder Text",
                  key: "gif-1"
                };


const mUses = ["Home Office", "Guest Space", "Gym"];                
const mImages = {
                  src: "https://dummyimage.com/375x500/000/fff",
                  alt: "Placeholder Text",
                  key: "gif-2"
                };

const lUses = ["Rental Unit", "Guest Space", "Dwelling"];        
const lImages = {
                  src: "https://dummyimage.com/375x500/000/fff",
                  alt: "Placeholder Text",
                  key: "gif-3"
                };






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
        />
      </div>
    </section>
  );
}

export default Sizes;
