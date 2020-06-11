import React from "react"
import "./NextButton.css"

function NextButton({ content, nextable, nextPage }) {
  const handleNextPage = () => {
    nextable && nextPage("nextpage")
  }

  return(
    <div className={"NextButton" + (nextable ? " nextable" : "")}>
      <div className="next-button-content" onClick={handleNextPage}>
        {content}
        { nextable && <span className="next-arrow">&#187;</span> }
      </div>
    </div>
  )
}

export default NextButton
