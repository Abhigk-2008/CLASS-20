var fixedRect, movingRect

function setup() { createCanvas(1200,800);
   movingRect = createSprite(400, 200, 50, 80);
   movingRect.shapeColor = "green";
    movingRect.debug = true; 
    fixedRect = createSprite(600, 400, 80, 30);
     fixedRect.shapeColor = "green"; 
     fixedRect.debug = true; }

     function draw() { background(0); 
      //console.log(movingRect.x-fixedRect.x) 
      movingRect.x = mouseX; 
      movingRect.y = mouseY; 
      if (movingRect.x-fixedRect.x > fixedRect.width/2+movingRect.width/2)
       { movingRect.shapeColor = "red";
        fixedRect.shapeColor = "red"; 
      } else { movingRect.shapeColor = "green";
       fixedRect.shapeColor = "green";
       } drawSprites(); }