import React, { useState, useEffect } from 'react'
import "./CategoriesContainer.css"

import CategoryBox from "./CategoryBox"
import NextButton from "../NextButton"

function CategoriesContainer({ countryCode, setCountryCode, handleCategories, pageTraversal, selectedCategories }) {
  const [allCategories, setAllCategories] = useState([])
  const [catCount, setCatCount] = useState(selectedCategories.length)

  useEffect(() => {
    const local_categories = JSON.parse(localStorage.getItem("allCategories"))
    const local_countryCode = localStorage.getItem("countryCode")
    if (local_categories && local_countryCode) {
      setCountryCode(local_countryCode)
      setAllCategories(local_categories)
      return
    }

    // get user's country code
    fetch("http://ip-api.com/json")
      .then(res => res.json())
      .then(
        (result) => {
          setCountryCode(result.countryCode)
          localStorage.setItem("countryCode", result.countryCode)
        })

    // TODO: find out how to put url in env
    const query = countryCode ? "?country_code=" + countryCode : ""
    fetch("http://localhost:9292/categories" + query)
      .then(res => res.json())
      .then(
        (result) => {
          setAllCategories(result.categories)
          localStorage.setItem("allCategories", JSON.stringify(result.categories))
        }
      )
  }, [countryCode, setCountryCode])

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
