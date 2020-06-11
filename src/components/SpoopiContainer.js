import React, { useState, useReducer } from 'react'
import "./SpoopiContainer.css"

import CategoriesContainer from "./categories/CategoriesContainer"
import TimerContainer from "./timer/TimerContainer"

const initialState = { current_page: "categories" }
const pages = ["categories", "timer"]
const reducer = (state) => {
  const next_page_index = pages.indexOf(state.current_page) + 1
  return { current_page: pages[next_page_index] }
}

function SpoopiContainer() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [categories, setCategories] = useState([])
  const [duration, setDuration] = useState(0)

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
      { state.current_page === "categories" && <CategoriesContainer handleCategories={handleCategories} nextPage={dispatch}/> }
      { state.current_page === "timer" && <TimerContainer handleDuration={handleDuration} nextPage={dispatch}/> }
    </div>
  )
}

export default SpoopiContainer
