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