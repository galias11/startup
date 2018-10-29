class EventEmmitter{
    constructor(){
        this.events = {};
    }

    on(eventName, callback){
        this.events[eventName] = this.events[eventName] || []
        this.events[eventName].push(callback);
    }

    emit(eventName){
        let event = this.event[eventName];

        if(event){
            event.forEach(function(func){
                func(eventName);
            });
        }
    }

    off(eventName, callback){
        let event = this.events[eventName];

        if(event){
            for(let i=0; i<event.length; i++){
                if(event[i] == callback){
                    event.splice(i, 1);
                    break;
                }
            }
        }
    }
}