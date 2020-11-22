var weight1 ;
var weight2 ;
var weight3 ; 
var weight4 ;
var weight5 ;
var roof ;
var string ;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

    engine = Engine.create();
	world = engine.world;

	weight1 = new BOB(100,600,20,20);
	weight2 = new BOB(200,600,20,20);
	weight3 = new BOB(300,600,20,20);
	weight4 = new BOB(400,600,20,20);
	weight5 = new BOB(500,600,20,20);
	roof = new Ground(600,height,800,20);
	string = new rope (weight1.body,roof.body,-weightDiameter*2,0);
	
	weight1= Matter.Bodies.circle(x,y,radius,[options],[maxSides])
	 world.add(world,weight1);

	 weight2= Matter.Bodies.circle(x,y,radius,[options],[maxSides])
     world.add(world,weight2);

	 weight3= Matter.Bodies.circle(x,y,radius,[options],[maxSides])
     world.add(world,weight3);

	 weight4= Matter.Bodies.circle(x,y,radius,[options],[maxSides])
     world.add(world,weight4);

	 weight5= Matter.Bodies.circle(x,y,radius,[options],[maxSides])
     world.add(world,weight5);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  weight1.display();
  weight2.display();
  weight3.display();
  weight4.display();
  weight5.display();
  string.display();

  
  drawSprites();
 
}
function KeyPressed(){
	if(KeyCode === UP_ARROW){
        Matter.Bodies.applyForce(weight1.body,weight1.body.position,{x:85,y:-85})

	}


}




