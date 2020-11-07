const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	
	ground = new Ground(800,690,1600,10);
	tree = new Tree(1000,400);
	stone = new Stone(100,350,50,50);
	mango1 = new Mango(700,700,20);
	mango2 = new Mango(790,450,20);
	mango3 = new Mango(660,710,20);
	mango4 = new Mango(750,700,20);
	mango5 = new Mango(600,750,20);
    boy = new Boy(300,100,200,200)
	slingShot = new Launch(stone.body, {x:200,y:450})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  tree.display();
  boy.display()
  stone.display()
slingShot.display()
    mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
}

function keyPressed()
{
    if(keyCode == 32)
    {
        slingShot.attach(stone.body);
    }
}
