var movingRect, fixedRect;
var gameObject1;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 50, 50);
  movingRect.shapeColor="green"
  fixedRect = createSprite(200, 200, 50, 50);
  fixedRect.shapeColor="green"


  gameObject1 = createSprite(100, 100, 50, 50);
  gameObject1.shapeColor="green"
}

function draw() {
  background(255,255,255);  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
 if (isTouching(movingRect,gameObject1)){

  gameObject1.shapeColor = "red";
    movingRect.shapeColor = "red";
 }

 else{
  gameObject1.shapeColor = "green";
  movingRect.shapeColor = "green";
 }

  drawSprites();
}
//spritename.isTouching(target)
