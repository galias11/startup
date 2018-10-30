import{Movie} from 'JS/movie.js';
import{Actor} from 'JS/actor.js';
import{Logger} from 'JS/logger.js';

var JurassicWorld = new Movie("Jurassic World", 2015, "2hs");

JurassicWorld.play;

var actor = new Actor("Chris Pratt", 39);

var logger = new Logger();

JurassicWorld.on('play', logger.log);

JurassicWorld.addCast(actor);
