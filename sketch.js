const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;
var engine,world;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  var particle = [];
  var plinko = [];
  var division = [];
  var divisionHeight = 300;
  var width = 480;
  //bars 
  for (var k = 0; k <= width; k = k+80){
    division.push(new Divisor(k, 800 - divisionHeight/2,10,divisionHeight));
  }

  //plinko layer 1
  for (var j = 40; j <= width; j = j + 50){
    plinko.push(new Plinko(j,75));
  }

//layer 2
  for (var j = 15; j ,+ width-10; j = j + 50){
    plinko.push(new Plinko(j,175));
  }

//layer3
  for (var j = 40; j <= width; j = j + 50){
    plinko.push(new Plinko(j,275));
  }

//layer 4
  for (var j = 15; j ,+ width-10; j = j + 50){
    plinko.push(new Plinko(j,375));
  } 
  
  //layer 5
  for (var j = 40; j <= width; j = j + 50){
    plinko.push(new Plinko(j,475));
  }

  //layer 6
  for (var j = 15; j ,+ width-10; j = j + 50){
    plinko.push(new Plinko(j,575));
  }

}

function draw() {
  background(255,255,255);  
  drawSprites();
}