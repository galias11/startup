const social = {
    share(friendName){
        console.log(friendName + " shared " + this.title + ".");
    },

    like(friendName){
        console.log(friendName + " likes " + this.title + ".");
    }
}

export default social;