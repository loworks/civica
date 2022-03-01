import * as Common from "../../common"
const initialState = {
  transitionValue: "load",
  category: null,
  current: null,
  prev: null,
  next: null,
  onMenu: false,
  pageType: null,
  id: 0,
}
export const TransitionReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TRANSITION_COMPLETE":
      if (typeof window !== `undefined`) {
        let locationHref = "/"
        locationHref = window.location.href
        const filename = Common.Func.getFileName(locationHref)

        state.id += 1
        let current = action.current
          ? action.current
          : { name: Common.Func.toUpperCaseFiest(filename), slug: filename }
        return Object.assign({}, state, {
          transitionValue: "complete",
          category: action.category,
          pageType: action.pageType,
          current: current,
          prev: action.prev,
          next: action.next,
        })
      } else {
        return null
      }
    default:
      return state
  }
}

export default TransitionReducer
