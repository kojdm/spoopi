import React from "react"
import "./PlaylistContainer.css"

import NextButton from "../NextButton"

function PlaylistContainer({ playlist, pageTraversal }) {
  return(
    <div className="PlaylistContainer">
      <iframe className="playlist-iframe" title={playlist.id} src={"https://open.spotify.com/embed/playlist/" + playlist.id} frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>

      <NextButton content="Create another Spoopi Playlist" nextable={true} reload={true} nextPage={pageTraversal}/>
    </div>
  )
}

export default PlaylistContainer
