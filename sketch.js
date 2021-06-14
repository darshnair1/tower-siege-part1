const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
  // polygon1 = new Polygon(200, 200, 50, 50);
  polygon1 = Bodies.circle(100, 200, 30);
  World.add(world, polygon1);
  slingshot1 = new SlingShot(polygon1, {x:200, y:200});
 
  //level one
  block1 = new Block(300,275,30,40);
  block1r = new Block(610, 175, 30, 40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block2r = new Block(640, 175, 30, 40);
  block3 = new Block(360,275,30,40);
  block3r = new Block(670, 175, 30, 40);
  block4 = new Block(390,275,30,40);
  block4r = new Block(700,175,30,40);
  block5 = new Block(420,275,30,40);
  block5r = new Block(730,175,30,40);
  block6 = new Block(450,275,30,40);
  block6r = new Block(760,175,30,40);
  block7 = new Block(480,275,30,40);
  block7r = new Block(790,175,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block8r = new Block(640,135,30,40);
  block9 = new Block(360,235,30,40);
  block9r = new Block(670,135,30,40);
  block10 = new Block(390,235,30,40);
  block10r = new Block(700,135,30,40);
  block11 = new Block(420,235,30,40);
  block11r = new Block(730,135,30,40);
  block12 = new Block(450,235,30,40);
  block12r = new Block(760,135,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block13r = new Block(670,95,30,40);
  block14 = new Block(390,195,30,40);
  block14r = new Block(700,95,30,40);
  block15 = new Block(420,195,30,40);
  block15r = new Block(730,95,30,40);
  //top
  block16 = new Block(390,155,30,40);
  block16r = new Block(700,55,30,40);

  

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  stand2.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block1r.display();
  block2.display();
  block2r.display();
  block3.display();
  block3r.display();
  block4.display();
  block4r.display();
  block5.display();
  block5r.display();
  block6.display();
  block6r.display();
  block7.display();
  block7r.display();
  fill("pink");
  block8.display();
  block8r.display();
  block9.display();
  block9r.display();
  block10.display();
  block10r.display();
  block11.display();
  block11r.display();
  block12.display();
  block12r.display();
  fill("turquoise");
  block13.display();
  block13r.display();
  block14.display();
  block14r.display();
  block15.display();
  block15r.display();
  fill("grey");
  block16.display();
  block16r.display();
  image(polygon_img, polygon1.position.x, polygon1.position.y, 30, 30);
  stroke("white");
  text("Drag the mouse and release to throw the stone", 200, 100);
  // polygon1.display();
  // slingshot1.display();
}

function mouseDragged() {
  Matter.Body.setPosition(polygon1, {x: mouseX, y: mouseY});
}

function mouseReleased() {
  slingshot1.fly(polygon1);
}
