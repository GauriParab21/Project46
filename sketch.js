var iss,spacecraft;
var bgImg,iss_img,scimg;

var hasDocked = false;

function preload(){
  bgImg = loadImage("Images/spacebg.jpg");

  iss_img = loadImage("Images/iss.png");

  scimg  = loadImage("Images/spacecraft1.png");
  scimg1 = loadImage("Images/spacecraft2.png");
  scimg2 = loadImage("Images/spacecraft4.png");
  scimg3 = loadImage("Images/spacecraft3.png");

}

function setup() {
  createCanvas(600,350);

 spacecraft = createSprite(285,240);
 spacecraft.addImage(scimg);
 spacecraft.scale = 0.15;

 iss = createSprite(330,130);
 iss.addImage(iss_img);
 iss.scale = 0.35;

}
function draw() {
  background(bgImg); 
  
  spacecraft.addImage(scimg);

  if(!hasDocked){
    spacecraft.x = spacecraft.x + random(-1,1);
    
    if(keyDown("UP_ARROW")){
      spacecraft.y = spacecraft.y -2;
    }
      
    if(keyDown("LEFT_ARROW")){
        spacecraft.addImage(scimg3);
      spacecraft.x = spacecraft.x - 1;
    }
      
    if(keyDown("RIGHT_ARROW")){
        spacecraft.addImage(scimg2);
      spacecraft.x = spacecraft.x + 1;
    }
      
    if(keyDown("DOWN_ARROW")){
        spacecraft.addImage(scimg1);
    }
  }

  if(spacecraft.y <= (iss.y+40) && spacecraft.x <= (iss.x-10)){
    hasDocked = true;
    textSize(25);
    fill("white")
    text("Docking Successful!", 200, 300);
  }
  
  drawSprites();
}

