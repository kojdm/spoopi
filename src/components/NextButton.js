import React from "react"
import "./NextButton.css"

function NextButton({ content, nextable }) {
  return(
    <div className="NextButton">
      <div className="next-button-content">
        {content}
        { nextable && <span className="next-arrow">&#187;</span> }
      </div>
    </div>
  )
}

export default NextButton
