void setup() {
  size(500, 500);
  pixelDensity(2);
  frameRate(30);
}

void draw() {
  fill(#999999);
 
  rect(0, 0, width, height);
  
  stroke(#555555);
  strokeWeight(2);

  burst(250, 250, width, 400, 0);
  
  float orbitR = 150;
  float omega = (2 * PI) / 8 * 5;
  float x = cos(omega) * orbitR + width/2;
  float y = sin(omega) * orbitR + height/2;
  
  strokeWeight(1);
  burst(x, y, width, 200, 0);
  
  noLoop();
}

void burst(float x, float y, float r, int n, float offset) {
  pushMatrix();
  translate(x, y);
  
  float start = PI/4 + offset;
  rotate(-start);
  
  float inc = 2 * PI / n;
  
  for (int i = 0; i < n; i++) {
    line(0, 0, r, r);
    rotate(inc);
  }
  
  popMatrix();
}

void snake() {
}
