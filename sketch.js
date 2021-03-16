var canvas, backgroundImage;

var gameState = 0;
var myplayerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var car1,car2,car3,car4,cars;
var car1img,car2img,car3img,car4img,track,coinpng;
var createSprite,ellipse2,ellipse3,ellipse1,ellipse4;
function preload(){
  car1img=loadImage("images/car1.png")
  car2img=loadImage("images/car2.png")
  car3img=loadImage("images/car3.png")
  car4img=loadImage("images/car4.png")
  track=loadImage("images/track.jpg")
  coinpng=loadImage("images/images.jpg")
}


function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}


function draw(){
  if(myplayerCount === 4){
    game.update(1);
    
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end();
  }
  drawSprites();
}
