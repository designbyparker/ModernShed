const ProcessCard = (props) => {
    return(

      <section className="process-card" id={ props.timeframe ? "withTimeFrame" : "withoutTimeFrame"} >
        <h2>{props.step}</h2>
        <h3>{props.subheader}</h3>
        <img src={props.image} alt={props.alt}/>
        <p>{props.copy}</p>
      </section>
    );
}

export default ProcessCard;