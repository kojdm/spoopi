import React, { useState } from 'react'
import "./CategoryBox.css"

function CategoryBox({ id, name, image_url, handleCatCount, handleCategories }) {
  const [selectedClass, setSelectedClass] = useState("")

  const handleClick = () => {
    const is_selected = selectedClass === "category-selected"
    const increment = is_selected ? -1 : 1
    const current_count = handleCatCount(increment)

    if (current_count <= 5) {
      setSelectedClass(is_selected ? "" : "category-selected")
      handleCategories(id)
    }
  }

  return(
    <div className={"CategoryBox " + selectedClass} onClick={handleClick}>
      <img className="category-image" src={image_url} alt={id}/>
      <div className="category-name">{name}</div>
    </div>
  )
}

export default CategoryBox
