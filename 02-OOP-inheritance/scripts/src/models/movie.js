import EventEmitter from '../models/eventEmitter.js';
import social from '../models/social.js';

export default class Movie extends EventEmitter{
    
    constructor (title, year, duration) {
        super();
        this.title = title;
        this.year = year;
        this.duration = duration;
        this.actors= [];
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
    addCast(cast){   //recives an array
        
        cast.forEach(act => {   //for each element in the array, if it's an actor and if it's not in this.actors, add it
            if(act instanceof(Actor) && !this.actors.includes(act))
            {
                this.actors.push(act);
            }
            
        
        } )
    }
}