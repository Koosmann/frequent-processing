function setup() {
  createCanvas(windowWidth, windowHeight);
}


function draw() {
  background('#999999');
  noFill();
  
  let xJitter = width / 4;
  let yJitter = height / 4;
  
  let x1Jitter = random(-xJitter, xJitter);
  let y1Jitter = random(0, yJitter);
  let x2Jitter = random(-xJitter, 0);
  let y2Jitter = random(-yJitter, yJitter);
  let x3Jitter = random(-xJitter, xJitter);
  let y3Jitter = random(-yJitter, 0);
  let x4Jitter = random(0, xJitter);
  let y4Jitter = random(-yJitter, yJitter);
  
  let x1 = (width / 2) + x1Jitter;
  let y1 = (height / 8) + y1Jitter;
  let x2 = (width / 8 * 7) + x2Jitter;
  let y2 = (height / 2) + y2Jitter;
  let x3 = (width / 2) + x3Jitter;
  let y3 = (height / 8 * 7) + y3Jitter;
  let x4 = (width / 8) + x4Jitter;
  let y4 = (height / 2) + y4Jitter;
  
  let nX = round(random(5, 100));
  let nY = round(random(5, 100));
  
  mesh(x1, y1, x2, y2, x3, y3, x4, y4, nX, nY);
  
  noLoop();
}

function mesh(
  x1, y1,
  x2, y2,
  x3, y3,
  x4, y4,
  nX, nY
 ) {
   quad(x1, y1, x2, y2, x3, y3, x4, y4);
   
   let xX1 = x1;
   let xX2 = x4;
   let xY1 = y1;
   let xY2 = y4;
   
   let xX1Inc = (x2 - x1) / nX;
   let xX2Inc = (x3 - x4) / nX;
   let xY1Inc = (y2 - y1) / nX;
   let xY2Inc = (y3 - y4) / nX;
   
   for (let iX = 0; iX < nX; iX++) {
     line(xX1, xY1, xX2, xY2);
     
     xX1 += xX1Inc;
     xX2 += xX2Inc;
     xY1 += xY1Inc;
     xY2 += xY2Inc;
   }
   
   let yX1 = x1;
   let yX2 = x2;
   let yY1 = y1;
   let yY2 = y2;
   
   let yX1Inc = (x4 - x1) / nY;
   let yX2Inc = (x3 - x2) / nY;
   let yY1Inc = (y4 - y1) / nY;
   let yY2Inc = (y3 - y2) / nY;
   
   for (let iY = 0; iY < nY; iY++) {
     line(yX1, yY1, yX2, yY2);
     
     yX1 += yX1Inc;
     yX2 += yX2Inc;
     yY1 += yY1Inc;
     yY2 += yY2Inc;
   }
 }
