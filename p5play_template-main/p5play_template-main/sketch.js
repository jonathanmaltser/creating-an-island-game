var ball
var island
function setup() {
  createCanvas(600,600);
  island = createSprite(300,300, 200,200);
  ball = createSprite(300,300,15,15);
}

function draw() 
{
  background("lightblue");
  if(keyDown(UP_ARROW)){
    ball.velocityY = -2
  }
  if(keyDown(DOWN_ARROW)){
    ball.velocityY = 2
  }
  if(keyDown(RIGHT_ARROW)){
    ball.velocityX = 2
  }
  if(keyDown(LEFT_ARROW)){
    ball.velocityX = -2
  }
  if(keyDown("SPACE")){
    background("grey")
  }
  island.shapeColor = "lightgreen"
  drawSprites()

}




