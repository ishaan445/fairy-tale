var starImg, fairyImg, bgImg;
var fairy, fairyvoice;
var star, starbody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{
   starin1ng = loadImage("image/star.png");
   fairy1ng = loadImage("images/fairyImage.png","images/fairyImage2.png" );
   bgImg = loadImage("images/starNight.png");
   fairyVoice = loadImage("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

  fairyVoice.play();

  fairy = createSprite(130, 520);
  fairy.addAnimation("fairyflying",fairyImg);
  fairy.scale  -0.2;

  star = createSprite(650,30);
  star.addAnimation(staring);
  star.scale = 0.2;

  engine = Engine.create();
  world = engine.world;

  starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
  World.add(world, starBody);

  Engine.run(engine);

  
}


function draw() {
  background(bgImg);

  star.x= starBody.position.x
  star.y= starBody.position.y

  console.log(star.y);

  if(star.y > 470 && starBody.position.y > 470 ){
    Matter.Body.setStatics(starBody,true);
  }
 
  drawSprites();

}

function keypressed() {
  
  if(keyCode === RIGHT_ARROW){
    fairy.x = fairy.x = 20;
  }


   

   if(keyCode === LEFT_ARROW){
     fairy.x = fairy.x = 20;
   }
     

    if(keyCode === DOWN_ARROW){
    Matter.Body.setStatics(starBody,false);
    }
}