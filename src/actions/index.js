export const CATEGORY_ACTIONS = {
  TOGGLED: "CATEGORY_TOGGLED",
}

export const toggleCategory = (category) => {
  return {
    type: CATEGORY_ACTIONS.TOGGLED,
    payload: category
  }
}
