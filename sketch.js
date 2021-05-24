var bullet,wall,speed,weight;
var thickness,damage;
function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 50, 50);
  speed=random(223,321);
  weight=random(30,52);
  wall=createSprite(1200,200,thickness,200);
  wall.shapeColor = "purple";
  bullet.velocityX=speed;
  thickness = random(22,83);
}


function draw() {
  background("turquoise"); 
  if (wall.x-bullet.x< (wall.width+bullet.width)/2){
    bullet.velocityX=0;
    damage=0.5 * weight* speed* speed/thickness * thickness * thickness;
    console.log(damage)
    if (damage>180)
    {
      bullet.shapeColor="red"

    }
    else if(damage> 100){
      bullet.shapeColor="yellow"
    }
    else {bullet.shapeColor="green"
    }
  }
  drawSprites();
}