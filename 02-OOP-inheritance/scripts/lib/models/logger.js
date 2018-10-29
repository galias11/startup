"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class Logger {
  constructor() {}

  log(event) {
    console.log('The ' + event + ' event has been emited');
  }

}

exports.default = Logger;