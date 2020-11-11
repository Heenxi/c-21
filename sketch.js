var fixedRect,movingRect; 
function setup() { 
fixedRect=createSprite(600,400,50,80);
 fixedRect.shapeColor="green"; 
fixedRect.debug=true;
 movingRect=createSprite(400,200,80,30); 
 movingRect.shapeColor="green";
 movingRect.debug=true;
  createCanvas(800,400);
  gameobject1=createSprite(100,100,50,50);
gameobject1.shapeColor="yellow";
 gameobject2=createSprite(200,100,50,50);
 gameobject2.shapeColor="blue";
 gameobject3=createSprite(300,100,50,50)
 gameobject3.shapeColor="orange";
 gameobject4=createSprite(400,100,50,50)
 gameobject4.shapeColor="purple";

}
  function draw() {
   background(255,255,255); 
  movingRect.x=World.mouseX;
   movingRect.y=World.mouseY; 
  console.log(movingRect.x-fixedRect.x); 
  if(isTouching(movingRect,gameobject4)){
      movingRect.shapeColor="red";
      gameobject4.shapeColor="red"
  }
  else{
   fixedRect.shapeColor="green"
   movingRect.shapeColor="green"
  }
    drawSprites();
    }
    