"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const social = {
  share(friendName) {
    console.log(friendName + " shared " + this.title + ".");
  },

  like(friendName) {
    console.log(friendName + " likes " + this.title + ".");
  }

};
var _default = social;
exports.default = _default;