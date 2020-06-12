import React from "react"
import "./BackButton.css"

function BackButton({ backPage }) {
  const handleBackPage = () => {
    backPage("back")
  }

  return(
    <div className={"BackButton"}>
      <div className="back-button-content" onClick={handleBackPage}>
        <span className="back-arrow">&#171;</span>Back 
      </div>
    </div>
  )
}

export default BackButton
