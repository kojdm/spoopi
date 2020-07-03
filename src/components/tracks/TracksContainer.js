import React, { useEffect, useState } from "react"
import "./TracksContainer.css"

import SpoopiLoader from "../SpoopiLoader"
import AddToSpotifyButton from "../AddToSpotifyButton"
import TrackBox from "./TrackBox"

function TracksContainer({
  duration,
  categories,
  countryCode,
  tracks,
  handleTracks,
  pageTraversal,
  setBackable,
  name,
  setName,
  accessToken,
  setPlaylist
}) {
  const [loading, setLoading] = useState(true)
  const [actualDuration, setActualDuration] = useState(0)

  useEffect(() => {
    if (duration <= 0 || categories.length <= 0) return
    setBackable(false)

    const base_url = process.env.REACT_APP_SPOOPI_API_URL + "/generate_tracks"
    const url = base_url + "?seconds=" + duration + "&category_ids=" + categories.join(",") + "&country_code=" + countryCode

    fetch(url).then(res => res.json()).then((result) => {
      const tracks = result.spoopi.tracks
      const actual_d = tracks.reduce((a, b) => (a + b.duration_ms), 0)
      setLoading(false)
      handleTracks(tracks)
      setActualDuration(actual_d)
      setBackable(true)
    })

  }, [duration, categories, countryCode, handleTracks, setBackable])

  useEffect(() => {
    if (!accessToken || tracks.length <= 0 || categories.length <= 0 || duration <= 0 || name.length <= 0) {
      return
    }

    const base_url = process.env.REACT_APP_SPOOPI_API_URL + "/create_playlist"
    const track_uris = tracks.map(tr => tr.uri).join(",")
    const params = {
      access_token: accessToken,
      track_uris: track_uris,
      pl_name: name,
      category_ids: categories.join(","),
      seconds: duration,
      actual_duration: actualDuration
    }

    fetch(base_url, {
      method: "POST",
      body: JSON.stringify(params)
    }).then(res => res.json()).then((result) => {
      setPlaylist(result.new_playlist)
    })

    pageTraversal("next")
  }, [accessToken])

  const useIframe = tracks.length <= 20

  return(
    <div className={
      loading
        ? ""
        : "TracksContainer"  + ( useIframe ? " iframe-columns" : " spoopi-tracks-columns")
      }>
      { loading
        ? <SpoopiLoader content="Generating tracks..." warning="This could take a while for longer playlists"/>
        : tracks.map(track => (
          <TrackBox track={track} useIframe={useIframe}/>))
      }
      { loading
          ? null
          : <AddToSpotifyButton nextable={!loading} nextPage={pageTraversal} name={name} setName={setName}/>
      }
    </div>
  )
}

export default TracksContainer
