const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var score=0;
var platform, invisibleBottom, invisibleTop;

function preload() {
   
}

function setup(){
    var canvas = createCanvas(1200,900);
    engine = Engine.create();
    world = engine.world;

    platform = createSprite(175,250,275,30);
    platform.shapeColor="brown";
    platform.velocityY = 2;

    invisibleBottom = createSprite(175,800,100,20);
    invisibleBottom.visible = false;

    invisibleTop = createSprite(175,200,100,20);
    invisibleTop.visible = false;

    base = new BaseClass(175,850,2200,20);

    ball = new Ball(175,250,20,20);

    sling = new Sling(200,200,30,80);
    slingshot = new SlingShot(ball.body,sling.body);
    
    box1 = new Box(700,810,70,70);
    box2 = new Box(770,810,70,70);
    box3 = new Box(840,810,70,70);
    box4 = new Box(910,810,70,70);
    box5 = new Box(980,810,70,70);
    box6 = new Box(700,730,70,70);
    box7 = new Box(770,730,70,70);
    box8 = new Box(840,730,70,70);
    box9 = new Box(910,730,70,70);
    box10 = new Box(980,730,70,70);
    box11 = new Box(700,650,70,70);
    box12 = new Box(980,650,70,70);

    coin1 = new Coin(770,650);
    coin2 = new Coin(840,650);
    coin3 = new Coin(910,650);

    box13 = new Box(700,570,70,70);
    box14= new Box(770,570,70,70);
    box15 = new Box(840,570,70,70);
    box16= new Box(910,570,70,70);
    box17 = new Box(980,570,70,70);
    box18 = new Box(700,490,70,70);
    box19 = new Box(980,490,70,70);

    coin4 = new Coin(770,490);
    coin5 = new Coin(840,490);
    coin6 = new Coin(910,490);
    
    /*log1 = new Log(810,260,300, PI/2);
    log2 =  new Log(810,180,300, PI/2);
    log3 = new Log(760,120,200,0);
    log4 = new Log(870,120,200,0);*/

}

function draw(){
    background("black");
    Engine.update(engine);

    platform.bounceOff(invisibleBottom);
    platform.bounceOff(invisibleTop);

    base.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    
    coin1.display();
    coin2.display();
    coin3.display();

    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    
    coin4.display();
    coin5.display();
    coin6.display();
   
    /*log1.display();
    log2.display();
    log3.display();
    log4.display();*/
    
    ball.display();
    sling.display();
    slingshot.display();

    drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX, y: mouseY});
}