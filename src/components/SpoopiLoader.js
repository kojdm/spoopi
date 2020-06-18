import React from "react"
import "./SpoopiLoader.css"

function SpoopiLoader({ content, warning }) {
  return(
    <div className="SpoopiLoader">
      <div className="spoopi-loader-spinner"></div>
      <div className="spoopi-loader-content">{content}</div>
      <div className="spoopi-loader-warning">{warning || ""}</div>
    </div>
  )
}

export default SpoopiLoader
