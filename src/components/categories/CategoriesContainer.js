import React, { useState, useEffect } from 'react'
import "./CategoriesContainer.css"
import CategoryBox from "./CategoryBox"
import NextButton from "../NextButton"

function CategoriesContainer({ countryCode, setCountryCode, pageTraversal, selectedCategories }) {
  const [allCategories, setAllCategories] = useState([])
  const catCount = selectedCategories.length

  useEffect(() => {
    const local_categories = JSON.parse(localStorage.getItem("allCategories"))
    const local_countryCode = localStorage.getItem("countryCode")
    if (local_categories && local_countryCode) {
      setCountryCode(local_countryCode)
      setAllCategories(local_categories)
      return
    }

    // get user's country code
    fetch(process.env.REACT_APP_IP_API_URL)
      .then(res => res.text())
      .then(
        (result) => {
          const ind = result.indexOf("loc")
          const country_code = result.slice(ind + 4, ind + 6)
          setCountryCode(country_code)
          localStorage.setItem("countryCode", country_code)

          return country_code
        })
      .then(
        (country_code) => {
          // get categories from spoopi api
          const query = country_code ? "?country_code=" + country_code : ""
          fetch(process.env.REACT_APP_SPOOPI_API_URL + "/categories" + query)
            .then(res => res.json())
            .then(
              (result) => {
                setAllCategories(result.categories)
                localStorage.setItem("allCategories", JSON.stringify(result.categories))
              }
            )
        }
      )
  }, [countryCode, setCountryCode])

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
    <>
    <div className="CategoriesContainer">
      {allCategories.map(cat => (
        <CategoryBox
          id={cat.id}
          name={cat.name}
          image_url={cat.image_url}
          isSelected={selectedCategories.indexOf(cat.id) >= 0}
          catCount={catCount}
        />
      ))}
    </div>
    <NextButton content={nextButtonContent()} nextable={catCount >= 1} nextPage={pageTraversal}/>
    </>
  )
}

export default CategoriesContainer
