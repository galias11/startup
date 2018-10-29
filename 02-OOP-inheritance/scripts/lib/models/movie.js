"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom.iterable");

var _eventEmitter = _interopRequireDefault(require("../models/eventEmitter.js"));

var _social = _interopRequireDefault(require("../models/social.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Movie extends _eventEmitter.default {
  constructor(title, year, duration) {
    super();
    this.title = title;
    this.year = year;
    this.duration = duration;
    this.actors = [];
  }

  play() {
    this.emit('play');
  }

  pause() {
    this.emit('pause');
  }

  resume() {
    this.emit('resume');
  }

  addCast(cast) {
    //recives an array
    cast.forEach(act => {
      //for each element in the array, if it's an actor and if it's not in this.actors, add it
      if (act instanceof Actor && !this.actors.includes(act)) {
        this.actors.push(act);
      }
    });
  }

}

exports.default = Movie;