function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(3);
}


function draw() {
  background('#999999');
  noFill();
  
  const n = 8
  const sOmegaN = round(random(0, 8));
  for (let i = 0; i < n; i++) {
    const w = width/13;
    const h = height/16*14;
    
    const contentWidth = width/16*14
    const spacerW = (contentWidth - (w * n)) / (n - 1)
    
    const x = (width/16) + (w * i) + (spacerW * i);
    const y = height/16;
    
    stroke('#33333377')
    patchOfFur(x, y, w, h, 5, 5, 30, PI/8 * (sOmegaN + i/2), PI/8 * (sOmegaN + 3 + i/2), 3);
  }
  
  noLoop();
}

function patchOfFur(x, y, w, h, pD, lMin, lMax, oMin, oMax, pJitter) {
  for (let iX = x; iX <= x + w; iX += pD) {
    for (let iY = y; iY <= y + h; iY += pD) {
      const fL = random(lMin, lMax);
      const fO = random(oMin, oMax);
      
      const xJitter = random(-pJitter, pJitter)
      const yJitter = random(-pJitter, pJitter)
      
      pieceOfFur(iX + xJitter, iY + yJitter, fL, fO);
    }
  }
}

function pieceOfFur(x, y, l, omega) {
  const xL = l * cos(omega)
  const yL = l * sin(omega)
  line(x, y, x + xL, y + yL);
}
