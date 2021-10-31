var canvas, backgroundImage;
var score=0;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var players,player1, player2;
var water;
var obstacle1,obstacle1,obstacle2,obstacle3,obstacle4,obstacle5,obstacle6,obstacle7;
var finish;
var island;
var bg;
var obstacles;

function preload(){
  p1  = loadImage("p1.png")
  p2  = loadImage("p2.png")
  island = loadImage("island.png");
  obstacle1 = loadImage("obstacle1.png");
  obstacle2 = loadImage("obstacle2.png");
  obstacle3 = loadImage("obstacle3.png");
   obstacle4 = loadImage("obstacle4.png");
   obstacle5 = loadImage("obstacle5.png");
   obstacle6 = loadImage("obstacle6.png");
  obstacle7 = loadImage("obstacle7.png");
  water = loadImage("water.png");
  finish=loadImage("finish.png")
 
  
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background(island);
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    clear();
    game.end();
  }
}
