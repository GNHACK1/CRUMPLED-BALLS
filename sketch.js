
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground
var paper
var bin1, bin2, bin3

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,680,1500,20)
  paper = new Paper(200,450,20)

  bin1 = new Dustbin(800,660,120,20)
  bin2 = new Dustbin(750,640,20,60)
  bin3 = new Dustbin(850,640,20,60)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display();
  ground.display();

  bin1.display();
  bin2.display();
  bin3.display();
  drawSprites();
 
}

function keyPressed(){
  if(keyCode == UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:18,y:-18});
  }
}




