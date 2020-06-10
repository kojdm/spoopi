import React, { useState } from 'react'
import "./SpoopiContainer.css"

import CategoriesContainer from "./categories/CategoriesContainer"

function SpoopiContainer() {
  const [duration, setDuration] = useState(0)
  const [categories, setCategories] = useState([])

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

  return(
    <div className="SpoopiContainer">
      <CategoriesContainer handleCategories={handleCategories}/>
    </div>
  )
}

export default SpoopiContainer
