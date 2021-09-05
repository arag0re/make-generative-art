var seed = parseInt(tokenData.hash.slice(0, 16), 16);

let ellipses = false;
let janky = true;
let randomized = true;
let moreLines = false;
let maxSlices = 50;
let slices = [maxSlices];
let sliceOrder = [];
let numSlices = 0;
let smallestSlice, largestSlice;
let colorsA = ['#0771a6', '#ede8dc', '#d4cfc3', '#333d47'];
let lineColorsA = ['#ede8dc', '#d4cfc3', '#eba490', '#333d47', '#0771a6', '#f78a6b'];
let colorsB = ['#ad3914', '#ede8dc', '#d4cfc3', '#29333d'];
let lineColorsB = ['#ede8dc', '#d4cfc3', '#eba490', '#29333d', '#ad3914', '#f78a6b'];
let colorsC = ['#333333', '#555555'];
let lineColorsC = ['#ececec', '#333333', '#666666', '#999999'];
let colorsD = ['#2f2f30', '#DB909F', '#f0ece2'];
let lineColorsD = ['#2f2f30', '#DB909F', '#f0ece2'];
let colors = [];
let lineColors = [];
let bgcolor;
let lineColorOptions = 0;
let numQuads;
let ells = [2];
let ellipseAlpha = 255;
let quads;
let dim = 0;
let r;
let gg;

function setup() {
     dim = Math.min(window.innerWidth, window.innerHeight);
     createCanvas(dim, dim, WEBGL);
     pixelDensity();
     r = new RND(seed);
     smallestSlice = dim / 50;
     largestSlice = dim / 4;
     gg = createGraphics(dim, dim);
     compose();
}

function draw() {
     background(bgcolor);
     translate(-dim / 2, -dim / 2);
     updateBuffer();
     sliceBuffer();
     disc();
}

function keyPressed() {
     if (key == '1') {
          defineSlices();
          randomSequence();
     }
     if (key == '2') {
          orderedSequence();
     }
}

function disc() {
     fill(255);
     noStroke();
     translate(dim / 2, dim / 2);
     disc4();
     rotate(HALF_PI);
     disc4();
     rotate(HALF_PI);
     disc4();
     rotate(HALF_PI);
     disc4();
}

function disc4() {
     beginShape();
     vertex(-dim / 2, -dim / 2);
     vertex(0, -dim / 2);
     let bdim = -dim / 2 * 0.552284749831;
     bezierVertex(bdim, -dim / 2, -dim / 2, bdim, -dim / 2, 0);
     endShape();
}

function compose() {
     let rc = r.rb(0, 1);
     if (rc > 0.99) {
          colors = colorsD;
          lineColors = lineColorsD;
     } else if (rc > 0.95) {
          colors = colorsC;
          lineColors = lineColorsC;
     } else if (rc > 0.63) {
          colors = colorsB;
          lineColors = lineColorsB;
     } else {
          colors = colorsA;
          lineColors = lineColorsA;
     }
     lineColorOptions = int(r.rb(2, lineColors.length + 1));
     if (r.rb(0, 1) > 0.1) {
          ellipses = true;
     } else {
          ellipses = false;
     }
     if (r.rb(0, 1) > 0.5 && colors != colorsB && colors != colorsD) {
          ellipseAlpha = r.rb(204, 240);
     } else {
          ellipseAlpha = 255;
     }
     if (r.rb(0, 1) > 0.95) {
          moreLines = true;
     } else {
          moreLines = false;
     }
     if (r.rb(0, 1) > 0.7) {
          janky = true;
     } else {
          janky = false;
     }
     if (colors == colorsC) {
          bgcolor = '#000000';
     } else {
          bgcolor = colors[int(r.rb(0, colors.length))];
     }
     if (ellipses) {
          let edia1 = r.rb(dim * 0.5, dim * 1.75);
          let ta = colors.slice();
          removeArrayElement(ta, bgcolor);
          let ec1 = ta[int(r.rb(0, ta.length))];
          let ry1 = r.rb(0, dim * 0.4);
          if (r.rb(0, 1) > 0.5) {
               ry1 = dim - ry1;
          }
          ells[0] = new RE(ec1, edia1, 0.57595867, ry1);
          let edia2 = r.rb(dim * 0.33, dim * 1.0);
          let ec2 = colors[int(r.rb(0, colors.length))];
          let ry2 = r.rb(0, dim * 0.4);
          if (r.rb(0, 1) > 0.5) {
               ry2 = dim - ry2;
          }
          ells[1] = new RE(ec2, edia2, -0.57595867, ry2);
     }
     numQuads = 8 + int(pow(r.rb(1, 0), 3) * 12);
     if (moreLines) {
          numQuads += 32;
     }
     quads = [numQuads];
     for (let i = 0; i < numQuads; i++) {
          quads[i] = new RQ();
     }
     defineSlices();
     if (r.rb(0, 1) > 0.02) {
          randomSequence();
     } else {
          orderedSequence();
     }
}

function defineSlices() {
     numSlices = 0;
     let currentSlice = 0;
     for (let x = 0; x < dim; x += slices[currentSlice - 1].w) {
          let currentCut = smallestSlice + (pow(r.rb(0, 1), 3) * largestSlice);
          if (x + currentCut + smallestSlice > dim) {
               currentCut = dim - x;
          }
          slices[currentSlice] = new RS(x, currentCut);
          currentSlice++;
          numSlices++;
     }
}

function randomSequence() {
     randomized = true;
     sliceOrder = [];
     for (let i = 0; i < numSlices; i++) {
          append(sliceOrder, i);
     }
     sliceOrder = scrambleArray(sliceOrder);
}

function orderedSequence() {
     randomized = false;
     sliceOrder = [];
     for (let i = 0; i < numSlices; i++) {
          append(sliceOrder, i);
     }
}

function updateBuffer() {
     gg.clear();
     if (ellipses) {
          for (let i = 0; i < ells.length; i++) {
               ells[i].display();
          }
     }
     for (let i = 0; i < numQuads; i++) {
          quads[i].move();
          quads[i].display();
     }
}

function sliceBuffer() {
     let x = 0;
     for (let i = 0; i < numSlices; i++) {
          let which = sliceOrder[i];
          if (i == 0 || i == numSlices - 1) {
               slices[which].display(x);
          } else {
               if (janky == true && randomized == true) {
                    slices[which].display(x + slices[which].xoffset);
               } else {
                    slices[which].display(x);
               }
          }
          x += slices[which].w;
     }
}

class RQ {
     constructor() {
          this.th = r.rb(0, 1);
          this.y1 = r.rb(-dim / 8, dim + dim / 8);
          this.quadColor = lineColors[int(r.rb(0, lineColorOptions))];
          this.y2 = this.y1;
          this.y1off = r.rb(0, 1);
          this.y2off = r.rb(0, 1);
          this.angle = r.rb(0, TWO_PI);
          this.speed = r.rb(0.01, 0.01);
          this.scale = r.rb(dim / 100, dim / 25);
          this.my = 0.0;
          if (r.rb(0, 1) > 0.5) {
               this.y2 = this.y1 + (r.rb(dim / 16, dim) * -1);
          } else {
               this.y2 = this.y1 + r.rb(dim / 16, dim);
          }
          if (this.th > 0.7) {
               this.y1off = 2 + pow(this.y1off, 4) * dim / 50;
               this.y2off = 2 + pow(this.y2off, 4) * dim / 50;
          } else if (this.th > 0.5) {
               this.y1off = 2 + pow(this.y1off, 3) * dim / 70;
               this.y2off = 2 + pow(this.y2off, 3) * dim / 70;
          } else {
               this.y1off = 2 + pow(this.y1off, 5) * dim / 80;
               this.y2off = 2 + pow(this.y2off, 5) * dim / 80;
          }
     }
     move() {
          this.my = cos(this.angle) * this.scale;
          this.angle = this.angle + this.speed;
     }
     display() {
          gg.noStroke();
          gg.fill(this.quadColor);
          gg.beginShape();
          gg.vertex(0, this.y1 + this.my);
          gg.vertex(dim, this.y2 - this.my / 2);
          gg.vertex(dim, this.y2 + this.y2off - this.my / 2);
          gg.vertex(0, this.y1 + this.y1off + this.my);
          gg.endShape();
     }
}

class RE {
     constructor(cin, din, ain, yin) {
          this.x = r.rb(0, dim);
          this.y = yin;
          this.edia = din;
          this.angle = ain;
          this.rc = cin;
          this.ellcolor = color(red(this.rc), green(this.rc), blue(this.rc), ellipseAlpha);
     }
     display() {
          gg.noStroke();
          gg.push();
          gg.fill(this.ellcolor);
          gg.translate(this.x, this.y);
          gg.rotate(this.angle);
          gg.ellipse(0, 0, this.edia, this.edia * 0.66);
          gg.pop();
     }
}

class RS {
     constructor(xin, win) {
          this.tx = xin;
          this.w = win;
          this.xoffset = int(r.rb(-dim / 100, dim / 100));
     }
     display(x) {
          noStroke();
          beginShape();
          texture(gg);
          vertex(x, 0, this.tx, 0);
          vertex(x + this.w, 0, this.tx + this.w, 0);
          vertex(x + this.w, dim, this.tx + this.w, dim);
          vertex(x, dim, this.tx, dim);
          endShape();
     }
}

class RND {
     constructor(seed) {
          this.seed = seed
     }
     rd() {
          this.seed ^= this.seed << 13
          this.seed ^= this.seed >> 17
          this.seed ^= this.seed << 5
          return ((this.seed < 0 ? ~this.seed + 1 : this.seed) % 1000) / 1000
     }
     rb(a, b) {
          return a + (b - a) * this.rd()
     }
}

function removeArrayElement(array, elem) {
     var index = array.indexOf(elem);
     if (index > -1) {
          array.splice(index, 1);
     }
}

function scrambleArray(arr) {
     let newarr = [];
     let length = arr.length;
     for (let i = 0; i < length; i++) {
          let choice = floor(map(r.rb(0, 1), 0, 1, 0, arr.length));
          newarr.push(arr[choice]);
          arr.splice(choice, 1);
     }
     return (newarr);
}