void setup() {
  size(500, 500);
  pixelDensity(2);
}

void draw() {
  fill(#999999);
  noStroke();
  rect(0, 0, width, height);
  
  stroke(#555555);
  strokeWeight(1);
  snake(250, 250, 4, 3, 10000);
  
  noLoop();
}

void snake(float x, float y, float scale, int _, int n) {
  pushMatrix();
  translate(x, y);
  
  for (int i = 0; i < n; i++) {
    float size = round(random(-_, _)) * scale;
    float rInc = round(random(0, 4)) * (PI / 2);
    
    rotate(rInc);
    line(0, 0, size, 0);
    
    translate(size, 0);
  }
  
  popMatrix();
}
