var ball;
var database;
var position;
var playerCount;
var gameState=0;
var player, form, game;
var allPlayers;
function setup(){
    database=firebase.database()
    createCanvas(500,500);
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");
 if(playerCount===4){
     game.update(1)
 }
if(gameState===1){
    game.play();
}



    drawSprites();
}


