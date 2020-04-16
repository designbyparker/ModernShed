const ProcessCard = (props) => {
    return(

      <section className="process-card" id={ props.timeframe ? "withTimeFrame" : "withoutTimeFrame"} >
        <div className="grid-div"></div>
        <div id="process-left-column">
          <h2>{props.step}</h2>
          <h3>{props.subheader}</h3>
        </div>


        <div id="process-image-container" className={props.id}>
          <img src={props.image} alt={props.alt}/>
        </div> 
        <div  className="timeframe">
          <p>{props.timeframe}</p>
          <p className={props.id} id="timeframe-note">{props.timeframeNote}</p>
        </div>
        
        <p id="process-copy">{props.copy}</p>
  
      </section>
    );
}

export default ProcessCard;