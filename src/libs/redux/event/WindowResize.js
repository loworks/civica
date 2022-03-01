import { connect } from "react-redux"
import { Component } from "react"
import { Resize } from "../action"
const singleton = Symbol()
const singletonEnforcer = Symbol()
export class WindowResize extends Component {
  static current = null
  static sp = "sp"
  static pab = "pab"
  static tb = "tab"
  static pc = "pc"
  static large = "large"
  static moreTab = "moretab"
  static morePc = "morePc"
  static lessPab = "lessPab"
  static lessTab = "lessTab"
  static width
  static height
  constructor(props, enforcer) {
    super(props)
    this._breakpoints = [480, 768, 960, 1280]

    this.currentSize = {}
  }
  static currentType = props => {
    const instance = WindowResize.instance
    const breakPoints = instance._breakpoints

    if (!instance.currentSize.w) {
      instance.setSize()
    }
    const screenW = instance.currentSize.w

    if (props === WindowResize.morePc) {
      if (screenW > breakPoints[2]) {
        return true
      } else {
        return false
      }
    }
    if (props === WindowResize.lessPab) {
      if (screenW < breakPoints[1]) {
        return true
      } else {
        return false
      }
    }
    if (props === WindowResize.lessTab) {
      if (screenW < breakPoints[2]) {
        return true
      } else {
        return false
      }
    }
  }

  static get instance() {
    if (!this[singleton]) {
      this[singleton] = new WindowResize(this.props, singletonEnforcer)
    }
    return this[singleton]
  }
  componentDidMount() {
    const { dispatch } = this.props

    const instance = WindowResize.instance
    window.addEventListener("resize", () => {
      instance.setSize()

      dispatch(Resize(instance.currentSize.w, instance.currentSize.h))
    })
  }
  setSize() {
    if (typeof window !== `undefined`) {
      const instance = WindowResize.instance
      const screenW = window.innerWidth
      const screenH = window.innerHeight
      WindowResize.width = screenW
      WindowResize.height = screenH
      WindowResize.current = instance.getCurrentSize(screenW)
      instance.currentSize = { w: screenW, h: screenH }
    }
  }
  getCurrentSize(size) {
    if (size < this._breakpoints[0]) {
      return WindowResize.sp
    } else if (this._breakpoints[0] <= size && size < this._breakpoints[1]) {
      return WindowResize.pab
    } else if (this._breakpoints[1] <= size && size < this._breakpoints[2]) {
      return WindowResize.tab
    } else if (this._breakpoints[2] <= size && size < this._breakpoints[3]) {
      return WindowResize.pc
    } else if (this._breakpoints[3] <= size) {
      return WindowResize.large
    }
  }
  render() {
    return null
  }
}

export default connect(
  state => {
    return {
      width: state.screenWidth,
      height: state.screenHeight,
    }
  },
  null,
  null,
  { forwardRef: true }
)(WindowResize)
