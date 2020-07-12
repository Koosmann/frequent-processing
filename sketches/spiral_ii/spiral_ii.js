function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(3);
}


function draw() {
  background('#999999');
  noFill();

  const w1 = width/16;
  const x1 = random((width/4) + width/16, (width/4 * 3) - (width/16) - w1);
  const y1 = getHeightJitter();

  const h1 = width/32;
  const n1 = height/h1 * random(2, 5);

  spiralII(x1, y1, w1, h1, 0.1, 0.9, n1, 0.05);

  const w2 = width/64;
  const x2 = random((width/4) + width/16, (width/4 * 3) - (width/16) - w2);
  const y2 = getHeightJitter();

  const h2 = width/80;
  const n2 = height/h2 * random(2, 100);

  spiralII(x2, y2, w2, h2, 0.1, random(0.5, 0.7), n2, 0.1);

  for (let i = 0; i < 5; i++) {
    const w3 = random(width/64, width/32);
    const x3 = random((width/4) + width/16, (width/4 * 3) - (width/16) - w3);
    const y3 = random(height/8*7, height/2);

    const h3 = w3/random(1,3);
    const n3 = height/h3 * random(2, 100);
    const s3 = random(0.01, 0.2);
    const o3 = random(0, 2 * PI);

    spiralII(x3, y3, w3, h3, random(0.01, 0.2), random(0.5, 0.9), n3, s3, o3);
  }

  //
  const offset = 0;
  const max4 = random(0.89, 0.91);
  const min4 = random(0.1, 0.7);
  const s4 = random(0.08, 0.12);
  spiralII(width/4, height/4, width/2, 100, min4, max4, 200, s4, offset);

  //spiralII(width/8*3, -height/4, width/16, width/32, 0.1, 0.9, 2000, 0.05);
  //spiralII(width/4, height/4, width/2, 100, 0.1, 0.9, 2000, 0.1);

  noLoop();
}

function spiralII(x, y, w, h, minComp, maxComp, n, speed, offset) {
  const controlMag = h/2.5;
  const compRangeAmp = maxComp - minComp;
  offset = offset || 0;

  for (let i = 0; i < n; i++) {
    let comp = compRangeAmp * pow(pow(Math.sin(i*speed + offset), 2), 0.2) + minComp;
    let controlMagComp = controlMag * comp;

    bezier(x + w/2, y, (x + w/2)  - controlMag, y, x, (y + h/2) - controlMag, x, y + h/2);
    bezier(x, y + h/2, x, (y + h/2) + controlMag, (x + w/2) - controlMag, y + h, x + w/2, y + h);

    let x1Anc = x + w/2;
    let y1Anc = y + h;
    let x1Cont = (x + w/2) + controlMag;
    let y1Cont = y + h;

    let x2Anc = x + w;
    let y2Anc = y + (h - h * comp/2);
    let x2Cont = x + w;
    let y2Cont = y2Anc + controlMagComp;

    bezier(x1Anc, y1Anc, x1Cont, y1Cont, x2Cont, y2Cont, x2Anc, y2Anc);

    x1Anc = x + w;
    y1Anc = y + (h - h * comp/2);
    x1Cont = x + w;
    y1Cont = y1Anc - controlMagComp;

    x2Anc = x + w/2;
    y2Anc = y + (h - h * comp);
    x2Cont = (x + w/2) + controlMag;
    y2Cont = y + (h - h * comp);

    bezier(x1Anc, y1Anc, x1Cont, y1Cont, x2Cont, y2Cont, x2Anc, y2Anc);

    y += (h - h * comp);
  }
}

function getWidthJitter() {
  return random(-width/10, width/10);
}

function getHeightJitter() {
  return random(-height/10, height/10);
}
