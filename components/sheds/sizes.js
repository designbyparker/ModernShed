const SizeCard = (props) => {
  return(
    <section id="size-card">
      <div id="headline">
        <h2>{props.size}</h2>
        <ul>
          {props.uses.map(item => {
            console.log(item);
            return <li>{item}</li>
          })}
        </ul>
      </div>
      <div>
        <img src={props.image.src} alt={props.image.alt}/>
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
                  alt: "Placeholder Text" 
                };


const mUses = ["Home Offices", "Guest Space", "Gym"];                
const mImages = {
                  src: "https://dummyimage.com/375x500/000/fff",
                  alt: "Placeholder Text" 
                };

const lUses = ["Rental Unit", "Guest Space", "Dwelling"];        
const lImages = {
                  src: "https://dummyimage.com/375x500/000/fff",
                  alt: "Placeholder Text" 
                };






const Sizes = () => {
  return(
    <section id="shed-size-section">
      <h2>Sizes</h2>  

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

