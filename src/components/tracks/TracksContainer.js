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

  useEffect(() => {
    if (duration <= 0 || categories.length <= 0) return
    setBackable(false)

    // TODO: find out how to put url in env
    const base_url = "http://localhost:9292/generate_tracks"
    const url = base_url + "?seconds=" + duration + "&category_ids=" + categories.join(",") + "&country_code=" + countryCode

    fetch(url).then(res => res.json()).then((result) => {
      setLoading(false)
      handleTracks(result.spoopi.tracks)
      setBackable(true)
    })

  }, [duration, categories, countryCode, handleTracks, setBackable])

  useEffect(() => {
    if (!accessToken || tracks.length <= 0 || categories.length <= 0 || duration <= 0 || name.length <= 0) {
      return
    }

    // TODO: add url to env
    const base_url = "http://localhost:9292/create_playlist"
    const track_uris = tracks.map(tr => tr.uri).join(",")
    const params = {
      access_token: accessToken,
      track_uris: track_uris,
      pl_name: name,
      category_ids: categories.join(",")
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
      {
        loading
        ? <SpoopiLoader/>
        : tracks.map(track => (
          <TrackBox track={track} useIframe={useIframe}/>))
      }
          <AddToSpotifyButton nextable={!loading} nextPage={pageTraversal} name={name} setName={setName}/>
    </div>
  )
}

export default TracksContainer
