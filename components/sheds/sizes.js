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


const mUses = ["Home Offices", "Guest Space", "Gym"];                
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
          desc="Sheds made to serve a storage or small use-case. Generally popular for home offices, or storage units."
        />
        <SizeCard
          size="M"
          uses={mUses}
          image={mImages}
          desc="Sheds made for spending time in. We typically see these used for secondary guest spaces, workout spaces, and home offices to be used frequently. "
        />
        <SizeCard
          size="L*"
          uses={lUses}
          image={lImages}
          desc="Sheds made to serve a storage or small use-case. Generally popular for home offices, or storage units.  * May require local permitting *"
        />
      </div>
    </section>
  );
}

export default Sizes;

