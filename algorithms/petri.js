var xoff = 0,
     yoff = 0,
     seed = 1,
     noiseScale = 0.0007,
     pNV = 0,
     pNV2 = 0,
     c = 0,
     b = 0,
     startH = 0,
     range = 55,
     endH = 0,
     count = 0,
     dir = 1,
     M = 1;

function setup() {
     var cnv;
     if (windowWidth >= windowHeight)
          cnv = createCanvas(windowHeight, windowHeight);
     else
          cnv = createCanvas(windowWidth, windowWidth);
     cnv.style('display', 'block');
     smooth();
     var DEFAULT_SIZE = 1000;
     var WIDTH = window.innerWidth;
     var HEIGHT = window.innerHeight;
     var DIM = Math.min(WIDTH, HEIGHT);
     var M = DIM / DEFAULT_SIZE;
     seed = parseInt(tokenData.hash.slice(0, 16), 16);
     let R = new Random(seed);
     seed = R.random_between(0, 200);
     console.log(seed);
     pNV = width / 2;
     pNV2 = height / 2;
     startH = seed;
     noiseSeed(seed);
     colorMode(HSB, 255);
     background(20);
     c = color(255, 255, 255);
     b = color(255, 255, 255);
     noiseScale = 0.0005 / M;
     endH = startH + range;
     count = startH;
}

function windowResized() {
     if (windowWidth >= windowHeight)
          resizeCanvas(windowHeight, windowHeight);
     else
          resizeCanvas(windowWidth, windowWidth);
     background(20);
}

function draw() {
     background(20, 0.3);
     if (count < startH)
          dir = +1;
     if (count > endH)
          dir = -1;
     count += dir * 0.2;
     c = color(seed, (1 - pNV) * 255 + 100, 255);
     b = color(255 - count, (pNV) * 255 + 100, 255);
     xoff += 0.01;
     for (var x = 0; x < width; x += 5) {
          yoff += 0.01;
          var noiseVal = noise((xoff + x) * noiseScale, yoff * noiseScale);
          var noiseVal2 = noise(yoff * noiseScale, (xoff + x) * noiseScale);
          if (x > 0) {
               strokeWeight(2 * M);
               stroke(b);
               line(width * noiseVal2, height * noiseVal, width * pNV2, height * pNV);
               line(width - width * noiseVal2, height - height * noiseVal, width - width * pNV2, height - height * pNV);
               line(width - width * noiseVal2, height * noiseVal, width - width * pNV2, height * pNV);
               line(width * noiseVal2, height - height * noiseVal, width * pNV2, height - height * pNV);
               fill(c)
               noStroke();
               ellipse(width / 2, height / 2, width / 40, width / 40);
          }
          pNV = noiseVal;
          pNV2 = noiseVal2;
     }
     noFill();
     stroke(c);
     strokeWeight(2);
     ellipse(width / 2, height / 2, width - 10, width - 10);
     stroke(0);
     strokeWeight(200);
     ellipse(width / 2, height / 2, width + 192, width + 192);
}
class Random {
     constructor(seed) {
          this.seed = seed
     }
     random_dec() {
          this.seed ^= this.seed << 13
          this.seed ^= this.seed >> 17
          this.seed ^= this.seed << 5
          return ((this.seed < 0 ? ~this.seed + 1 : this.seed) % 1000) / 1000
     }
     random_between(a, b) {
          return a + (b - a) * this.random_dec()
     }
     random_int(a, b) {
          return Math.floor(this.random_between(a, b + 1))
     }
     random_choice(x) {
          return x[Math.floor(this.random_between(0, x.length * 0.99))]
     }
}
window.onload = function() {
     document.body.style.background = "#000";
}