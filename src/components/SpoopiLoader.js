import React from "react"
import "./SpoopiLoader.css"

function SpoopiLoader({ content }) {
  return(
    <div className="SpoopiLoader">
      <div className="spoopi-loader-spinner"></div>
      <div className="spoopi-loader-content">Generating tracks...</div>
    </div>
  )
}

export default SpoopiLoader
