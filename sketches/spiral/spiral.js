let offset = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(3);
}

function draw() {
  background('#999999');
  //strokeWeight(1/displayDensity());
  noFill();
  
  const columns = random(3, 10);
  
  for (let i = 0; i <= columns; i++) {
    const w = random(width/100, width/2);
    const x = (width / columns * i) - (w / 2);
    const y = random(height / 16, height / 8 * 7);
    const minH = random(1, 3);
    const maxH = random(4, 10);
    const amp = maxH - minH;
    const speed = amp / random(1, 30);
    const n = ((height - y) / amp) + 1;
    
    spiral(x, y, w, minH, maxH, n, speed);
  }
  
  noLoop();
}

function spiral(x, y, w, minH, maxH, n, speed) {
  let start = PI/2;
  let stop = PI/2 * 3;
  let amp = maxH - minH;
    
  ellipseMode(CORNER);
  for (let i = 0; i < n; i++) {
    let intH = (amp/2 * sin(sin(i*speed))) + (amp);
    print(intH);
    
    if (i % 2 == 0) {
      arc(x, y, w, intH, start, stop);
    } else {
      arc(x, y, w, intH, stop, start);
    }
    
    y += intH;
  }
} 
