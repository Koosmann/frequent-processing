function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(2);
}

function draw() {
  fill('#999999');
  noStroke();
  rect(0, 0, width, height);
  
  stroke('#555555');
  strokeWeight(1);
  
  const x = width / 2;
  const y = height / 2;
  const size = 4;
  const area = width * height;
  const n = area / (size * 4);
  
  snake(x, y, 4, 3, n);
  
  noLoop();
}

function snake(x, y, scale, jitter, n) {
  push();
  translate(x, y);
  
  for (let i = 0; i < n; i++) {
    let size = round(random(-jitter, jitter)) * scale;
    let rInc = round(random(0, 4)) * (PI / 2);
    
    rotate(rInc);
    line(0, 0, size, 0);
    
    translate(size, 0);
  }
  
  pop();
}
