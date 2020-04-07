const OurTeam = (props) => {
  return(
    <section id="our-team-body">
      <h2>Our Team</h2>
      <section id ="staff-deck">
        {props.staff[1].photos.map((staff, index) => {
          return(
            <div className="staff-card" key={index} id={index % 2 ? "pad-left" : ""}>
              <img src={staff.url} alt={staff.alt}/>
              <p className="primary-title">{staff.description1}</p>
              <p className="secondary-title">{staff.description2}</p>
            </div>
          )
        })}
      </section>

    </section>
  )
}

export default OurTeam;