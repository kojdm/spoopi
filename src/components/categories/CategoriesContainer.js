import React, { useState, useEffect } from 'react'
import "./CategoriesContainer.css"

import CategoryBox from "./CategoryBox"

function CategoriesContainer() {
  const [countryCode, setCountryCode] = useState("")
  const [categories, setCategories] = useState([])

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
          setCategories(result.categories)
        }
      )
  }, [countryCode])

  return(
    <div className="CategoriesContainer">
      {categories.map(cat => (
        <CategoryBox id={cat.id} name={cat.name} image_url={cat.image_url}/>
      ))}
    </div>
  )
}

export default CategoriesContainer
