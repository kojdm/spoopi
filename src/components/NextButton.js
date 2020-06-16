import React from "react"
import "./NextButton.css"

function NextButton({ content, nextable, nextPage }) {
  const handleNextPage = () => {
    nextable && nextPage("next")
  }

  return(
    <div className={"NextButton" + (nextable ? " nextable" : "")} onClick={handleNextPage}>
      <div className="next-button-content">
        {content}
        { nextable && <span className="next-arrow">&#187;</span> }
      </div>
    </div>
  )
}

export default NextButton
