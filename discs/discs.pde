void setup() {
  size(500, 500);
  pixelDensity(2);
}

void draw() {
  fill(#999999);
  noStroke();
  rect(0, 0, width, height);

  fill(#000000, 50);

  discs(
    50, 
    50, 
    50.0, 
    100.0, 
    10.0, 
    70.0, 
    PI/4, 
    5, 
    100
    );

  noLoop();
}

void discs(
  float x, 
  float y, 
  float width1, 
  float width2, 
  float height1, 
  float height2, 
  float r, 
  float spacing,
  int n) {
  pushMatrix();
  
  translate(x, y);
  rotate(-PI/2 + r);
  
  float wInc = (width2 - width1) / n;
  float hInc = (height2 - height1) / n;
  float w = width1;
  float h = height1;
  
  for (int i = 0; i < n; i++) {
    w += wInc;
    h += hInc;
    
    ellipse(0, 0, w, h);
    translate(0, spacing);
  }
  
  popMatrix();
}
