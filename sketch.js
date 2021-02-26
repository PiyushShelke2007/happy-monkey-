
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score,random;

function preload(){

  monkey_running =                    loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(400,400);
  
  
 
  //creating Sprite for Monkey
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(200,350,400,10);
  ground.velocityX=-4;
  
  
  //creating Sprite for Banana
  if (frameCount%20 === 0) {
  banana= createSprite(250,100,20,20)
  banana.addImage(bananaImage);
  banana.scale=0.1;
  banana.velocityX=-4;
  banana.lifetime=65;
  }

 //creating Sprite for Obstacle
  if (frameCount % 30 === 0) {
  obstacle= createSprite(500,320,20,20);
  
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.2;
  obstacle.velocityX=-4;  
  obstacle.lifetime=130;
  }
  monkey.debug=true;
  
  var rand= Math.round(random(1,100));
  score=0;
}

function draw() {
background("white");
  
  text("Score: "+ score, 500,50);
  score = score + Math.round(frameCount/60);
  
  
 if (ground.x < 200){
      ground.x = ground.width/2;
    }  
 console.log(ground.x); 
console.log(frameCount)
  
   //jump when the space key is pressed
    if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -15;
        
    }
  
  if(monkey.isTouching(obstacle)){
    
     
    
     }
  
  
  
  
   //add gravity
    monkey.velocityY = monkey.velocityY + 0.8

  
    
 monkey.collide(ground); 
  
drawSprites();  
}






