"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Actor = function Actor(name, age) {
  _classCallCheck(this, Actor);

  this.name = name;
  this.age = age;
};
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var EventEmmitter =
/*#__PURE__*/
function () {
  function EventEmmitter() {
    _classCallCheck(this, EventEmmitter);

    this.events = {}; //empty object.
  }

  _createClass(EventEmmitter, [{
    key: "on",
    value: function on(eventName, callback) {
      if (!this.events[eventName]) {
        this.events[eventName] = [];
      }

      this.events[eventName].push(callback);
    }
  }, {
    key: "emit",
    value: function emit(eventName) {
      var _this = this;

      var event = this.event[eventName];

      if (event) {
        event.forEach(function (callback) {
          callback.call(_this);
        });
      }
    }
  }, {
    key: "off",
    value: function off(eventName, callback) {
      var event = this.events[eventName];

      if (event) {
        for (var i = 0; i < event.length; i++) {
          if (event[i] == callback) {
            event.splice(i, 1);
            break;
          }
        }
      }
    }
  }]);

  return EventEmmitter;
}();
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Logger =
/*#__PURE__*/
function () {
  function Logger() {
    _classCallCheck(this, Logger);
  }

  _createClass(Logger, [{
    key: "log",
    value: function log(info) {
      console.log("The " + info + " event has been emitted.");
    }
  }]);

  return Logger;
}();
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _eventEmitter2 = require("./eventEmitter.js");

var _social = require("./social.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Movie =
/*#__PURE__*/
function (_eventEmitter) {
  _inherits(Movie, _eventEmitter);

  function Movie(tittle, year, duration) {
    var _this;

    _classCallCheck(this, Movie);

    _this.tittle = tittle;
    _this.year = year;
    _this.duration = duration;
    Object.assign(Movie.prototype, _social.social);
    return _possibleConstructorReturn(_this);
  }

  _createClass(Movie, [{
    key: "play",
    value: function play() {
      this.emit('play');
    }
  }, {
    key: "pause",
    value: function pause() {
      this.emit('pause');
    }
  }, {
    key: "resume",
    value: function resume() {
      this.emit('resume');
    }
  }, {
    key: "addCast",
    value: function addCast(cast) {
      if (!this.cast) this.cast = [];
      if (Array.isArray(cast)) //actor array case
        this.cast = this.cast.concat(cast);else this.cast.push(cast);
    }
  }]);

  return Movie;
}(_eventEmitter2.eventEmitter);

exports.default = Movie;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var social = {
  share: function share(friendName) {
    console.log("Share " + this.tittle + " with " + friendName);
  },
  like: function like(friendName) {
    console.log(friendName + " likes " + this.tittle);
  }
};
var _default = social;
exports.default = _default;
