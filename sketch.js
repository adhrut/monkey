
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600)
  monkey = createSprite(80,515,20,20)
  monkey.addAnimation("moving", monkey_running)
  monkey.scale = 0.1
  ground = createSprite(400,550,900,10)
  //ground.velocityX = -4
  ground.x = ground.width/2
  
}


function draw() {
  background("blue")
  if(ground.x < 0) {
    ground.x = ground.width/2
    
  }
  if(keyDown("space")) {
    monkey.velocityY = -12
    
  }
  monkey.velocityY = monkey.velocityY + 0.8 
  
  
  
  monkey.collide(ground)
  spawnfood()
  spawnobstacles()
drawSprites()
  
  
}
function spawnfood() {
  if(frameCount %80 === 0) {
    banana = createSprite(600,250,40,10)
    banana.y = random(300,400)
    banana.velocityX = -5
    banana.lifetime = 300
    monkey.depth = banana.depth + 1
    banana.addImage(bananaImage)
    banana.scale = 0.05
    
  }
  
}
function spawnobstacles() {
  if(frameCount %300 === 0) {
    obstacle = createSprite(800,520,10,40)
    obstacle.velocityX = -6
    obstacle.addImage(obstacleImage)
    obstacle.scale = 0.15
    obstacle.lifetime = 300
    
  }
  
}




