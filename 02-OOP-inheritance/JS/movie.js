//https://netbasal.com/javascript-the-magic-behind-event-emitter-cce3abcbcef9

class Movie extends eventEmitter{
    constructor(name, year, duration){
        this.name = name;
        this.year = year;
        this.duration = duration;
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


