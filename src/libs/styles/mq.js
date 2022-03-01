const singleton = Symbol()
const singletonEnforcer = Symbol()

class Mq {
  constructor(enforcer) {
    /*  sp < 0 < pab < 1 < tab < 2 < pc < 3 < large  */
    /*  sp < 480 < pab < 768 < tab < 960 < pc < 1280 < large  */
    this._breakpoints = [415, 768, 960, 1280]
  }
  static get instance() {
    if (!this[singleton]) {
      this[singleton] = new Mq(singletonEnforcer)
    }
    return this[singleton]
  }
  static get breakpoints() {
    return Mq.instance._breakpoints
  }
  static set breakpoints(value) {
    Mq.instance._breakpoints = value
  }
  static get sp() {
    return `@media (max-width: ${Mq.instance._breakpoints[0] - 1}px)`
  }
  static get pab() {
    return `@media (min-width: ${
      Mq.instance._breakpoints[0]
    }px) and (max-width: ${Mq.instance._breakpoints[1] - 1}px)`
  }
  static get tb() {
    return `@media (min-width: ${
      Mq.instance._breakpoints[1]
    }px) and (max-width: ${Mq.instance._breakpoints[2] - 1}px)`
  }
  static get pc() {
    return `@media (min-width: ${
      Mq.instance._breakpoints[2]
    }px) and (max-width: ${Mq.instance._breakpoints[3] - 1}px)`
  }
  static get large() {
    return `@media (min-width: ${Mq.instance._breakpoints[3]}px)`
  }
  static get moreTab() {
    return `@media (min-width: ${Mq.instance._breakpoints[1]}px)`
  }
  static get morePc() {
    return `@media (min-width: ${Mq.instance._breakpoints[2]}px)`
  }
  static get lessPab() {
    return `@media (max-width: ${Mq.instance._breakpoints[1] - 1}px)`
  }
  static get lessTab() {
    return `@media (max-width: ${Mq.instance._breakpoints[2] - 1}px)`
  }
  static get lessPc() {
    return `@media (max-width: ${Mq.instance._breakpoints[3] - 1}px)`
  }
}
export default Mq
