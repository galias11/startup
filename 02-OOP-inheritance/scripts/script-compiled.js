"use strict";

var _movie = _interopRequireDefault(require("./movie.js"));

var _actor = _interopRequireDefault(require("./actor.js"));

var _logger = _interopRequireDefault(require("./logger.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var a = new _actor.default("Arnold", 50);
var a1 = new _actor.default("Will Smith", 45);
var a2 = new _actor.default("Brad Pitt", 51);
var array = [];
array.push(a);
array.push(a1);
array.push(a2);
array.push(a2);
var film = new _movie.default("Piratas", 2005, 110);
film.addCast(array); //console.log(film.actors);

var logged = new _logger.default();
film.on('play', logged.log);
film.play();
film.on("resume", logged.log);
film.resume(); //exercise 4 mixin
//Create an object called social, defining the methods share(friendName)
//and like(friendName) that generates the following output {friendName} likes/share {movieName}.

var film2 = new _movie.default("pelicula2", 1998, 125);
Object.assign(film2, social);
Object.assign(film, social);
film2.share("santiago");
film2.like("maria");
film.share("gaston");
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class Actor {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

}

exports.default = Actor;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom.iterable");

class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = []; //if there is not an event´s listener array, it creates it.
    }

    this.events[eventName].push(callback);
  }

  emit(eventName) {
    if (this.events[eventName]) {
      this.events[eventName].forEach(function (fn) {
        //this add the event name to the logged.log function(for example when i call play function 
        // play, it calls emit('play') it search in the events array, the play event wich has as callback the logged.log and fn(eventName) does logged.log('play')) 
        fn(eventName);
      });
    }
  }

  off(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName].delete(callback);
    }
  }

}

exports.default = EventEmitter;
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
