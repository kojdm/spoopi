import React, { useEffect, useState } from "react"
import "./TracksContainer.css"

import SpoopiLoader from "../SpoopiLoader"

function TracksContainer({ duration, categories, tracks, handleTracks, pageTraversal }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (duration === 0 || categories.length <= 0) return

    // TODO: find out how to put url in env
    const base_url = "http://localhost:9292/generate_tracks"
    const url = base_url + "?seconds=" + duration + "&category_ids=" + categories.join(",")

    fetch(url).then(res => res.json()).then((result) => {
      setLoading(false)
      handleTracks(result.spoopi.tracks)
    })

  }, [duration, categories, handleTracks])

  return(
    <div className="TracksContainer">
      { loading
          ? <SpoopiLoader/>
          : tracks.map(track => (
            <p>{track.name}</p>
          ))
      }
    </div>
  )
}

export default TracksContainer
