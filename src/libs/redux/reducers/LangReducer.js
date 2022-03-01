import * as Common from "../../common"
const initialState = {}
export const LangReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LANG_CHANGED":
      if (typeof window !== `undefined`) {
        return Object.assign({}, state, {})
      } else {
        return null
      }
    default:
      return state
  }
}

export default LangReducer
