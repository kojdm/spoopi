import React, { useEffect, useState } from "react"
import "./TracksContainer.css"

import SpoopiLoader from "../SpoopiLoader"
import TrackBox from "./TrackBox"

function TracksContainer({ duration, categories, countryCode, tracks, handleTracks, pageTraversal }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (duration === 0 || categories.length <= 0) return

    // TODO: find out how to put url in env
    const base_url = "http://localhost:9292/generate_tracks"
    const url = base_url + "?seconds=" + duration + "&category_ids=" + categories.join(",") + "&country_code=" + countryCode

    fetch(url).then(res => res.json()).then((result) => {
      setLoading(false)
      handleTracks(result.spoopi.tracks)
    })

  }, [duration, categories, countryCode, handleTracks])

  const useIframe = tracks.length <= 20

  return(
    <div className={ loading
        ? ""
        : "TracksContainer"  + ( useIframe ? " iframe-columns" : " spoopi-tracks-columns") }>
      { loading
          ? <SpoopiLoader/>
          : tracks.map(track => (
            <TrackBox
              track={track}
              useIframe={useIframe}
            />
          ))
      }
    </div>
  )
}

export default TracksContainer
