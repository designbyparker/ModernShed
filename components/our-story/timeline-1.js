


const Timeline1 = (props) => {
return(
  <section className="timeline-module-1">
    <h2 className="timeline-year">{props.year}</h2>
    <div className="tl-mod-1">
      <img src={props.image1_url} alt={props.image1_alt}/>
    </div>
    <div>
      <img src={props.image2_url} alt={props.image2_alt}/>
    </div>
    <p>{props.paragraph1}</p>
    <p>{props.paragraph2}</p>
  </section>
);
}

export default Timeline1;