var mr,fr;
var mr1,fr1;
var mr2,fr2;
var mr3,fr3;

function setup() {
  createCanvas(800,400);
  mr = createSprite(100, 100, 50, 30);
  fr = createSprite(100, 300, 40, 80);
  mr1 = createSprite(200, 100, 50, 30);
  fr1 = createSprite(200, 300, 40, 80);
  mr2= createSprite(300, 100, 50, 30);
  fr2 = createSprite(300, 300, 40, 80);
  mr3 = createSprite(400, 100, 50, 30);
  fr3 = createSprite(400, 300, 40, 80);
  //mr.velocityY=3;
  //fr.velocityY=-3;
  mr1.velocityY=2;
  mr2.velocityY=2;
  mr3.velocityY=2;

  mr.shapeColor = "green";
  fr.shapeColor = "green";
  mr1.shapeColor = "blue";
  fr1.shapeColor = "blue";
  mr2.shapeColor = "red";
  fr2.shapeColor = "red";
  mr3.shapeColor = "yellow";
  fr3.shapeColor = "yellow";

  mr.debug = true;
  fr.debug = true;
}

function draw() {
  background(230); 
  
  mr.x = mouseX;
  mr.y = mouseY;

  /*if(fr.x - mr.x <= fr.width/2 + mr.width/2 && 
    mr.x - fr.x <= fr.width/2 + mr.width/2){*/
  if (isTouching(mr,fr)){
    mr.shapeColor = "red";
    fr.shapeColor = "red";
  }else if (isTouching(mr,fr1)){
    mr.shapeColor = "red";
    fr1.shapeColor = "red";
  }else if (isTouching(mr,fr2)){
    mr.shapeColor = "red";
    fr2.shapeColor = "orange";
  }else if (isTouching(mr,fr3)){
    mr.shapeColor = "red";
    fr3.shapeColor = "red";
  }
   else {
    mr.shapeColor = "green";
    fr.shapeColor = "green";
    fr1.shapeColor = "blue";
    fr2.shapeColor = "red";
    fr3.shapeColor = "yellow";
  }

  //bounceOff(mr,fr);
  bounceOff(mr1,fr1);
  bounceOff(mr2,fr2);
  bounceOff(mr3,fr3);
console.log(isTouching(mr,fr))
  drawSprites();
}

