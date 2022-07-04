import { combineReducers } from 'redux'
import { CATEGORY_ACTIONS } from '../actions'

const categoriesReducer = (selectedCategories = [], action) => {
  switch(action.type) {
    case CATEGORY_ACTIONS.TOGGLED:
      if (selectedCategories.includes(action.payload)) {
        return selectedCategories.filter(c => c !== action.payload)
      }
      return [...selectedCategories, action.payload]
    default:
      return selectedCategories
  }
}

export default combineReducers({
  categories: categoriesReducer,
})
