const initialState = {
  screenWidth: typeof window === "object" ? window.innerWidth : null,
  screenHeight: typeof window === "object" ? window.innerHeight : null,
}
export const ResizeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "RESIZE":
      return Object.assign({}, state, {
        screenWidth: action.screenWidth,
        screenHeight: action.screenHeight,
      })
    default:
      return state
  }
}

export default ResizeReducer
