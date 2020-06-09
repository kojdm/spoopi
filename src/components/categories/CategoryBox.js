import React from 'react'
import "./CategoryBox.css"

function CategoryBox({ id, name, image_url }) {
  return(
    <div className="CategoryBox">
      <img className="category-image" src={image_url} alt={id}/>
      <div className="category-name">{name}</div>
    </div>
  )
}

export default CategoryBox
