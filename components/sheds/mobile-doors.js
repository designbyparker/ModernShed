const MobileDoors = () => {
  return(
    <section id="mobile-doors-section">

        <h2>Doors</h2>
        <p>Customize your entry way with more than a welcome mat. Choose between over two dozen options—from French doors to sliding, steel to fiberglass. What best serves your vision?</p>
      <div className="mobile-door-card">
        <h4>Traditional</h4>
        <div>
          <img src="./images/sheds/G_Doors_Traditional.jpg"/>
        </div>
      </div>

      <div className="mobile-door-card">
        <h4>Sliding</h4>
        <div>
          <img src="./images/sheds/H_Doors_Sliding.jpg"/>
        </div>
      </div>

        <div className="mobile-button-container" id="materials-button"><a className="mobile-button-anchor" href="/contact">Catalog →</a></div>

    </section>
  );
}

export default MobileDoors;