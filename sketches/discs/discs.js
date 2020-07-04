function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(2);
}

function draw() {
  fill('#999999');
  noStroke();
  rect(0, 0, width, height);

  fill('#00000022');
  
  const hypotenuse = sqrt(pow(width, 2) + pow(height, 2));
  const angle = asin(height / hypotenuse);
  
  const startPadding = 0.05;
  const x = width * startPadding;
  const y = height * startPadding;
  
  const startSize = 0.05;
  const width1 = width * startSize;
  const height1 = height * startSize * 0.5;
  
  const endSize = 0.2;
  const width2 = width * endSize;
  const height2 = height * endSize;
  
  const endPadding = 0.15;
  
  const n = hypotenuse / 10;
  const inc = (hypotenuse - ((startPadding * hypotenuse) + (endPadding * hypotenuse))) / n;

  discs(
    x, 
    y, 
    width1, 
    height1, 
    width2, 
    height2, 
    angle, 
    inc, 
    n
  );

  noLoop();
}

function discs(
  x, 
  y, 
  width1,
  height1,
  width2, 
  height2, 
  r, 
  spacing,
  n
) {
  push();
  
  translate(x, y);
  rotate(-PI/2 + r);
  
  const wInc = (width2 - width1) / n;
  const hInc = (height2 - height1) / n;
  let w = width1;
  let h = height1;
  
  for (let i = 0; i < n; i++) {
    w += wInc;
    h += hInc;
    
    ellipse(0, 0, w, h);
    translate(0, spacing);
  }
  
  pop();
}
