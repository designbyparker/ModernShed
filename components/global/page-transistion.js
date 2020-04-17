const PageTransistion = (props) => {
  return(
    <section className={props.show}>
      <h1>{props.page}</h1>
    </section>
  )
}

export default PageTransistion;