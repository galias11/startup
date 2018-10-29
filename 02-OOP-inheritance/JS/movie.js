//https://netbasal.com/javascript-the-magic-behind-event-emitter-cce3abcbcef9
import {eventEmitter} from './eventEmitter.js';
import {social} from './social.js';

export default class Movie extends eventEmitter{
    constructor(tittle, year, duration){
        this.tittle = tittle;
        this.year = year;
        this.duration = duration;
        Object.assign(Movie.prototype, social);
    }

    play(){
        this.emit('play');
    }

    pause(){
        this.emit('pause');
    }

    resume(){
        this.emit('resume');
    }

    addCast(cast){
        if(!this.cast)
            this.cast = [];

        if(Array.isArray(cast)) //actor array case
            this.cast = this.cast.concat(cast);
        else
            this.cast.push(cast);
    }
}


