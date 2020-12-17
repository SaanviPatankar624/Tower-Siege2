const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10;
var block11, block12, block13, block14, block15, block16, block17, block18, block19, block20;
var block21, block22, block23, block24, block25, block26, block27, block28, block29, block30;
var block31, block32, block33, block34, block35, block36, block37, block38, block39;
var ball, ground, ground1, sling;

var gamestate = "onsling";

function setup(){
    createCanvas(800, 400);

    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

 // First set of pyramid
    block1 = new Blueblock(500, 360, 20, 30);
    block2 = new Blueblock(520, 360, 20, 30);
    block3 = new Blueblock(540, 360, 20, 30);
    block4 = new Blueblock(560, 360, 20, 30);
    block5 = new Blueblock(580, 360, 20, 30);
    block6 = new Blueblock(600, 360, 20, 30);

    block7  = new Pinkblock(510, 330, 20, 30);
    block8  = new Pinkblock(530, 330, 20, 30);
    block9  = new Pinkblock(550, 330, 20, 30);
    block10 = new Pinkblock(570, 330, 20, 30);
    block11 = new Pinkblock(590, 330, 20, 30);

    block12 = new Greenblock(520, 310, 20, 30);
    block13 = new Greenblock(540, 310, 20, 30);
    block14 = new Greenblock(560, 310, 20, 30);
    block15 = new Greenblock(580, 360, 20, 30);

    block16 = new Yellowblock(530, 280, 20, 30);
    block17 = new Yellowblock(550, 280, 20, 30);
    block18 = new Yellowblock(570, 280, 20, 30);

    block19 = new Orangeblock(540, 250, 20, 30);
    block20 = new Orangeblock(560, 250, 20, 30);

    block21 = new Greyblock(550, 220, 20, 30);

 // Second set of pyramid
    block22 = new Blueblock(500, 135, 20, 30);
    block23 = new Blueblock(520, 135, 20, 30);
    block24 = new Blueblock(540, 135, 20, 30);
    block25 = new Blueblock(560, 135, 20, 30);
    block26 = new Blueblock(580, 135, 20, 30);
    block27 = new Blueblock(600, 135, 20, 30);

    block28 = new Pinkblock(510, 105, 20, 30);
    block29 = new Pinkblock(530, 105, 20, 30);
    block30 = new Pinkblock(550, 105, 20, 30);
    block31 = new Pinkblock(570, 105, 20, 30);
    block32 = new Pinkblock(590, 105, 20, 30);

    block33 = new Greenblock(520, 75, 20, 30);
    block34 = new Greenblock(540, 75, 20, 30);
    block35 = new Greenblock(560, 75, 20, 30);
    block36 = new Greenblock(580, 75, 20, 30);

    block37 = new Yellowblock(530, 45, 20, 30);
    block38 = new Yellowblock(550, 45, 20, 30);
    block39 = new Yellowblock(570, 45, 20, 30);

    ball = new Ball(0, 0, 50, 50);

    sling = new SlingShot(ball.body,{x:200, y:200});

    ground = new Platform(400, 390, 800, 20);

    ground1 = new Platform(550, 160, 200, 20);

}

function draw(){
    background(247, 223, 178);
    Engine.update(engine);

 // First set of pyramid displaying
    block1.display(); 
    block2.display(); 
    block3.display(); 
    block4.display(); 
    block5.display(); 
    block6.display(); 

    block7.display(); 
    block8.display(); 
    block9.display(); 
    block10.display(); 
    block11.display(); 

    block12.display(); 
    block13.display(); 
    block14.display(); 
    block15.display(); 

    block16.display(); 
    block17.display(); 
    block18.display(); 

    block19.display(); 
    block20.display(); 

    block21.display(); 
    
 // Second set of pyramid displaying
    block22.display(); 
    block23.display();
    block24.display();
    block25.display();
    block26.display();
    block27.display();

    block28.display();
    block29.display();
    block30.display();
    block31.display();
    block32.display();

    block33.display();
    block34.display();
    block35.display();
    block36.display();

    block37.display();
    block38.display();
    block39.display();

    ball.display();
    sling.display();
    ground.display();
    ground1.display();

}

function mouseDragged(){
    if(gamestate!=="launched"){
    Matter.Body.setPosition(ball.body, {x:mouseX, y:mouseY});
    }
}

function mouseReleased(){
    sling.fly();
    gamestate = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       Matter.Body.setPosition(ball.body, {x:200, y:200})
       sling.attach(ball.body);
    }
}