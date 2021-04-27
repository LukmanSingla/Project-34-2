const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body=Matter.Body;
var bg,ground,hero,block=[];
var engine,world,ground,ground2,monster,hero,sling;
function preload() {
  getTime();
}

function setup() {
  createCanvas(1500, 800);
  engine = Engine.create();
world = engine.world;
ground=new Ground(450,550,900,20);
ground2=new Ground(950,400,200,1);
for(var i=0;i<7;i++){
  block.push(new Box(500,200-i*75,50,75));
}
for(var i=0;i<5;i++){
  block.push(new Box(600,200-i*75,50,75));
}
for(var i=0;i<7;i++){
  block.push(new Box(700,200-i*75,50,75));
}
for(var i=0;i<5;i++){
  block.push(new Box(800,200-i*75,50,75));
}
monster=new Monster(950,300,200,200,"monster.png");
hero=new Hero(300,300,250,200,"hero.png");
sling=new SlingShot(hero.body,{x:200,y:100});
}

function draw() {
  if(bg){
    background(bg);
}else{
    background("#fff");
}
  Engine.update(engine);
  ground.display();
  for(var i=0;i<block.length;i++){
    block[i].display();
  }
  if(monster.body.speed>2){
    World.remove(world,ground2.body);
  }
  
  monster.display();
  hero.display();
  // console.log("hello");
}
function mouseDragged(){
  Body.setPosition(hero.body,{x:mouseX,y:mouseY});  
}

async function getTime(){
  var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var data=await response.json();
  console.log(data.datetime.slice(11,13));
  var hours=data.datetime.slice(11,13);
  if(hours<=18 && hours>=07){
  bg = loadImage("sprites/bg.png");    
  }else{
  bg = loadImage("sprites/bg2.jpg");
  }
}