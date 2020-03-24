const Materials = () => {
  return(
    <section id="mobile-materials-section">

        <h2>Materials</h2>
        <p>Let’s talk about our high standards—we’ve hand-selected an extensive variety of materials that are not only eco-friendly, but will stand the test of time.</p>


        <section id="mobile-materials">
         <div id="mobile-images"> 
            <div>
              <img src="./images/sheds/C_Materials_WoodGrating.jpg" alt="Wood Grating"/>
            </div>
            <div>
              <img src="./images/sheds/D_Materials_MetalSiding.jpg" alt="Metal Siding"/>
            </div>
            <div>
              <img src="./images/sheds/F_Materials_PanelSiding.jpg" alt="Wood Paneling"/>
            </div>
            <div>
              <img src="./images/sheds/E_Materials_PaintedSiding.jpg" alt="Painted Siding"/>
            </div>
        </div>

        <div id="material-titles">
            <h4>Wood Grating</h4>
            <h4>Metal</h4>
            <h4>Wood Paneling</h4>
            <h4>Painted Siding</h4>
          </div>
      </section>

      <div className="mobile-button-container" id="materials-button"><a className="mobile-button-anchor" href="/contact">Catalog →</a></div>

    </section>
  )
}

export default Materials;