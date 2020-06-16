import React, { useState, useReducer } from 'react'
import "./SpoopiContainer.css"

import CategoriesContainer from "./categories/CategoriesContainer"
import TimerContainer from "./timer/TimerContainer"
import TracksContainer from "./tracks/TracksContainer"
import BackButton from "./BackButton"

const initialState = { current_page: "categories" }
const pages = ["categories", "timer", "tracks"]
const reducer = (state, action) => {
  switch(action) {
    case "next":
      const next_page_index = pages.indexOf(state.current_page) + 1
      return { current_page: pages[next_page_index] }
    case "back":
      const previous_page_index = pages.indexOf(state.current_page) - 1
      return { current_page: pages[previous_page_index] }
    default:
      throw new Error()
  }
}

function SpoopiContainer() {
  const [state, pageTraversal] = useReducer(reducer, initialState)
  const [backable, setBackable] = useState(true)
  const [countryCode, setCountryCode] = useState("")
  const [categories, setCategories] = useState([])
  const [duration, setDuration] = useState(0)
  const [tracks, setTracks] = useState([])

  const handleCategories = (category_id) => {
    let new_categories = categories
    const cat_index = new_categories.indexOf(category_id)

    if (cat_index >= 0) {
      // category already in array so remove it
      new_categories.splice(cat_index, 1)
    }
    else {
      new_categories.push(category_id)
    }

    setCategories(new_categories)
  }

  const handleDuration = (hours, mins) => {
    const h_in_s = parseInt(hours || 0) * 60 * 60
    const m_in_s = parseInt(mins || 0) * 60
    const new_duration = h_in_s + m_in_s

    setDuration(new_duration)
  }

  return(
    <div className="SpoopiContainer">
      { state.current_page === "categories" && <CategoriesContainer countryCode={countryCode} setCountryCode={setCountryCode} handleCategories={handleCategories} selectedCategories={categories} pageTraversal={pageTraversal}/> }
      { state.current_page === "timer" && <TimerContainer duration={duration} handleDuration={handleDuration} pageTraversal={pageTraversal}/> }
      { state.current_page === "tracks" && <TracksContainer duration={duration} categories={categories} countryCode={countryCode} tracks={tracks} handleTracks={setTracks} pageTraversal={pageTraversal} setBackable={setBackable}/> }

      { state.current_page !== "categories" && <BackButton backPage={pageTraversal} backable={backable}/>}
    </div>
  )
}

export default SpoopiContainer
