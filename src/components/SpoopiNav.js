import React, { useState, useEffect } from 'react'
import "./SpoopiNav.css"

import SpoopiTip from "./SpoopiTip"

function SpoopiNav({ current_page }) {
  const [tipContent, setTipContent] = useState("")

  useEffect(() => {
    switch(current_page) {
      case "categories":
        const tipcon = `
welcome to spoopi! here you can create timed spotify playlists. just give spoopi some categories and a duration and it'll find songs that fit into the time you gave it.

why don't you start by choosing up to 5 categories here
        `
        return setTipContent(tipcon)
      case "timer":

      case "tracks":

      case "playlist":

      default:
        return null
    }
  }, [current_page])

  return(
    <div className="SpoopiNav">
      <div className="spoopi-logo cursive">spoopi</div>
      <div className="spoopi-description">(spo)tify (p)laylist t(i)mer</div>
      <SpoopiTip content={tipContent}/>
    </div>
  )
}

export default SpoopiNav
