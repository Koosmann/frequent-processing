function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(3);
}


function draw() {
  background('#999999');
  noFill();
  
  spiralII(width/4, height/4, 100, 50, .15, 20);
  
  noLoop();
}

function spiralII(x, y, w, h, comp, n) {
  //ellipseMode(CORNER);
  const omegaOne = -PI/2;
  const omegaTwo = PI;
  const omegaThree = PI/2;
  const omegaFour = 0;
   
  
  for (let i = 0; i < n; i++) {
      let h1 = h;
      let h2 = h1 * .7;
      let h3 = h2 * comp;
      let h4 = h1;
      
      let y1 = y;
      let y2 = y1;
      let y3 = y2 + (h2/2-h3/2);
      let y4 = y3;
      
      // use bezier curve instead 
      // for ref, see fish-like shape in sketchbook
      arc(x, y1, w, h1, omegaTwo, omegaOne);
      arc(x, y2, w, h2, omegaThree, omegaTwo);
      arc(x, y3, w, h3, omegaFour, omegaThree);
      arc(x, y4, w, h4, omegaOne, omegaFour);
      
      y += ((h1/2 + h2/2) - (h3/2 + h4/2));
  }
}
