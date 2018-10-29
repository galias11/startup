
export default class EventEmitter{
    constructor(){
        this.events= {};
    }

    on(eventName, callback){

        if (!this.events[eventName]) {
            this.events[eventName] = []; //if there is not an event´s listener array, it creates it.
        }
        this.events[eventName].push(callback); 
        }
    

    emit(eventName){
        if(this.events[eventName]){
            this.events[eventName].forEach( function(fn) {  
                //this add the event name to the logged.log function(for example when i call play function 
                // play, it calls emit('play') it search in the events array, the play event wich has as callback the logged.log and fn(eventName) does logged.log('play')) 
                fn(eventName);
            } )
        }
    }
   

    off(eventName, callback){
        if(this.events[eventName]){
            this.events[eventName].delete(callback);
        }
    }
}
