class Game{
    constructor(){}
    getState(){
    database.ref("gameState").on("value",(data)=>{
        gameState = data.val();
    })
    
    }
    update(state){
        database.ref('/').update({
            gameState:state
        })
    }
    //gameStet =0- waiting for players to log in, start state
    async start(){
        if(gameState === 0){
          player = new Player();
          var playerCountRef = await database.ref('playerCount').once("value");
          if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
          }
          form = new Form()
          form.display();
        }
    }
    //when all players are logged in and yhou rstrat the game
      play(){
          //hiding your entire form
        form.hide();
        //show a greeting or header
        textSize(30);
        text("Game Start", 120, 100)
        //calling the stattic function to gather all information about players
        //player is object name, Player is class name
        //call this static funciton using the class name not object name
        Player.getPlayerInfo();
        //when all players are logged into the system then only execute all the statements
      
        if(allPlayers !== undefined){
            //choosing a y location to display the name 
          var display_position = 130;
           /*
       allPLayers= [player 1, player2, player3, player4]
        computer understands that allPLayers is an array
        to access the array a position/index has to be defined
        plr acts as the position/index for that array
       */
          for(var plr in allPlayers){
            if (plr === "player" + player.index)
              fill("red")
            else
              fill("black");
    
            display_position+=20;
            //displaying the name and distance for all players one below the other
            textSize(15);
            text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 520,display_position)
          }
        }
    
        if(keyIsDown(UP_ARROW) && player.index !== null){
          player.distance +=50
          player.update();
        }
      }
    
}