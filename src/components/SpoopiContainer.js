import React, { useState, useEffect } from 'react'
import "./SpoopiContainer.css"

import CategoriesContainer from "./categories/CategoriesContainer"
import TimerContainer from "./timer/TimerContainer"
import TracksContainer from "./tracks/TracksContainer"
import PlaylistContainer from "./playlist/PlaylistContainer"
import BackButton from "./BackButton"
import SpoopiTip from "./SpoopiTip"

function SpoopiContainer({
  current_page,
  pageTraversal,
  categories,
  duration, setDuration,
  tracks, setTracks,
  name, setName,
  playlist, setPlaylist
}) {
  const [backable, setBackable] = useState(true)
  const [countryCode, setCountryCode] = useState("")
  const [accessToken, setAccessToken] = useState("")

  useEffect(() => {
    window.addEventListener("message", (event) => {
      const access_token = event.data.access_token
      if (!access_token) {
        return
      }

      setAccessToken(access_token)
    }, false)
  }, [])

  useEffect(() => {
    if (window.location.hash.length > 0) {
      const hash = window.location.hash
      const access_token = hash.substring(hash.indexOf("=") + 1, hash.indexOf("&"))

      window.opener.postMessage({access_token: access_token})
      window.close()
    }
  }, [])

  const handleDuration = (hours, mins) => {
    const h_in_s = parseInt(hours || 0) * 60 * 60
    const m_in_s = parseInt(mins || 0) * 60
    const new_duration = h_in_s + m_in_s

    setDuration(new_duration)
  }

  return(
    <div className="SpoopiContainer">
      { current_page === "categories" && <CategoriesContainer countryCode={countryCode} setCountryCode={setCountryCode} selectedCategories={categories} pageTraversal={pageTraversal}/> }
      { current_page === "timer" && <TimerContainer duration={duration} handleDuration={handleDuration} pageTraversal={pageTraversal}/> }
      { current_page === "tracks" && <TracksContainer duration={duration} categories={categories} countryCode={countryCode} tracks={tracks} handleTracks={setTracks} pageTraversal={pageTraversal} setBackable={setBackable} name={name} setName={setName} accessToken={accessToken} setPlaylist={setPlaylist}/> }
      { current_page === "playlist" && <PlaylistContainer playlist={playlist} pageTraversal={pageTraversal}/> }

      { current_page !== "categories"
          && current_page !== "playlist"
          && <BackButton backPage={pageTraversal} backable={backable}/>
      }

          <SpoopiTip current_page={current_page}/>
    </div>
  )
}

export default SpoopiContainer
