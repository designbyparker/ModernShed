const Materials = () => {
  return(
    <section id="mobile-materials-section">
        <div id="mobile-materials-head">
          <h2>Materials</h2>
          <p>Let’s talk about our high standards—we’ve hand-selected an extensive variety of materials that are not only eco-friendly, but will stand the test of time.</p>
        </div>

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
          <div>
            <h4>Wood Grating</h4>
            <p className="material-desc">Scandinavian inspired. These wood grating panels are stylish and timeless. </p>
          </div>
          <div>
            <h4>Metal</h4>
            <p className="material-desc">From ceiling to wall lining--ours is a double-sided wood veneer faced plywood, in birch, walnut, sapele, melamine, or recycled resin panels.</p>        
          </div>
          <div>
            <h4>Wood Paneling</h4>
            <p className="material-desc">From ceiling to wall lining--ours is a double-sided wood veneer faced plywood, in birch, walnut, sapele, melamine, or recycled resin panels.</p>        
          </div>
          <div>
            <h4>Painted Siding</h4>
            <p className="material-desc">Modern-Shed gives you the choice between five types of painted siding, custom-colored in your favorite hue.</p>        
          </div>
          </div>
      </section>

      <div id="material-desc">
      </div>
      

      <div className="mobile-button-container" id="materials-button"><a className="mobile-button-anchor" href="/contact">Catalog →</a></div>

    </section>
  )
}

export default Materials;