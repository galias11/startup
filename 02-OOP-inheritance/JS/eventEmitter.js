class EventEmmitter{
    constructor(){
        this.events = {}; //empty object.
    }

    on(eventName, callback){
        if(!this.events[eventName]){
            this.events[eventName] = [];
        }

        this.events[eventName].push(callback);
    }

    emit(eventName){
        const event = this.event[eventName];

        if(event){
            event.forEach(callback => {
                callback.call(this);
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