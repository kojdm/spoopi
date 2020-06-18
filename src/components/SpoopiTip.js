import React, { useState, useEffect } from "react"
import "./SpoopiTip.css"
import arrow from "./spoopi-arrow.png"

function SpoopiTip({ current_page }) {
  const [tipContent, setTipContent] = useState("")

  useEffect(() => {
    let tipcon = ""
    if (current_page === "categories") {
      tipcon = `choose which categories you want your playlist to have`
    }
    else if (current_page === "timer") {
      tipcon = `select a duration between
15 mins and 12 hours`
    }
    else if (current_page === "tracks") {
      tipcon = `pro-tip: shorter playlists' songs can be previewed before adding to spotify`
    }
    else if (current_page === "playlist") {
      tipcon = `enjoy your spoopi playlist!`
    }

    return setTipContent(tipcon)
  }, [current_page])

  return(
    <div className={"SpoopiTip " + current_page + "-tip-container"}>
      <div className={"spoopi-tip-content cursive"}>
        {tipContent}
      </div>
      <img className={"spoopi-arrow " + current_page + "-arrow"} src={arrow} alt="spoopi-arrow"/>
    </div>
  )
}

export default SpoopiTip
