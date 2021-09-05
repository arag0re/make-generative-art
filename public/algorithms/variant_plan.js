tokenData = tokenData.hash;
let hashPairs = [];
for (let i=0;i<63;i++){ 
	let hex = tokenData.slice(i+2, i+4);
	hashPairs[i]=parseInt(hex,16);
}
for (let i=0;i<32;i++){ 
	let hex = tokenData.slice(i+2, i+3)+ tokenData.slice(i+34, i+35);
	hashPairs[i+63]=parseInt(hex,16);
}
let imagew;
let imageh;
let grid;
let rmin; 
let rmax;
let wmin; 
let wmax;
let hmin; 
let hmax;
let homax;
let vomax;
let c;
let r;
let w; 
let h;
let ho; 
let vo;
let sw;

function setup() {
  grid = 8;
  rmin = 8;
  rmax = 16;
  wmin = 3; 
  wmax = 7;
  hmin = 3;
  hmax = 7;
  homax = 7;
  vomax = 7;
  r = floor(map(hashPairs[0], 0, 255, rmin, rmax + 0.9999999999));
	let dim = Math.floor(Math.min(window.innerWidth, window.innerHeight)/160)*160;
	createCanvas(dim, dim);
  colorMode(RGB, 255);
  background(255);
  noFill();
  rectMode(CENTER);
	imagew = 8 * width / 10;
	imageh = 8 * height / 10;
} 
function draw () {
  c = floor(map(hashPairs[1], 0, 255, 0, 1.9999999999));
  background(231);
  stroke(9, 69, 209);
  if (c > 0) {
    background(9, 69, 209);
    stroke(231);
  }
  for (let i = 0; i < r; i++) {
    w = int(imagew / grid) * floor(map(hashPairs[i+2], 0, 255, wmin, wmax + 0.9999999999));
    h = int(imageh / grid) * floor(map(hashPairs[i+18], 0, 255, hmin, hmax + 0.9999999999));
    ho = int(imagew / (2 * grid)) * (homax - floor(map(hashPairs[i+34], 0, 255, 0, (2 * homax) + 0.9999999999)));
    vo = int(imageh / (2 * grid)) * (vomax - floor(map(hashPairs[i+50], 0, 255, 0, (2 * vomax) + 0.9999999999)));
    if (i == 0) {
      ho = int(imagew / (2 * grid)) * homax;
    }
    if (i == 1) {
      ho = int(imagew / (2 * grid)) * -homax;
    }
    if (i == 2) {
      vo = int(imageh / (2 * grid)) * vomax;
    }
    if (i == 3) {
      vo = int(imageh / (2 * grid)) * -vomax;
    }
    sw = floor(map(hashPairs[i+66], 0, 255, 1, 2.9999999999));
    if (i == r - 1) {
      sw = 2;
    }
    strokeWeight(imagew / (sw * 8 * grid));
    if (w/2 + ho > imagew / 2) {
      ho = int(imagew / 2) - (w / 2);
    }
    if (w/2 - ho > imagew / 2) {
      ho = (w / 2) - int(imagew / 2);
    }
    if (h/2 + vo > imageh / 2) {
      vo = int(imageh / 2) - h/2;
    }
    if (h/2 - vo > imageh / 2) {
      vo = h/2 - int(imageh / 2);
    }
    if (sw == 2) {
      h = h + imageh / (sw * 8 * grid);
      w = w + imagew / (sw * 8 * grid); 
    }
    if (sw == 1 && c == 0) {
      fill(231); 
    }
    if (sw == 1 && c == 1) {
      fill(9, 69, 209); 
    }
    if (sw == 2) {
      noFill(); 
    }
    rect ((width / 2) + ho, (height / 2) + vo, w, h);
  }
  noLoop ();
}