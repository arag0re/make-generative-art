let seedA = parseInt(tokenData.hash.slice(0, 16), 16);

let outputsize;
let size;
let halfsize;
let freedom;

let blotnumblots;
let blotcolorname = [];
let blotdescription;

let greys = [
     [255, 255, 255],
     [192, 192, 192],
     [152, 152, 152],
     [42, 52, 57],
     [146, 142, 133],
     [76, 88, 102]
];

let blues = [
     [108, 180, 238],
     [75, 97, 209],
     [16, 52, 166],
     [49, 140, 231],
     [31, 48, 94],
     [70, 143, 234]
];

let greens = [
     [86, 130, 3],
     [34, 139, 34],
     [116, 195, 101],
     [0, 158, 96],
     [208, 240, 192],
     [80, 200, 120]
];

let reds = [
     [196, 30, 58],
     [150, 0, 24],
     [220, 20, 60],
     [250, 128, 114],
     [230, 32, 32],
     [230, 0, 38]
];

let purples = [
     [102, 2, 60],
     [120, 81, 169],
     [218, 112, 214],
     [136, 0, 133],
     [114, 36, 108],
     [216, 191, 216]
];

let yellows = [
     [255, 255, 204],
     [238, 237, 9],
     [255, 255, 153],
     [255, 215, 0],
     [231, 172, 65],
     [255, 239, 0]
];

let browns = [
     [159, 129, 112],
     [245, 245, 220],
     [149, 69, 53],
     [123, 63, 0],
     [36, 25, 20],
     [195, 176, 145]
];

let colors = greys.concat(blues.concat(greens.concat(reds.concat(purples.concat(yellows.concat(browns))))));

let thecolors = [];

let colfreqs = [40, 80, 100, 10, 3, 100, 100, 80, 3, 40, 10, 100, 40, 10, 100, 80, 3, 100, 100, 10, 3, 40, 100, 80, 100, 10, 80, 40, 100, 3, 40, 3, 100, 100, 80, 10, 28, 3, 80, 100, 100, 40];
let colnames = ["White", "Silver Gray", "Spanish Gray", "Gunmetal Gray", "Stone Gray", "Marengo Gray", "Argentinian Blue", "Savoy Blue", "Egyptian Blue", "Bleu de France", "Delft Blue", "Moroccan Blue", "Avocado Green", "Forest Green", "Mantis Green", "Shamrock Green", "Tea Green", "Emerald Green", "Cardinal Red", "Carmine Red", "Crimson Red", "Salmon Red", "Lust Red", "Spanish Red", "Tyrian Purple", "Royal Purple", "Orchid Purple", "Mardis Gras Purple", "Palatinate Purple", "Thistle Purple", "Cream Yellow", "Xanthic Yellow", "Canary Yellow", "Golden Yellow", "Hunyadi Yellow", "Process Yellow", "Beaver Brown", "Beige Brown", "Chestnut Brown", "Chocolate Brown", "Dark Brown", "Khaki Brown"];

let coordsX = [];
let coordsY = [];

let canvas;

function setup() {

     let numblobs = 1;
     randnum = int(map(rnd(), 0, 1, 0, 1000));
     if (randnum < 300) {
          numblobs = 2;
          if (randnum < 50) {
               numblobs = 3;
          }
     }

     append(thecolors, getFillColor());
     append(thecolors, getFillColor());
     append(thecolors, getFillColor());

     outputsize = windowWidth >= windowHeight ? windowHeight : windowWidth;
     createCanvas(outputsize, outputsize);

     setsize();
     canvas = createGraphics(size, size);
     canvas.background(0);

     points = int(map(rnd(), 0, 1, 20, 100));

     for (let i = 0; i < numblobs; i++) {
          let fillcol = thecolors[i];
          let strokecol = fillcol;
          if ((fillcol[0] >= 170 || fillcol[1] >= 170 || fillcol[2] >= 170)) {
               strokecol = [fillcol[0] / 10 * 7, fillcol[1] / 10 * 7, fillcol[2] / 10 * 7];
          } else {
               strokecol = [min([fillcol[0] * 2.75, 255]), min([fillcol[1] * 2.75, 255]), min([fillcol[2] * 2.75, 255])];
          }

          genCoords();
          fixCoords();

          let boundarywidth = int(size / 180);
          let coldelta = [(fillcol[0] - strokecol[0]) / boundarywidth, (fillcol[1] - strokecol[1]) / boundarywidth, (fillcol[2] - strokecol[2]) / boundarywidth];
          canvas.fill(fillcol);
          for (let strokeweight = boundarywidth; strokeweight >= 1; strokeweight--) {
               if (strokeweight < boundarywidth) {
                    canvas.noFill();
               }
               strokecol = [strokecol[0] + coldelta[0], strokecol[1] + coldelta[1], strokecol[2] + coldelta[2]];
               canvas.stroke(strokecol);
               canvas.strokeWeight(strokeweight);
               genBlot();
          }

          points = points / 2;
     }

     canvas.filter(BLUR, 0.5);

     blotdescription = GetBlotTypeFromNumblots(numblobs) + " :";
     for (let i = 0; i < blotcolorname.length; i++) {
          blotdescription = blotdescription + " " + blotcolorname[i];
          if (i != blotcolorname.length - 1) {
               blotdescription = blotdescription + ",";
          }
     }

     console.log(blotdescription);

     image(canvas, 0, 0, outputsize, outputsize);
}

function setsize() {
     if (outputsize < 1800) {
          size = 1800;
     } else {
          size = outputsize;
     }
     halfsize = size / 2;
     freedom = size / 10;
}

function genBlot() {
     canvas.beginShape();
     for (let i = 0; i < coordsX.length; i++) {
          canvas.curveVertex(coordsX[i] + (size / 2), coordsY[i]);
     }

     for (let i = coordsX.length - 1; i >= 0; i--) {
          canvas.curveVertex(-1 * coordsX[i] + (size / 2), coordsY[i]);
     }
     canvas.endShape();
}

function GetBlotTypeFromNumblots(numblots) {
     if (numblots == 3) {
          return "Ternary Cryptoblot";
     }
     if (numblots == 2) {
          return "Binary Cryptoblot";
     }
     if (numblots == 1) {
          return "Unary Cryptoblot";
     }
}

function genCoords() {
     coordsX = [0, 0];
     let starty = int(map(rnd(), 0, 1, (size / 10), size - (size / 10)));
     coordsY = [starty, starty];

     for (let i = 0; i < points; i++) {
          append(coordsX, nextX());
          append(coordsY, nextY());
     }

     append(coordsX, 0);
     append(coordsY, nextY());

     append(coordsX, 0);
     append(coordsY, nextY());
}

function nextX() {
     let tmpX = coordsX[coordsX.length - 1] + map(rnd(), 0, 1, 0 - freedom, freedom);
     while ((tmpX + (size / 2) < size / 10) || (tmpX + (size / 2) > size - (size / 10))) {
          tmpX = coordsX[coordsX.length - 1] + map(rnd(), 0, 1, 0 - (freedom * 2), freedom * 2);
     }
     return int(tmpX);
}

function nextY() {
     let tmpY = coordsY[coordsY.length - 1] + map(rnd(), 0, 1, 0 - freedom, freedom);
     while ((tmpY < size / 10) || (tmpY > size - (size / 10))) {
          tmpY = coordsY[coordsY.length - 1] + map(rnd(), 0, 1, 0 - (freedom * 2), freedom * 2);
     }
     return int(tmpY);
}

function getFillColor() {

     let which = int(map(rnd(), 0, 1, 0, colors.length));
     let threshold = map(rnd(), 0, 1, 0, 100);

     while (threshold > colfreqs[which]) {
          which = int(map(rnd(), 0, 1, 0, colors.length));
     }

     append(blotcolorname, colnames[which]);

     return colors[which];
}

function isSameCol(cola, colb) {
     for (let i = 0; i < colb.length; i++) {
          if (cola[i] != colb[i]) {
               return false;
          }
     }
     return true;
}

function fixCoords() {
     for (let i = 0; i < coordsX.length; i++) {
          coordsY[i] = coordsY[i] - halfsize;
     }

     let minx = size;
     let maxx = 0 - size;
     let miny = size;
     let maxy = 0 - size;
     for (let i = 0; i < coordsX.length; i++) {
          if (coordsX[i] < minx) {
               minx = coordsX[i];
          }
          if (coordsY[i] < miny) {
               miny = coordsY[i];
          }

          if (coordsX[i] > maxx) {
               maxx = coordsX[i];
          }
          if (coordsY[i] > maxy) {
               maxy = coordsY[i];
          }
     }

     let enlargeby = 450 / (maxx - minx);
     if ((450 / ((maxy * enlargeby) - (miny * enlargeby)) < 1) || enlargeby < 1.00) {
          enlargeby = 1.00;
     }

     let shiftby = (((maxy * enlargeby) - (miny * enlargeby)) / 2) - maxy;

     for (let i = 0; i < coordsX.length; i++) {
          coordsX[i] = coordsX[i] * enlargeby;
          coordsY[i] = (coordsY[i] * enlargeby) + shiftby;
     }

     for (let i = 0; i < coordsX.length; i++) {
          coordsY[i] = coordsY[i] + halfsize;
     }
}

function rnd() {
     seedA ^= seedA << 13;
     seedA ^= seedA >> 17;
     seedA ^= seedA << 5;

     return (((seedA < 0) ? ~seedA + 1 : seedA) % 1000) / 1000;
}