const MobileProcessCard = (props) => {
  return(

    <section className="mobile-process-card" id={props.id}>
      <div id="mobile-process-headline">
        <h2>{props.step}</h2>
        <h3>{props.subheader}</h3>
      </div>


      <div id="mobile-process-image-container">
        <img src={props.image} alt={props.alt}/>
      </div> 
      <p id="mobile-timeframe">{props.timeframe}</p>
      <p id="mobile-timeframe-note">{props.timeframeNote}</p>

      <p id="mobile-process-copy">{props.copy}</p>

    </section>
  );
}

export default MobileProcessCard;