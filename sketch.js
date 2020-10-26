var car,wall;
var sped,weight;

function setup() {
  createCanvas(1600,800);
  car = createSprite(60,400,60,60);
  car.shapeColor="red";
  wall = createSprite(1440,400,60,150);
  wall.shapeColor="yellow";
  speed=0;
  weight=0;
}


function draw() {
  background(0);
  car.velocityX=speed;
  speed=Math.round(random(55,90));
  weight=Math.round(random(400,1500));
  if(wall.x-car.x<car.width/2+wall.width/2){
    car.velocityX=0;
    var deformation = 0.5*weight*speed*speed/22500;
    if(deformation > 180) {
    car.shapeColor ="red";
    }
    if(deformation < 100) {
    car.shapeColor ="green";
    }
    if(deformation <= 100 && deformation >= 180) {
    car.shapeColor ="yellow";
    }
  }
  drawSprites();
}