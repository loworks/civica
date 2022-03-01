import { combineReducers } from "redux"
import EnterFrameReducer from "./EnterFrameReducer"
import ResizeReducer from "./ResizeReducer"
import ClickReducer from "./ClickReducer"
import SliderReducer from "./SliderReducer"
import SelectReducer from "./SelectReducer"
import OverlayReducer from "./OverlayReducer"
import BagReducer from "./BagReducer"
import TransitionReducer from "./TransitionReducer"
export default combineReducers({
  EnterFrameReducer,
  ResizeReducer,
  ClickReducer,
  SliderReducer,
  SelectReducer,
  OverlayReducer,
  BagReducer,
  TransitionReducer,
})
