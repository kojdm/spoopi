import React from "react"
import "./BackButton.css"

function BackButton({ backPage, backable }) {
  const handleBackPage = () => {
    backPage("back")
  }

  return(
    backable
    ? <div className={"BackButton"} onClick={handleBackPage}>
        <div className="back-button-content">
          <span className="back-arrow">&#171;</span>Back 
        </div>
      </div>
    : null
  )
}

export default BackButton
