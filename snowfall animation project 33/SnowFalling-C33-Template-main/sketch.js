const Bodies=Matter.Bodies;
const World=Matter.World;
const Engine=Matter.Engine;


var snowImg;
var boy,boyimg;
var snow=[];
var engine;
var world;
function preload(){
  snowImg=loadImage("snow1.jpg")
  boyimg=loadImage("hello.png");

}

function setup() {
  createCanvas(800,400);
  
  engine=Engine.create();
  world=engine.world;

  boy=createSprite(200,280,30,30);
  boy.addImage (boyimg);
  
  
}

function draw() {

  Engine.update(engine);
  background(snowImg);  

  if(frameCount%10===0){

   snow.push(new Snowball(random(0,width),10,random(2,8)))
  }

  for(var i= 0 ; i <snow.length; i++){
    snow[i].display();
  }

boy.velocityX=0;
boy.velocityY=0;
if(keyDown(RIGHT_ARROW)){
boy.velocityX=6;
}
 if(keyDown(LEFT_ARROW)){
	boy.velocity=-6
}

  drawSprites();
}