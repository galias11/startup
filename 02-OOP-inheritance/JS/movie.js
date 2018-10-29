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
}


