class Player{
    constructor(){
        this.index = null; // index of a player is same as the playerCount of the player
        this.distance = 0;
        this.name = null;
    }
  //reading the playerCount value from datatbase  
    getCount(){
        database.ref("playerCount").on("value", (data)=>{playerCount = data.val(); })
    }
    //writing playerCount into database
    updateCount(count){
        database.ref('/').update({
            playerCount:count
        })
    }
    //write into databae hte name of the player
    update(){
        var playerIndex= "players/player" + this.index;
        database.ref(playerIndex).set({
            name :this.name,
            distance:this.distance
        })
    }
    /*
    static bascially executes the function automatically for all 
    objects of the class by only calling it using class name and not the object name.
        */
    static getPlayerInfo(){
        //gathering all payers information into a variable allPLayers.
        database.ref("players").on("value", (data)=>{allPlayers = data.val(); })
console.log(allPlayers)
    }
}