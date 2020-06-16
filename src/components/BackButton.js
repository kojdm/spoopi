import React from "react"
import "./BackButton.css"

function BackButton({ backPage, backable }) {
  const handleBackPage = () => {
    backPage("back")
  }

  return(
    backable
    ? <div className={"BackButton"}>
        <div className="back-button-content" onClick={handleBackPage}>
          <span className="back-arrow">&#171;</span>Back 
        </div>
      </div>
    : null
  )
}

export default BackButton
