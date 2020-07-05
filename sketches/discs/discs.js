function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(2);
}

function draw() {
  fill('#999999');
  noStroke();
  rect(0, 0, width, height);
  
  noFill();
  stroke('#555555');
  
  function drawRandomDiscs(invert) {
    const hypotenuse = sqrt(pow(width, 2) + pow(height, 2));
    const angle = asin(height / hypotenuse) + random(-PI/2, PI/2);
    
    const startPadding = 0.05;
    const posJitter = random(0, 0.5);
    const xJitter = width * posJitter;
    const yJitter = height * posJitter;
    const x = width * startPadding + xJitter;
    const y = height * startPadding + yJitter;
    
    const startSize = 0.05;
    let width1 = width * startSize * random(0.1, 1.2);
    let height1 = height * startSize * 0.5 * random(0.1, 1.2);
    
    const endSize = 0.2;
    let width2 = width * endSize * random(0.8, 1.2);
    let height2 = height * endSize * random(0.8, 1.2);
    
    const endPadding = 0.15;
    
    const n = hypotenuse / 100 * random(1, 10);
    const inc = ((hypotenuse - ((startPadding * hypotenuse) + (endPadding * hypotenuse))) / n) * random(0.5, 1);
    
    if (invert) {
      let width3 = width1;
      let height3 = height1;
      
      width1 = width2;
      height1 = height2;
      width2 = width3;
      height2 = height3;
    }
  
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
  }
  
  drawRandomDiscs();
  drawRandomDiscs(true);
  
  drawRandomDiscs(random(0, 1) > .5);
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
