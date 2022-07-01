import React from 'react'
import { connect } from 'react-redux'

import { toggleCategory } from '../../actions'
import "./CategoryBox.css"

function CategoryBox({ id, name, image_url, isSelected, catCount, toggleCategory }) {
  const handleClick = () => {
    if (catCount < 5 || isSelected) {
      toggleCategory(id)
    }
  }

  return(
    <div className={"CategoryBox" + (isSelected ? " category-selected" : "")} onClick={handleClick}>
      <img className="category-image" src={image_url} alt={id}/>
      <div className="category-name">{name}</div>
    </div>
  )
}

const mapDispatchToProps = { toggleCategory }

export default connect(null, mapDispatchToProps)(CategoryBox)
