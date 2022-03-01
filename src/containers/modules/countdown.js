import { connect } from "react-redux"

import { CowntDownCont } from "../../components/modules/countdown"

function mapStateToProps(state) {
  return state
}

export const AppContainer = connect(mapStateToProps)(CowntDownCont)
