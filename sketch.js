var player, running, powerUP, powers1,powers2, running2, collided, fell, fireBall;
var ground, invisibleGround;
var backgroundImg;
var enemy,enemyImg1, enemyImg2;

function preload(){
  backgroundImg = loadImage("images/BG.png");

 running = loadAnimation("Images/Goku.png","Images/Goku2.png","Images/Goku3.png","Images/Goku4.png","Images/Goku5.png","Images/Goku6.png","Images/Goku7.png","Images/Goku8.png",);
 powerUP = loadAnimation("Images/Goku9.png","Images/Goku10.png","Images/Goku11.png")
 running2 = loadAnimation("Images/Goku12.png")
 collided = loadAnimation("Images/Goku13.png","Images/Goku14.png","Images/Goku15.png","Images/Goku16.png","Images/Goku18.png","Images/Goku19.png");
 fell = loadAnimation("Images/Goku17.png");
 enemyImg1 = loadAnimation("Images/enemy1.png","Images/enemy2.png","Images/enemy3.png","Images/enemy4.png","Images/enemy5.png","Images/enemy6.png","Images/enemy8.png","Images/enemy9.png","Images/enemy10.png");
 enemyImg2 = loadAnimation("Images/enemy11.png","Images/enemy12.png","Images/enemy14.png","Images/enemy15.png","Images/enemy16.png");
 powers1 = loadImage("images/Goku23.png");
 powers2 = loadImage("Images/Goku24.png")



}

function setup(){
createCanvas(windowWidth,windowHeight);
  

  ground = createSprite(300,180,windowWidth,windowHeight);
  ground.addImage("ground",backgroundImg);
  ground.x = ground.width /2;
  ground.velocityX = -1.5

  invisibleGround = createSprite(200,550,windowWidth,10)
  invisibleGround.visible = false;

  fireBall = createSprite(280,420,10,10);
  fireBall.visible = false;

  powerUP.frameDelay = 10; 
player = createSprite(200,460,50,50);
player.addAnimation("running", running)
player.addAnimation("power", powerUP)
player.addAnimation("running2", running2)
player.addAnimation("colloied", collided)
player.addAnimation("fallen", fell)
player.addImage("power1", powers1)

player.scale = 2

enemyGroup = new Group();



            


}

function draw(){

    ground.velocityX = -1.5

    if(keyDown("P")){
      player.changeAnimation("power", powerUP) 
      ground.velocityX = 0;
    }else if (keyWentUp("P")){
      player.changeAnimation("running2", running2)
    } 

    if(keyDown("UP_ARROW")){
      player.changeAnimation("colloied", collided) 
      ground.velocityX = 0;
    }else if (keyWentUp("UP_ARROW")){
      player.changeAnimation("fallen", fell);
      ground.velocityX = 0;
    } 

    

    if(keyDown("space")){
      player.velocityY = -10;

    }
    player.velocityY += 0.8 

    player.collide(invisibleGround)




if (ground.x < 550){
    ground.x = ground.width/2;
  }
   
  if(keyWentDown("S")){
    player.changeImage("power1", powers1);
    fireBall.addImage("powers2", powers2);
    fireBall.visible = true;
    fireBall.velocityX = 1.5
    ground.velocityX = 0;
    
  }

enemies();

drawSprites()

}

/*async function getBackGroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata");
  var responsejson = await response.json();
  var date = responsejson.datetime
  console.log(date);
  var hour = date.slice(11,13);
  if (hour >= 06 && hour<= 12){
      bg = "images/BG.png"
  } else if (hour >= 12 && hour<= 17){
      bg = "images/BG4.jpg"
  } else if (hour >= 17 && hour<= 19){
      bg = "images/BG2.png"
  }else if (hour >= 19 && hour<= 06){
      bg = "images/BG4.jpg"
   }

  backgroundImg = loadImage(bg);
}*/

function enemies(){
  if(frameCount% 200 === 0){
    var enemy = createSprite(windowWidth,480,50,50);
    enemy.velocityX = -5
    enemy.scale = 2
    enemyGroup.add(enemy);
    var rand = Math.round(random(1,2))
    if(rand === 1){
      enemy.addAnimation("enemyRunning", enemyImg1);
      
    }else{
      enemy.addAnimation("enemyShooting", enemyImg2);
    }
  }



}

function mousePressed(){
  player.changeAnimation("power1",powers1)

  
}