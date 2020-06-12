import React from 'react'
import "./CategoryBox.css"

function CategoryBox({ id, name, image_url, handleCatCount, handleCategories, isSelected }) {
  const handleClick = () => {
    const increment = isSelected ? -1 : 1
    const current_count = handleCatCount(increment)

    if (current_count <= 5) {
      handleCategories(id)
    }
  }

  return(
    <div className={"CategoryBox" + (isSelected ? " category-selected" : "")} onClick={handleClick}>
      <img className="category-image" src={image_url} alt={id}/>
      <div className="category-name">{name}</div>
    </div>
  )
}

export default CategoryBox
