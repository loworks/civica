import { Component } from "react"
import { connect } from "react-redux"
import { TimelineMax, TweenMax } from "gsap"

const SCENE_STATE_BEFORE = "BEFORE"
const SCENE_STATE_DURING = "DURING"
const SCENE_STATE_AFTER = "AFTER"
export class ScrollAnim extends Component {
  constructor(props) {
    super(props)
    this.triger = ""
    this.elem = this.props.elem
    this.offset = this.props.offset ? this.props.offset : 0
    this.progress = 0
    this._state = SCENE_STATE_BEFORE
    this.duration = this.props.duration ? this.props.duration : 0
    this.scrollOffset = {
      start: 0,
      end: 0,
    }

    this.mount = false
  }
  componentDidMount() {
    this.mount = true
  }

  _getScrollTop(elem) {
    return elem && typeof elem.scrollTop === "number"
      ? elem.scrollTop
      : window.pageYOffset || 0
  }
  // get scroll left value
  _getScrollLeft(elem) {
    return elem && typeof elem.scrollLeft === "number"
      ? elem.scrollLeft
      : window.pageXOffset || 0
  }
  _getOffset(elem, relativeToViewport) {
    var offset = {
      top: 0,
      left: 0,
    }
    if (elem && elem.getBoundingClientRect) {
      // check if available
      var rect = elem.getBoundingClientRect()
      offset.top = rect.top
      offset.left = rect.left
      if (!relativeToViewport) {
        offset.top += this._getScrollTop()
        offset.left += this._getScrollLeft()
      }
    }
    return offset
  }
  init() {
    const elem = this.elem.current

    this.updateScrollOffset(this.props.screenH)
    const TweenObject = TweenMax.fromTo(
      elem,
      1,
      {
        y: "1%",
        opacity: 0,
        scale: 0.5,
      },
      {
        y: "0%",
        opacity: 1,
        scale: 1,
      }
    )

    this.tween = new TimelineMax({
      smoothChildTiming: true,
    }).add(TweenObject)
    this.tween.pause()

    this.mount = true
  }
  updateScrollOffset(screenH) {
    if (!this.mount) return
    const elem = this.elem.current
    this.scrollOffset = {
      start: this._getOffset(elem).top + this.offset,
    }

    // take away triggerHook portion to get relative to top

    this.scrollOffset.start -= screenH * 0.5
    this.scrollOffset.end = this.scrollOffset.start + this.duration
    /*console.log(
      "updateScrollOffset",
      screenH,

      this.elem,
      this.scrollOffset.start,
      this.scrollOffset.end
    )*/
  }
  getPosition({ scrollY }) {
    if (!this.mount) return

    let progress = 0
    let newProgress = 0
    let doUpdate = false
    if (this.duration > 0) {
      progress =
        (scrollY - this.scrollOffset.start) /
        (this.scrollOffset.end - this.scrollOffset.start)
    } else {
      progress = scrollY >= this.scrollOffset.start ? 1 : 0
    }

    if (progress < 0 && this._state !== SCENE_STATE_BEFORE) {
      newProgress = 0
      this._state = SCENE_STATE_BEFORE
      doUpdate = true
    } else if (progress >= 0 && progress < 1) {
      newProgress = progress
      this._state = SCENE_STATE_DURING
      doUpdate = true
    } else if (progress >= 1 && this._state !== SCENE_STATE_AFTER) {
      newProgress = 1
      this._state = SCENE_STATE_AFTER
      doUpdate = true
    }
    if (doUpdate) {
      this.tween.progress(newProgress).pause()
      /* console.log(
        "getPosition",
        newProgress,
        scrollY,
        this.scrollOffset.start,
        this.scrollOffset.end
      )*/
    }
  }

  render() {
    this.getPosition(this.props)
    this.updateScrollOffset(this.props.screenH)
    return null
  }
}

export default connect(
  state => {
    return {
      scrollY: state.EnterFrameReducer.scrollY,
      screenW: state.ResizeReducer.screenWidth,
      screenH: state.ResizeReducer.screenHeight,
    }
  },
  null,
  null,
  { forwardRef: true }
)(ScrollAnim)
