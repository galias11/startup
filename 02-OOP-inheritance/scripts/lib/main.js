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