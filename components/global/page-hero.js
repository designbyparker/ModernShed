
const PageHero = (props) => {

  return(
    <section className="page-hero" id={props.id}>
      <div id="empty-div"></div>
      <div id="hero-text">
        <h1>{props.page}</h1>
        <h2>{props.copy}</h2>
        <h3>{props.copy2}</h3>
      </div>
    </section>
  );
}

export default PageHero;