const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var weight1 ;
var weight2 ;
var weight3 ; 
var weight4 ;
var weight5 ;
var roof ;
var string1 ;
var string2 ;
var string3 ;
var string4 ;
var string5 ;
var world;

function setup() {
	createCanvas(1600, 700);

    engine = Engine.create();
	world = engine.world;
	roof=new Ground(width/2,height/4,width/7,20);

	weightDiameter = 40;

	startweightPositionX=width/2;
	startweightPositionY=height/4+500;
    weight1=new Bob(startweightPositionX-weightDiameter*2,startweightPositionY,weightDiameter);
	weight2=new Bob(startweightPositionX-weightDiameter,startweightPositionY,weightDiameter);
	weight3=new Bob(startweightPositionX,weightPositionY,weightDiameter);
	weight4=new Bob(startweightPositionX+weightDiameter,startweightPositionY,weightDiameter);
	weight5=new Bob(startweightPositionX+weightDiameter*2,startweightPositionY,weightDiameter);
	
	
	
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });
  


	string1 = new rope (weight1.body,roof.body,-weightDiameter*2,0);
	string2 = new rope (weight2.body,roof.body,-weightDiameter*1,0);
	string3 = new rope (weight3.body,roof.body,0,0);
	string4 = new rope (weight4.body,roof.body,weightDiameter*1,0);
	string5 = new rope (weight5.body,roof.body,weightDiameter*2,0);

	constraint1={
		bodyA:bobObject1.body,
		bodyB:roofObject.body,
		pointB: {x:-bobDiameter*2, y:0}
	}

	constraint2={
		bodyA:bobObject2.body,
		bodyB:roofObject.body,		
		pointB: {x:-bobDiameter, y:0}
	}


	constraint3={
		bodyA:bobObject3.body,
		bodyB:roofObject.body,		
		pointB: {x:0, y:0}

	}

	constraint4={
		bodyA:bobObject4.body,
		bodyB:roofObject.body,		
		pointB: {x:bobDiameter, y:0}	

	}

	constraint5={
		bodyA:bobObject5.body,
		bodyB:roofObject.body,		
		pointB: {x:bobDiameter*2, y:0}
	}

	var pendulum1=Constraint.create(constraint1)
	var pendulum2=Constraint.create(constraint2)
	var pendulum3=Constraint.create(constraint3)
	var pendulum4=Constraint.create(constraint4)
	var pendulum5=Constraint.create(constraint5)

	World.add(world, pendulum1);
	World.add(world, pendulum2);
	World.add(world, pendulum3);
	World.add(world, pendulum4);
	World.add(world, pendulum5);
	
	
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
  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();


  
  drawSprites();
 
}
function KeyPressed(){
	if(KeyCode === UP_ARROW){
        Matter.Bodies.applyForce(weight1.body,weight1.body.position,{x:50,y:-45})

	}


}

function drawLine(constraint)
{
	weightBodyPosition=constraint.bodyA.position
	roofBodyPosition=constraint.bodyB.position

	roofBodyOffset=constraint.pointB;
	
	roofBodyX=roofBodyPosition.x+roofBodyOffset.x
	roofBodyY=roofBodyPosition.y+roofBodyOffset.y
	line(weightBodyPosition.x, weightBodyPosition.y, roofBodyX,roofBodyY);
}




