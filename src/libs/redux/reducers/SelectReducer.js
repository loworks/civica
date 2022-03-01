const initialState = {
  slug: 0,
  value: null,
  currentValue: null,
}

export const SelectReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECTCHANGE":
      if (typeof window !== `undefined`) {
        return Object.assign({}, state, {
          slug: action.slug,
          value: action.value,
          currentValue: action.currentValue,
        })
      } else {
        return false
      }
    case "SELECTOPEN":
      if (typeof window !== `undefined`) {
        return Object.assign({}, state, {
          slug: action.slug,
          value: action.value,
          currentValue: action.currentValue,
        })
      } else {
        return false
      }

    default:
      return state
  }
}

export default SelectReducer
