import { Background } from "../../components/modules/BackgroundImage"
import { connect } from "react-redux"
function mapStateToProps(state) {
  return state
}

export const BgCont = connect(mapStateToProps)(Background)
