import React from "react"
import "./TrackBox.css"

function TrackBox({ track, useIframe }) {
  const uri = track.uri.split(":")[2]
  return(
    <div className={"TrackBox" + (useIframe ? "" : " spoopi-track-box")}>
      {
        useIframe
        ? <iframe className="track-iframe" title={track.id} src={"https://open.spotify.com/embed/track/" + uri} frameborder="" allowtransparency="true" allow="encrypted-media"></iframe>
          : <><img className="track-image" src={track.image_url} alt={track.id}/>
          <div className="track-name">{track.name}</div>
          <div className="track-artists">{track.artists.join(", ")}</div></>
      }
    </div>
  )
}

export default TrackBox
