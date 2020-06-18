import React, { useState, useReducer } from 'react';
import './App.css';

import SpoopiNav from "./components/SpoopiNav"
import SpoopiContainer from "./components/SpoopiContainer"

const initialPageState = {
  current_page: "categories",
}
const pages = ["categories", "timer", "tracks", "playlist"]
const pageReducer = (state, action) => {
  switch(action) {
    case "next":
      const next_page_index = pages.indexOf(state.current_page) + 1
      return { current_page: pages[next_page_index] }
    case "back":
      const previous_page_index = pages.indexOf(state.current_page) - 1
      return { current_page: pages[previous_page_index] }
    case "reload":
      return window.location.reload()
    default:
      throw new Error()
  }
}

function App() {
  const [pageState, pageTraversal] = useReducer(pageReducer, initialPageState)
  const [categories, setCategories] = useState([])
  const [duration, setDuration] = useState(0)
  const [tracks, setTracks] = useState([])
  const [name, setName] = useState("")
  const [playlist, setPlaylist] = useState({})

  const spoopiPlaylist = {
    categories: categories,
    duration: duration,
    track_count: tracks.length,
    name: name,
    spotify_url: playlist.spotify_url
  }

  return(
    <div className="App">
      <div className="column left">
        <SpoopiContainer
          current_page={pageState.current_page}
          pageTraversal={pageTraversal}
          categories={categories} setCategories={setCategories}
          duration={duration} setDuration={setDuration}
          tracks={tracks} setTracks={setTracks}
          name={name} setName={setName}
          playlist={playlist} setPlaylist={setPlaylist}
        />
      </div>
      <div className="column right">
        <SpoopiNav current_page={pageState.current_page} spoopiPlaylist={spoopiPlaylist}/>
      </div>
    </div>
  )
}

export default App;
