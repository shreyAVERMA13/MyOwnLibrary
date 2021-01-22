var rect1,rect2
var rect3,rect4

function setup() {
  createCanvas(800,400);
  rect1 = createSprite(400, 200, 50, 50);
  rect2 = createSprite(400,100,30,30)

  rect3 = createSprite(400, 200, 30, 80);
  rect4 = createSprite(100,200,60,40)

  rect1.shapeColor="orange"
  rect2.shapeColor="orange"

  rect3.shapeColor="green"
  rect4.shapeColor="purple"

  rect3.velocityX= -2 ;
  rect4.velocityX= 2 ;
}

function draw() {
  background(0); 

  rect1.x=World.mouseX
  rect1.y=World.mouseY

  if(isTouching(rect1,rect2)){

    rect1.shapeColor="red"
  rect2.shapeColor="red"

  }

  else{
    rect1.shapeColor="orange"
    rect2.shapeColor="orange"
  }
 bounceOff(rect3,rect4);
  

  drawSprites();
}
