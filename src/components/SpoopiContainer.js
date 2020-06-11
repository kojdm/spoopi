import React, { useState } from 'react'
import "./SpoopiContainer.css"

import CategoriesContainer from "./categories/CategoriesContainer"
import TimerContainer from "./timer/TimerContainer"

function SpoopiContainer() {
  const [duration, setDuration] = useState(0)
  const [categories, setCategories] = useState([])

  const handleDuration = (hours, mins) => {
    const h_in_s = parseInt(hours || 0) * 60 * 60
    const m_in_s = parseInt(mins || 0) * 60
    const new_duration = h_in_s + m_in_s

    setDuration(new_duration)
  }

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

      // <TimerContainer/>
      // <CategoriesContainer handleCategories={handleCategories}/>
  return(
    <div className="SpoopiContainer">
      <TimerContainer handleDuration={handleDuration}/>
      <h1>{duration}</h1>
    </div>
  )
}

export default SpoopiContainer
