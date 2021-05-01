
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
db=loadImage("dustbingreen.png")	
}

function setup() {
var canvas=	createCanvas(1200, 400);

	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
 
  ground = new Ground(600,390,1200,20);
  paper = new PaperClass(100,100,20);
  box1 = new Box(1000,320,10,100);
  box2 = new Box(1050,370,120,10);
  box3 = new Box(1100,320,10,100);
  dustbin = Bodies.rectangle(1050,320,120,120,{isStatic:true});
  World.add(world,dustbin);
 

  
	Engine.run(engine);


  
}


function draw() {
  rectMode(CENTER);
  background(100);
  Engine.update(engine);
  drawSprites();
  ground.display();
  paper.display();
  box1.display();
  box2.display();
  box3.display();
  imageMode(CENTER);
  image(db,dustbin.position.x,dustbin.position.y,120,120)


}

function keyPressed(){
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:83,y:-55});
  }
}

