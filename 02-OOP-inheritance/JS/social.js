var social = {
    share: function(friendName){
        console.log("Share "+this.tittle+" with "+friendName);
    },
    like: function(friendName){
        console.log(friendName+" likes "+ this.tittle);
    }
}

export default social;