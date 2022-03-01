export class Flick {
  constructor(props) {
    this.eventTypes = ["touch", "mouse"]
    this.events = {
      start: {
        touch: "touchstart",
        mouse: "mousedown",
      },
      move: {
        touch: "touchmove",
        mouse: "mousemove",
      },
      end: {
        touch: "touchend",
        mouse: "mouseup",
      },
    }
    this.saveProp = {}
    this.gestureStart = false
    this.DISTANCE_THRESHOLD = 5
    this.ANGLE_THREHOLD = 55
  }
  init(element, _props) {
    this.element = element
    let props = _props || {}
    this.distance = props.distance
    this.maxPoint = props.maxPoint
    this.onStart = props.onStart
    this.onEnd = props.onEnd
    this.currentPoint = 0
    this.currentX = 0
    this.animation = false
    this.timerId = null
    const me = this
    this.init = true
    this.touchMoveBind = this.touchMove.bind(this)
    this.eventTypes.forEach(function(type) {
      me.element.addEventListener(me.events.start[type], me, false)
    })
    this.transitionDuration =
      props.transitionDuration === undefined
        ? "350ms"
        : props.transitionDuration + "ms"
    this._setStyle({
      transitionProperty: "transform",
      transitionTimingFunction: "cubic-bezier(0,0,0.25,1)",
      transitionDuration: "0ms",
      /*transform: this.getTranslate(0),*/
    })
    this.refresh()
    this.init = false
  }
  refresh() {
    let self = this
    // setting max point
    self._maxPoint =
      self.maxPoint === undefined
        ? (function() {
            let childNodes = self.element.childNodes,
              itemLength = -1,
              i = 0,
              len = childNodes.length,
              node

            for (; i < len; i++) {
              node = childNodes[i]
              if (node.nodeType === 1) {
                itemLength++
              }
            }
            return itemLength
          })()
        : self.maxPoint

    // setting distance
    if (self.distance === undefined) {
      if (self._maxPoint < 0) {
        self._distance = 0
      } else {
        self._distance = self.element.scrollWidth / (self._maxPoint + 1)
      }
    } else {
      self._distance = self.distance
    }

    // setting maxX
    self._maxX = -self._distance * self._maxPoint
    // console.log("reflesh", self._maxPoint, self._maxX, self._distance)
    self.moveToPoint()
  }
  setCurrentPoint(point) {
    this.currentPoint = point
    this.refresh()
  }
  handleEvent(event) {
    switch (event.type) {
      // start
      case this.events.start.touch:
        this.touchStart(event, "touch")
        break
      case this.events.start.mouse:
        this.touchStart(event, "mouse")
        break

      case this.events.move.touch:
        this.touchMove(event, "touch")
        break
      case this.events.move.mouse:
        this.touchMove(event, "mouse")
        break

      // end
      case this.events.end.touch:
        this.touchEnd(event, "touch")
        break
      case this.events.end.mouse:
        this.touchEnd(event, "mouse")
        break

      // click
      case "click":
        this.click(event)
        break
      default:
    }
  }
  touchStart(event, type) {
    let me = this

    if (this.onStart) this.onStart(this.currentPoint)
    me.element.addEventListener(this.events.move[type], me.touchMoveBind, {
      passive: false,
    })
    /*me.element.addEventListener(this.events.move[type], me, false)*/
    document.addEventListener(this.events.end[type], me, false)

    let tagName = event.target.tagName
    if (
      type === "mouse" &&
      tagName !== "SELECT" &&
      tagName !== "INPUT" &&
      tagName !== "TEXTAREA" &&
      tagName !== "BUTTON"
    ) {
      event.preventDefault()
    }
    me._setStyle({ transitionDuration: "0ms" })
    me.scrolling = true
    me.moveReady = false
    me.startPageX = me.getPage(event, "pageX")
    me.startPageY = me.getPage(event, "pageY")
    me.basePageX = me.startPageX
    me.directionX = 0
    me.startTime = event.timeStamp
  }
  touchMove(event, type) {
    const me = this
    // console.log(me.scrolling, me.gestureStart)
    if (!me.scrolling || me.gestureStart) {
      return
    }
    let pageX = this.getPage(event, "pageX")
    let pageY = this.getPage(event, "pageY")
    let distX = 0
    let newX = 0
    if (me.moveReady) {
      event.preventDefault()

      distX = pageX - me.basePageX
      newX = me.currentX + distX

      if (newX >= 0 || newX < me._maxX) {
        //newX = Math.round(me.currentX + distX / 3)
      }

      me.directionX = distX === 0 ? me.directionX : distX > 0 ? -1 : 1
      /* console.log(
        "touchMove",
        type,
        pageX,
        me.basePageX,
        distX,
        me.directionX,
        me.currentX,
        newX,
        me._maxX
      )*/
      me.setX(newX)
    } else {
      var triangle = this.getTriangleSide(
        me.startPageX,
        me.startPageY,
        pageX,
        pageY
      )
      if (triangle.z > this.DISTANCE_THRESHOLD) {
        if (this.getAngle(triangle) > this.ANGLE_THREHOLD) {
          event.preventDefault()
          me.moveReady = true
          me.element.addEventListener("click", me, true)
        } else {
          me.scrolling = false
        }
      }
    }
    me.basePageX = pageX
  }

  click(event, type) {
    //console.log("clickclickclickclick", event, type)
    event.stopPropagation()
    event.preventDefault()
  }
  touchEnd(event, type) {
    let me = this
    //console.log(this.events.move[type])
    me.element.removeEventListener(this.events.move[type], me.touchMoveBind)
    me.element.removeEventListener(this.events.move[type], me, false)
    document.removeEventListener(this.events.end[type], me, false)
    if (!me.scrolling) {
      return
    }
    const prevPoint = me.currentPoint
    let newPoint = -me.currentX / me._distance
    // console.log("newPoint = ", newPoint, me.currentX, me._distance)
    newPoint =
      me.directionX > 0
        ? Math.ceil(newPoint)
        : me.directionX < 0
        ? Math.floor(newPoint)
        : Math.round(newPoint)

    if (newPoint < 0) {
      //newPoint = 0
    } else if (newPoint > me._maxPoint) {
      newPoint = me._maxPoint
    }

    if (Math.abs(me.startPageX - me.basePageX) < me.threshold) {
      newPoint = me.currentPoint
    }
    me.touchAfter({
      moved: newPoint !== me.currentPoint,
      originalPoint: me.currentPoint,
      newPoint: newPoint,
      cancelled: false,
    })

    me.moveToPoint(newPoint)
    if (this.onEnd && prevPoint !== me.currentPoint)
      this.onEnd(this.currentPoint)
  }
  moveToPoint(point, transitionDuration) {
    let self = this
    //console.log("point", point)
    transitionDuration =
      transitionDuration === undefined
        ? self.transitionDuration
        : transitionDuration + "ms"

    let beforePoint = self.currentPoint

    // not called from `refresh()`
    if (point === undefined) {
      point = self.currentPoint
    }

    if (point < 0) {
      self.currentPoint = point
    } else if (point > self._maxPoint) {
      self.currentPoint = self._maxPoint
    } else {
      self.currentPoint = parseInt(point, 10)
    }
    self._setStyle({ transitionDuration: transitionDuration })
    /*
    if (support.cssAnimation) {

    } else {
      self.animation = true
    }*/

    self.setX(-self.currentPoint * self._distance, transitionDuration)

    if (beforePoint !== self.currentPoint) {
      // is move?
      // `fsmoveend` is deprecated
      // `fspointmove` is recommend.
      //self._triggerEvent("fsmoveend", true, false)
      //self._triggerEvent("fspointmove", true, false)
    }
  }

  touchAfter(params) {
    let me = this

    me.scrolling = false
    me.moveReady = false

    setTimeout(function() {
      me.element.removeEventListener("click", me, true)
    }, 200)
    /*
    me._triggerEvent("fstouchend", true, false, params)*/
  }
  getPage(event, page) {
    return event.changedTouches ? event.changedTouches[0][page] : event[page]
  }
  setX(x, transitionDuration) {
    const me = this

    me.currentX = x
    //console.log("setX = ", me.currentX)
    if (!this.init)
      me.element.style["transform"] = "translate3d(" + x + "px, 0, 0)"
  }

  _setStyle(styles) {
    //console.log("_setStyle")
    let self = this
    let style = self.element.style

    for (let prop in styles) {
      this.setStyle(style, prop, styles[prop])
    }
  }
  setStyle(style, prop, val) {
    //console.log("setStyle", style, prop, val)
    let _saveProp = this.saveProp[prop]
    if (_saveProp) {
      style[_saveProp] = val
    } else if (style[prop] !== undefined) {
      this.saveProp[prop] = prop
      style[prop] = val
    } else {
      /*some(prefix, function(_prefix) {
        let _prop = this.ucFirst(_prefix) + this.ucFirst(prop)
        if (style[_prop] !== undefined) {
          saveProp[prop] = _prop
          style[_prop] = val
          return true
        }
      })*/
    }
  }
  getTranslate(x) {
    return "translate3d(" + x + "px, 0, 0)"
  }
  ucFirst(str) {
    return str.charAt(0).toUpperCase() + str.substr(1)
  }
  getTriangleSide(x1, y1, x2, y2) {
    var x = Math.abs(x1 - x2)
    var y = Math.abs(y1 - y2)
    var z = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))

    return {
      x: x,
      y: y,
      z: z,
    }
  }
  getAngle(triangle) {
    var cos = triangle.y / triangle.z
    var radian = Math.acos(cos)

    return 180 / (Math.PI / radian)
  }
}
export default Flick
