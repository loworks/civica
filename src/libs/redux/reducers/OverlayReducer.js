const initialState = {
  content: null,
  state: false,
}

export const OverlayReducer = (state = initialState, action) => {
  switch (action.type) {
    case "OVERLAYOPEN":
      if (typeof window !== `undefined`) {
        return Object.assign({}, state, {
          content: action.content,
          state: true,
        })
      } else {
        return false
      }
    case "OVERLAYCLOSED":
      if (typeof window !== `undefined`) {
        return Object.assign({}, state, { state: false, content: null })
      } else {
        return false
      }
    case "OVERLAYCLOSE":
      if (typeof window !== `undefined`) {
        return Object.assign({}, state, { state: false, content: null })
      } else {
        return false
      }
    default:
      return state
  }
}

export default OverlayReducer
