const initialState = {
  sliderId: 0,
  type: "SLIDERCHANGE",
  target: null,
  set: false,
}

export const SliderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SLIDERCLICK":
      if (typeof window !== `undefined`) {
        return Object.assign({}, state, {
          sliderId: action.sliderId,
          type: action.type,
          target: action.target,
        })
      } else {
        return false
      }
    case "SLIDERCHANGE":
      if (typeof window !== `undefined`) {
        if (action.set) return false
        return Object.assign({}, state, {
          sliderId: action.sliderId,
          type: action.type,
          target: action.target,
        })
      } else {
        return false
      }
    default:
      return state
  }
}

export default SliderReducer
