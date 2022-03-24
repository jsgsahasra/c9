var box ; 

function setup() {

  createCanvas(400,700);
box = createSprite(200,200,50,50)

var m ='hello';
  console.log(m)
}

function draw() 
{
  background(150);
  if(keyIsDown(RIGHT_ARROW)){
    box.position.x=box.position.x+5
  }
  if(keyIsDown(LEFT_ARROW)){
    box.position.x=box.position.x-5
  }
  if(keyIsDown(UP_ARROW)){
    box.position.y=box.position.y-5
  }
  if(keyIsDown(DOWN_ARROW)){
    box.position.y=box.position.y+5
  }
  
drawSprites()
}




