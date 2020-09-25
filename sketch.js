const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(500,500);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200, 60, 45, 18);
    box2 = new Box(220, 90, 40, 70);

    ground = new Ground(200, 490, 600, 20)
}

function draw(){
    background(0);
    Engine.update(engine);

    box1.display();
    box2.display();
    ground.display();
}