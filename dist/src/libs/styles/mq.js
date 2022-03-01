"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var singleton = Symbol();
var singletonEnforcer = Symbol();

var Mq = /*#__PURE__*/function () {
  function Mq(enforcer) {
    _classCallCheck(this, Mq);

    /*  sp < 0 < pab < 1 < tab < 2 < pc < 3 < large  */

    /*  sp < 480 < pab < 768 < tab < 960 < pc < 1280 < large  */
    this._breakpoints = [415, 768, 960, 1280];
  }

  _createClass(Mq, null, [{
    key: "instance",
    get: function get() {
      if (!this[singleton]) {
        this[singleton] = new Mq(singletonEnforcer);
      }

      return this[singleton];
    }
  }, {
    key: "breakpoints",
    get: function get() {
      return Mq.instance._breakpoints;
    },
    set: function set(value) {
      Mq.instance._breakpoints = value;
    }
  }, {
    key: "sp",
    get: function get() {
      return "@media (max-width: ".concat(Mq.instance._breakpoints[0] - 1, "px)");
    }
  }, {
    key: "pab",
    get: function get() {
      return "@media (min-width: ".concat(Mq.instance._breakpoints[0], "px) and (max-width: ").concat(Mq.instance._breakpoints[1] - 1, "px)");
    }
  }, {
    key: "tb",
    get: function get() {
      return "@media (min-width: ".concat(Mq.instance._breakpoints[1], "px) and (max-width: ").concat(Mq.instance._breakpoints[2] - 1, "px)");
    }
  }, {
    key: "pc",
    get: function get() {
      return "@media (min-width: ".concat(Mq.instance._breakpoints[2], "px) and (max-width: ").concat(Mq.instance._breakpoints[3] - 1, "px)");
    }
  }, {
    key: "large",
    get: function get() {
      return "@media (min-width: ".concat(Mq.instance._breakpoints[3], "px)");
    }
  }, {
    key: "moreTab",
    get: function get() {
      return "@media (min-width: ".concat(Mq.instance._breakpoints[1], "px)");
    }
  }, {
    key: "morePc",
    get: function get() {
      return "@media (min-width: ".concat(Mq.instance._breakpoints[2], "px)");
    }
  }, {
    key: "lessPab",
    get: function get() {
      return "@media (max-width: ".concat(Mq.instance._breakpoints[1] - 1, "px)");
    }
  }, {
    key: "lessTab",
    get: function get() {
      return "@media (max-width: ".concat(Mq.instance._breakpoints[2] - 1, "px)");
    }
  }, {
    key: "lessPc",
    get: function get() {
      return "@media (max-width: ".concat(Mq.instance._breakpoints[3] - 1, "px)");
    }
  }]);

  return Mq;
}();

var _default = Mq;
exports["default"] = _default;

//# sourceMappingURL=mq.js.map