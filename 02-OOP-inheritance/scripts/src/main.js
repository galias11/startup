
import Movie from "./movie.js";
import Actor from './actor.js';
import Logger from './logger.js';




var a= new Actor("Arnold", 50);
var a1= new Actor("Will Smith", 45);
var a2= new Actor("Brad Pitt", 51);


var array= [];

array.push(a);
array.push(a1);
array.push(a2);
array.push(a2);

var film = new Movie("Piratas", 2005, 110);


film.addCast(array);

//console.log(film.actors);

var logged = new Logger();

film.on('play', logged.log);
film.play();

film.on("resume", logged.log);
film.resume();



//exercise 4 mixin

//Create an object called social, defining the methods share(friendName)
//and like(friendName) that generates the following output {friendName} likes/share {movieName}.



var film2= new Movie("pelicula2", 1998, 125);
Object.assign(film2, social);
Object.assign(film, social);


film2.share("santiago");
film2.like("maria");
film.share("gaston");
