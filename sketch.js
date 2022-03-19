var bg,bgImg;
var thief, thief1_img, thief2_img;
var coin, coin_img, diamond, diamond_img;
var officer, officer_img, handcufffs, handcuffs_img;
var score,heart1_img,heart2_img,heart3_img;


function preload(){
  
  thief1_img = loadImage("assets/thief1.png")
  thief2_img = loadImage("assets/thief2.png")
  coin_img = loadImage("assets/coin.png")
  diamond_img = loadImage("assets/diamond.png")
  officer_img = loadImage("assets/officer.png")
  handcuffs_img = loadImage("assets/handcuffs.png")
  bgImg = loadImage("assets/bg.jpg")
  heart1_img = loadImage("assets/heart_1.png")
  heart2_img = loadImage("assets/heart_2.png")
  heart3_img = loadImage("assets/heart_3.png")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 2.35
  

//creating the player sprite
thief = createSprite(displayWidth-1120, displayHeight-410, 50, 50);
 thief.addImage(thief1_img)
   thief.scale = 0.25
   thief.debug = true
   thief.setCollider("rectangle",0,0,300,300)

}

function draw() {
  background(0); 

 heart = createSprite(1000,75,20,20);
 heart.addImage(heart3_img);
 heart.scale = 0.2
  
topEdge = createSprite(displayWidth-1120,displayHeight-800,40,40);
bottomEdge = createSprite(displayWidth-1120,displayHeight-130,40,40)
thief.bounceOff(topEdge);
thief.bounceOff(bottomEdge);
SpawnObstacles();
SpawnRewards();

  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  thief.y = thief.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 thief.y = thief.y+30
}



//player changes image when he hits a coin or money image
 //if(thief.istouching(coin) && thief.istouching(diamond)){
 // player.addImage(thief2_img);
//}



drawSprites();

textSize(20);
fill("black")
text("Score: ",125,75);


}



function SpawnObstacles(){

  if(frameCount % 80 === 0){
    officer = createSprite(random(1050,1200),random(200,575),20,20)
    handcuffs = createSprite(random(900,1200),random(100,500),20,20)
    officer.addImage(officer_img);
    handcuffs.addImage(handcuffs_img);
    officer.scale = 0.6;
    handcuffs.scale = 0.3;
    officer.velocityX = -6
    handcuffs.velocityX = -8;
    officer.lifetime = 300;
    handcuffs.lifetime = 300;
  }
}

function SpawnRewards(){

  if(frameCount % 120 === 0){
    coin = createSprite(random(1050,1200),random(200,575),20,20)
    diamond = createSprite(random(900,1200),random(100,500),20,20)
    coin.addImage(coin_img);
    diamond.addImage(diamond_img);
    coin.scale = 0.2;
    diamond.scale = 0.15;
    coin.velocityX = -4
    diamond.velocityX = -6;
    coin.lifetime = 300;
    diamond.lifetime = 300;
  }
}