
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world,dustbin,paper;




function setup() {
	createCanvas(800, 800);
	rectMode=(CENTER);


	engine = Engine.create();
	world = engine.world;
	engine=run(engine);

	dustbin=new Dustbin(720,100,300,10);
	paper=new paper(100,300,10);
	ground= Bodies.rectangle(width/2,400,width,10,{isStatic=true});

	world.add(world,ground);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
 background("black");
 rectMode(CENTER);
 background(0);

 dustbin.display();
 paper.display();


 function keyPressed(){
if  (keyCode===UP_ARROW){
	Matter.Body.applyforce(paper.body,paper.body.position)
	x:12
	y:-13	
	}
}
 }


 

  
