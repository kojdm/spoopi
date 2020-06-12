import React, { useState, useEffect } from 'react'
import "./CategoriesContainer.css"

import CategoryBox from "./CategoryBox"
import NextButton from "../NextButton"

function CategoriesContainer({ handleCategories, pageTraversal, selectedCategories }) {
  const [countryCode, setCountryCode] = useState("")
  const [allCategories, setAllCategories] = useState([])
  const [catCount, setCatCount] = useState(selectedCategories.length)

  useEffect(() => {
    // get user's country code
    fetch("http://ip-api.com/json")
      .then(res => res.json())
      .then(
        (result) => {
          setCountryCode(result.countryCode)
        })

    const query = countryCode ? "?country_code=" + countryCode : ""
    fetch("http://localhost:9292/categories" + query)
      .then(res => res.json())
      .then(
        (result) => {
          setAllCategories(result.categories)
        }
      )
  }, [countryCode])

  const handleCatCount = (increment) => {
    const new_count = catCount + increment
    if (new_count <= 5) {
      setCatCount(new_count) 
    }

    return new_count
  }

  const nextButtonContent = () => {
    if (catCount === 5) {
      return "5 of 5 selected"
    }
    else if (catCount >= 1) {
      return catCount + " selected"
    }
    else {
      return "Choose up to 5 categories"
    }
  }

  return(
    <div className="CategoriesContainer">
      {allCategories.map(cat => (
        <CategoryBox
          id={cat.id}
          name={cat.name}
          image_url={cat.image_url}
          handleCatCount={handleCatCount}
          handleCategories={handleCategories}
          isSelected={selectedCategories.indexOf(cat.id) >= 0}
        />
      ))}
        <NextButton content={nextButtonContent()} nextable={catCount >= 1} nextPage={pageTraversal}/>
    </div>
  )
}

export default CategoriesContainer
