import React, { useEffect, useState } from "react"

function TracksContainer({ duration, categories, tracks, handleTracks, pageTraversal }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    return
    if (duration === 0 || categories.length <= 0) return

    const base_url = "http://localhost:9292/generate_tracks"
    const url = base_url + "?seconds=" + duration + "&category_ids=" + categories.join(",")

    fetch(url).then(res => res.json()).then((result) => {
      setLoading(false)
      handleTracks(result.spoopi.tracks)
    })

  }, [duration, categories, handleTracks])

  return(
    <div>
      { loading
          ? <h1>Generating Tracks</h1>
          : tracks.map(track => (
            <p>{track.name}</p>
          ))
      }
    </div>
  )
}

export default TracksContainer
