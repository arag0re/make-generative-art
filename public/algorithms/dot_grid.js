class RandomHash {
     constructor(seed) {
          this.seed = seed;
     }
     random_dec() {
          this.seed ^= this.seed << 13;
          this.seed ^= this.seed >> 17;
          this.seed ^= this.seed << 5;
          return ((this.seed < 0 ? ~this.seed + 1 : this.seed) % 1000) / 1000;
     }
     random_between(a, b) {
          return a + (b - a) * this.random_dec();
     }
     random_int(a, b) {
          return Math.floor(this.random_between(a, b + 1));
     }
     random_choice(x) {
          return x[Math.floor(this.random_between(0, x.length * 0.99))];
     }
}

class Block {
     constructor(x, y, size, colour) {
          this.x = x;
          this.y = y;
          this.size = size;
          fill(colour);
          rect(cordToPixels(x), cordToPixels(y), this.size, this.size);
     }
}

class Group {
     constructor(c) {
          var x = R.random_int(0, cols - 1);
          var y = R.random_int(0, rows - 1);
          this.size = (DIM - (offset * 2)) / cols;
          this.blocks = [];
          this.colour = c;
          this.blocks.push(new Block(x, y, this.size, this.colour));
          for (var s = 0; s < blocks - 1; s++) {
               var positions = [];
               for (var block in this.blocks) {
                    var xt = this.blocks[block].x;
                    var yt = this.blocks[block].y;
                    for (var xl = -1; xl <= 1; xl++) {
                         for (var yl = -1; yl <= 1; yl++) {
                              var currentX = xt - xl;
                              var currentY = yt - yl;
                              if (currentX != xt || currentY != yt) {
                                   if (currentX > -1 && currentX < cols && currentY > -1 && currentY < rows) {
                                        var checked = true;
                                        for (var group in groupList) {
                                             var groupBlocks = groupList[group].getBlocks();
                                             for (var blockTemp in groupBlocks) {
                                                  if ((currentX == groupBlocks[blockTemp].x && currentY == groupBlocks[blockTemp].y) || (currentX < 0 || currentX > (cols - 1) || currentY < 0 || currentY > (rows - 1))) {
                                                       checked = false;
                                                  }
                                             }
                                        }
                                        if (checked) {
                                             positions.push(new Position(currentX, currentY));
                                        }
                                   }
                              }
                         }
                    }
               }
               if (positions.length > 0) {
                    var randomTemp = R.random_int(0, positions.length - 1);
                    var xPos = positions[randomTemp].x;
                    var yPos = positions[randomTemp].y;
                    this.blocks.push(new Block(xPos, yPos, this.size, this.colour));
               }
          }
     }
     getBlocks() {
          return this.blocks;
     }
}

class Position {
     constructor(x, y) {
          this.x = x;
          this.y = y;
     }
}

var offset;

let seed = parseInt(tokenData.hash.slice(0, 16), 16);

let R = new RandomHash(seed);

var cols;
var rows;

var groups;
var blocks;

var groupList = [];

var colors;

var DEFAULT_SIZE = 1000;
var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;
var DIM = Math.min(WIDTH, HEIGHT);
var M = DIM / DEFAULT_SIZE;


function setup() {
     colors = [];
     cols = R.random_int(10, 50);
     rows = cols;
     offset = (DIM / cols) * 2;

     groups = map(cols, 10, 50, 5, 30);
     blocks = map(cols, 10, 50, 5, 40);

     createCanvas(DIM, DIM);
     colorMode(HSB);
     rectMode(CENTER);
     background(204);

     defineColors();

     drawGrid();

     drawComp();
}

function defineColors() {
     switch (R.random_choice(["a", "b", "c", "d"])) {
          case "a":
               splitComplementaryColors();
               break;
          case "b":
               complementaryColors();
               break;
          case "c":
               triadColors();
               break;
          case "d":
               tetradicColors();
               break;
     }
}

function tetradicColors() {
     var baseHue = R.random_int(0, 360);
     var com1Hue = (baseHue + 90) % 360;
     var com2Hue = (baseHue + 180) % 360;
     var com3Hue = (baseHue + 270) % 360;

     var baseColor = color(baseHue, 100, 100);
     var baseColorShade1 = color(baseHue, R.random_int(70, 90), 100);
     var baseColorShade2 = color(baseHue, R.random_int(50, 70), 100);

     var com1HueColor = color(com1Hue, 100, 100);
     var com1HueShade1 = color(com1Hue, R.random_int(70, 90), 100);
     var com1HueShade2 = color(com1Hue, R.random_int(50, 70), 100);

     var com2HueColor = color(com2Hue, 100, 100);
     var com2HueColorShade1 = color(com2Hue, R.random_int(70, 90), 100);
     var com2HueColorShade2 = color(com2Hue, R.random_int(50, 70), 100);

     var com3HueColor = color(com3Hue, 100, 100);
     var com3HueColorShade1 = color(com3Hue, R.random_int(70, 90), 100);
     var com3HueColorShade2 = color(com3Hue, R.random_int(50, 70), 100);

     for (var i = 0; i < 60; i++) {
          colors.push(baseColor);
          colors.push(baseColorShade1);
          colors.push(baseColorShade2);
     }

     for (var i = 0; i < 30; i++) {
          colors.push(com1HueColor);
          colors.push(com1HueShade1);
          colors.push(com1HueShade2);
     }

     for (var i = 0; i < 5; i++) {
          colors.push(com2HueColor);
          colors.push(com2HueColorShade1);
          colors.push(com2HueColorShade2);

          colors.push(com3HueColor);
          colors.push(com3HueColorShade1);
          colors.push(com3HueColorShade2);
     }
}

function triadColors() {
     var baseHue = R.random_int(0, 360);
     var com1Hue = (baseHue + 120) % 360;
     var com2Hue = (baseHue + 240) % 360;

     var baseColor = color(baseHue, 100, 100);
     var baseColorShade1 = color(baseHue, R.random_int(70, 90), 100);
     var baseColorShade2 = color(baseHue, R.random_int(50, 70), 100);

     var com1HueColor = color(com1Hue, 100, 100);
     var com1HueShade1 = color(com1Hue, R.random_int(70, 90), 100);
     var com1HueShade2 = color(com1Hue, R.random_int(50, 70), 100);

     var com2HueColor = color(com2Hue, 100, 100);
     var com2HueColorShade1 = color(com2Hue, R.random_int(70, 90), 100);
     var com2HueColorShade2 = color(com2Hue, R.random_int(50, 70), 100);

     for (var i = 0; i < 60; i++) {
          colors.push(baseColor);
          colors.push(baseColorShade1);
          colors.push(baseColorShade2);
     }

     for (var i = 0; i < 30; i++) {
          colors.push(com1HueColor);
          colors.push(com1HueShade1);
          colors.push(com1HueShade2);
     }

     for (var i = 0; i < 10; i++) {
          colors.push(com2HueColor);
          colors.push(com2HueColorShade1);
          colors.push(com2HueColorShade2);
     }
}

function splitComplementaryColors() {
     var baseHue = R.random_int(0, 360);
     var com1Hue = (baseHue + 170) % 360;
     var com2Hue = (baseHue + 190) % 360;

     var baseColor = color(baseHue, 100, 100);
     var baseColorShade1 = color(baseHue, R.random_int(70, 90), 100);
     var baseColorShade2 = color(baseHue, R.random_int(50, 70), 100);

     var com1HueColor = color(com1Hue, 100, 100);
     var com1HueShade1 = color(com1Hue, R.random_int(70, 90), 100);
     var com1HueShade2 = color(com1Hue, R.random_int(50, 70), 100);

     var com2HueColor = color(com2Hue, 100, 100);
     var com2HueColorShade1 = color(com2Hue, R.random_int(70, 90), 100);
     var com2HueColorShade2 = color(com2Hue, R.random_int(50, 70), 100);

     for (var i = 0; i < 60; i++) {
          colors.push(baseColor);
          colors.push(baseColorShade1);
          colors.push(baseColorShade2);
     }

     for (var i = 0; i < 30; i++) {
          colors.push(com1HueColor);
          colors.push(com1HueShade1);
          colors.push(com1HueShade2);
     }

     for (var i = 0; i < 10; i++) {
          colors.push(com2HueColor);
          colors.push(com2HueColorShade1);
          colors.push(com2HueColorShade2);
     }
}

function complementaryColors() {
     var baseHue = R.random_int(0, 360);
     var comHue = (baseHue + 180) % 360;

     var baseColor = color(baseHue, 100, 100);
     var baseColorShade1 = color(baseHue, R.random_int(70, 90), 100);
     var baseColorShade2 = color(baseHue, R.random_int(50, 70), 100);

     var comColor = color(comHue, 100, 100);
     var comColorShade1 = color(comHue, R.random_int(70, 90), 100);
     var comColorShade2 = color(comHue, R.random_int(50, 70), 100);

     for (var i = 0; i < 60; i++) {
          colors.push(baseColor);
          colors.push(baseColorShade1);
          colors.push(baseColorShade2);
     }

     for (var i = 0; i < 40; i++) {
          colors.push(comColor);
          colors.push(comColorShade1);
          colors.push(comColorShade2);
     }
}


function draw() {}

function drawGrid() {
     for (var x = 0; x < cols; x++) {
          for (var y = 0; y < rows; y++) {
               strokeWeight(map(cols, 10, 50, 10 * (DIM / 1000), 2 * (DIM / 1000)));
               point(cordToPixels(x), cordToPixels(y));
          }
     }
}

function drawComp() {
     for (var g = 0; g < groups; g++) {
          strokeWeight(map(cols, 10, 50, 10 * (DIM / 1000), 2 * (DIM / 1000)));
          groupList.push(new Group(colors[R.random_int(0, colors.length - 1)]));
     }
}

function cordToPixels(value) {
     return map(value, 0, cols - 1, offset, DIM - offset);
}