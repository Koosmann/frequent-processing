let offset = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(3);
  frameRate(30);
}

function draw() {
  background('#999999');
   
  stroke('#555555');
  strokeWeight(2);
  
  const x = width / 2;
  const y = height / 2;
  const r = max(width, height);
  
  burst(x, y, r, 200, offset);
  
  const orbitR = r * random(0,1);
  const omega = (2 * PI) / 8 * random(0, 8);
  const orbitX = cos(omega) * orbitR + x;
  const orbitY = sin(omega) * orbitR + y;
  const orbitSize = r + orbitR;
  
  offset += 0.1;
  
  strokeWeight(1);
  
  burst(orbitX, orbitY, orbitSize, 200, offset);
  
  noLoop();
}

function burst(x, y, r, n, offset) {
  push();
  translate(x, y);
  
  const start = PI/4 + offset;
  rotate(-start);
  
  const inc = 2 * PI / n;
  
  for (let i = 0; i < n; i++) {
    line(0, 0, r, r);
    rotate(inc);
  }
  
  pop();
}
