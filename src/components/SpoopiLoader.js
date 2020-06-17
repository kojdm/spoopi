import React from "react"
import "./SpoopiLoader.css"

function SpoopiLoader({ content }) {
  return(
    <div className="SpoopiLoader">
      <div className="spoopi-loader-spinner"></div>
      <div className="spoopi-loader-content">Generating tracks...</div>
      <div className="spoopi-loader-warning">This could take a while for longer playlists</div>
    </div>
  )
}

export default SpoopiLoader
