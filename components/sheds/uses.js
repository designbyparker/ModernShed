const Uses = () => {
  return(
    <section >
      <div id="uses-section">
        <div className="uses-card " id="uses-img" >
          <img src="https://dummyimage.com/750x550/000/fff" alt="Placeholder Alt Text"/>
        </div>

        <div  className="uses-card" id="uses-list">
          <div>
            <img src="https://dummyimage.com/300x400/000/fff" alt="Placeholder Alt Text"/>
          </div>
          <a href="/contact">Inquire →</a>
        </div>
      </div>

      <div id="sheds-tailored-section">
        <div id="tailored-left-col">
          <p id="tailored-h2">Tailored... <br/> not Configured.</p>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. </p>
        </div>
        <div id="tailored-right-col">
          <img src="https://dummyimage.com/400x400/000/fff" alt="Placeholder Alt Text"/>
        </div>
      </div>


    </section>

  );
}

export default Uses;