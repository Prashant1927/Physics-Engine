
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
function setup(){
  var canvas = createCanvas(1200,400);
 engine = Engine.create();
 world = engine.world;

 boxA = Bodies.circle(500,100,50,{ restitution: 1});
 World.add(world,boxA);
 console.log(boxA);

 boxB = Bodies.rectangle(200,100,20,50,{ restitution: 3 });
 World.add(world,boxB);
 console.log(boxB);

ground = Bodies.rectangle(380,380,810,60,{ isStatic: true });
World.add(world,ground);


 Engine.run(engine)
}
function draw()
{
  background(0);
  rectMode(CENTER);
  fill("lightblue")
  rect(boxB.position.x,boxB.position.y,50,10);
  fill("brown");
  rect(ground.position.x,ground.position.y,810,60)
  fill("orange")
  circle(boxA.position.x,boxA.position.y,50);
  
}