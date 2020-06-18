import React, { useState, useEffect } from "react"
import "./PlaylistContainer.css"

import SpoopiLoader from "../SpoopiLoader"
import NextButton from "../NextButton"

function PlaylistContainer({ playlist, pageTraversal }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return(
    <div className="PlaylistContainer">
      { loading
          ? <SpoopiLoader content="Fetching playlist..."/>
          : <>
          <iframe className="playlist-iframe" title={playlist.id} src={"https://open.spotify.com/embed/playlist/" + playlist.id} frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          <NextButton content="Create another Spoopi Playlist" nextable={true} reload={true} nextPage={pageTraversal}/>
          </>
      }
    </div>
  )
}

export default PlaylistContainer
