import React from 'react'
import "./SpoopiNav.css"

function SpoopiNav({ current_page }) {
  const introText = `welcome to spoopi! here you can create timed spotify playlists. just give spoopi some categories and a duration and it'll find songs that fit into the time you gave it. have fun!`

  return(
    <div className="SpoopiNav">
      <div className="spoopi-logo cursive">spoopi</div>
      <div className="spoopi-description">(spo)tify (p)laylist t(i)mer</div>
    { current_page === "categories" && <div className="spoopi-intro cursive">{introText}</div> }
    </div>
  )
}

export default SpoopiNav
