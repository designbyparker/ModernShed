
const TheDifference = () => {
  return(
    <section className="wrapper">
     <section id="the-difference-section">
       <div id="col-1">
          <h2>The Difference.</h2>
          <p><b>(A)</b> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. <b>(B)</b> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna </p>
          <div className="button-container"><a href='/process'>Process→</a></div>
       </div>

      <div id="col-2">
      
        <div className="diff-image-container">
          <h5>(A)</h5>
          <img src="https://dummyimage.com/375x375/000/fff" alt="some text about image"/>
        </div>
      </div>

      <div id="col-3">
        <div className="diff-image-container">
          <img src="https://dummyimage.com/375x375/000/fff" alt="some text about image" />
          <h5>(B)</h5>
        </div>
      </div>

     </section>
   </section>
  )
}

export default TheDifference;